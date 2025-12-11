import { useAccount, useConnect, useDisconnect, useSwitchChain, useBalance, useEnsName } from 'wagmi';
import { getTruncatedAddress } from './utils';
import { useMemo } from 'react';

/**
 * 纯逻辑头等连接模块 - 核心 Hooks
 * 安全规范：7, 9, 12
 */

export const useWallet = () => {
  // 规范 #7: 主动监听 accountsChanged, chainChanged, disconnect (useAccount 内部自动处理)
  const { address, isConnected, chainId, status: accountStatus } = useAccount();
  const { connect, connectors, error: connectError, isPending: isConnecting } = useConnect();
  const { disconnect } = useDisconnect();
  const { switchChain } = useSwitchChain();
  const { data: ensName } = useEnsName({ address });
  const { data: balance } = useBalance({ address });

  // 规范 #12: 错误信息返回中文友好提示 + 错误码
  const error = useMemo(() => {
    if (!connectError) return null;
    const msg = connectError.message;
    if (msg.includes('User rejected')) return '用户取消了操作 (User Rejected)';
    if (msg.includes('Connector not found')) return '未检测到钱包，请安装 OKX Wallet 或 MetaMask';
    return `连接错误: ${msg.slice(0, 50)}...`;
  }, [connectError]);

  // 获取主要连接器 (优先 EIP-6963, 其次 Injected)
  // 规范 #9: 注入钱包冲突检测与优先处理
  const connectDefault = () => {
    // 优先寻找已注入的 EIP-6963 提供商 (如 OKX Wallet)
    const injectedConnector = connectors.find(c => c.type === 'injected');
    if (injectedConnector) {
      connect({ connector: injectedConnector });
    } else {
      // 否则使用 WalletConnect
      const wcConnector = connectors.find(c => c.type === 'walletConnect');
      if (wcConnector) connect({ connector: wcConnector });
    }
  };

  return {
    // 状态
    address,
    formattedAddress: getTruncatedAddress(address),
    ensName,
    chainId,
    isConnected,
    isConnecting: isConnecting || accountStatus === 'reconnecting',
    balance,
    error,
    
    // 动作
    connect: connectDefault, // 默认连接逻辑
    connectWithConnector: connect, // 高级连接逻辑 (传入 connectorId)
    disconnect,
    switchChain,
    availableConnectors: connectors,
  };
};