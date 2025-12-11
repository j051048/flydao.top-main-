import { useAccount, useConnect, useDisconnect, useSwitchChain, useBalance, useEnsName } from 'wagmi';
import { getTruncatedAddress, getFriendlyErrorMessage } from './utils';
import { useMemo, useCallback } from 'react';
import { type Chain } from 'viem';
import { projectChains } from './config';

/**
 * 纯逻辑头等连接模块 - 核心 Hooks
 * 封装了类似 walletConnector.ts 的核心逻辑，但适配 React Hooks 模式
 */

export const useWallet = () => {
  // 获取核心账户状态
  const { address, isConnected, chainId, status: accountStatus, connector } = useAccount();
  
  // 获取连接控制方法
  const { connectAsync, connectors, error: connectError, isPending: isConnecting } = useConnect();
  const { disconnectAsync } = useDisconnect();
  const { switchChainAsync } = useSwitchChain();
  
  // 数据获取
  const { data: ensName } = useEnsName({ address, chainId: 1 });
  const { data: balance } = useBalance({ address });

  // 格式化错误信息
  const error = useMemo(() => {
    return getFriendlyErrorMessage(connectError);
  }, [connectError]);

  /**
   * 连接钱包核心逻辑
   * 对应 reference code 中的 connectWallet
   * 自动策略: 指定 connector -> Injected -> WalletConnect
   */
  const connectWallet = useCallback(async (connectorId?: string) => {
    try {
      // 1. 如果指定了 connectorId，直接连接
      if (connectorId) {
        const target = connectors.find(c => c.id === connectorId);
        if (target) {
          await connectAsync({ connector: target });
          return;
        }
      }

      // 2. 默认策略 (按照 config 中的顺序尝试)
      // 优先尝试 Injected (Browser Wallet)
      const injected = connectors.find(c => c.id === 'injected');
      const walletConnect = connectors.find(c => c.id === 'walletConnect');
      
      // 尝试连接 Injected
      if (injected) {
        try {
            // 如果已经连接，不需要重复连接
            if (isConnected && connector?.id === 'injected') return;
            
            await connectAsync({ connector: injected });
            return;
        } catch (err: any) {
            console.warn('Injected connection failed, attempting fallback...', err);
            // 检测是否为 "Provider not found" 或 "User rejected" 之外的错误
            // 如果是 Provider 没找到，自动回退到 WalletConnect
            const isProviderError = err.name === 'ConnectorNotFoundError' || 
                                    (err.message && (err.message.includes('Provider not found') || err.message.includes('Could not find a Wallet')));
            
            if (isProviderError && walletConnect) {
                console.log('Falling back to WalletConnect');
                await connectAsync({ connector: walletConnect });
                return;
            }
            // 如果是用户拒绝，则抛出错误停止尝试
            throw err;
        }
      } else if (walletConnect) {
        await connectAsync({ connector: walletConnect });
      } else {
        throw new Error('No supported wallet connector found.');
      }
    } catch (err) {
      console.error('Wallet connection error:', err);
      throw err;
    }
  }, [connectAsync, connectors, isConnected, connector]);

  /**
   * 断开连接
   */
  const disconnectWallet = useCallback(async () => {
    try {
      await disconnectAsync();
    } catch (err) {
      console.error('Disconnect failed:', err);
    }
  }, [disconnectAsync]);

  /**
   * 切换网络
   * 对应 reference code 中的 switchToProjectChain
   */
  const handleSwitchChain = useCallback(async (targetChainId: number) => {
    try {
      await switchChainAsync({ chainId: targetChainId });
    } catch (err: any) {
      // 自动添加网络逻辑通常由 wallet_switchEthereumChain 错误码 4902 触发
      // wagmi v2 内部已处理大部分 addChain 逻辑，但如果需要手动处理：
      if (err.code === 4902 || err.message?.includes?.('unrecognized chain')) {
         const chain = projectChains.find(c => c.id === targetChainId);
         if (chain) {
            // 在 wagmi v2 中，switchChain 包含 addChain 参数，通常不需要显式 addChain
            // 如果需要显式添加，可以使用 walletClient.addChain (但在 hook 层较复杂)
            // 这里主要依赖 wagmi 的自动处理
         }
      }
      console.error('Switch chain failed:', err);
      throw err;
    }
  }, [switchChainAsync]);

  return {
    // 状态
    address,
    formattedAddress: getTruncatedAddress(address),
    ens: ensName,
    chainId,
    isConnected,
    isConnecting: isConnecting || accountStatus === 'reconnecting',
    connectorName: connector?.name, // 暴露连接器名称 (如 MetaMask, WalletConnect)
    connectorIcon: connector?.icon,
    error,
    balance,
    
    // 方法
    connect: connectWallet,
    disconnect: disconnectWallet,
    switchChain: handleSwitchChain,
    
    // 暴露原始 connectors 供高级 UI 使用
    availableConnectors: connectors,
  };
};