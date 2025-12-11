import { http, createConfig, cookieStorage, createStorage } from 'wagmi';
import { mainnet, polygon, arbitrum, base, optimism, bsc, avalanche, xLayer } from 'viem/chains';
import { injected, walletConnect, coinbaseWallet, safe, metaMask } from 'wagmi/connectors';

/**
 * 纯逻辑头等连接模块 - 配置中心
 * Ref: Mature Core Code Implementation
 */

// WalletConnect Project ID
const WALLETCONNECT_PROJECT_ID = '3a8170812b534d0ff9d794f19a901d64';

// 1. 项目支持的链 (Project Supported Chains)
export const projectChains = [xLayer, mainnet, polygon, arbitrum, base, optimism, bsc, avalanche] as const;

export const wagmiConfig = createConfig({
  chains: projectChains,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  transports: {
    [xLayer.id]: http(),
    [mainnet.id]: http(),
    [polygon.id]: http(),
    [arbitrum.id]: http(),
    [base.id]: http(),
    [optimism.id]: http(),
    [bsc.id]: http(),
    [avalanche.id]: http(),
  },
  connectors: [
    // 优先级 1: 任意 Injected (EIP-6963 自动处理冲突, 兼容 OKX/Metamask 插件)
    injected({ shimDisconnect: true }),
    
    // 优先级 2: Safe 多签钱包
    safe(),
    
    // 优先级 3: WalletConnect v2 (移动端/跨端标准)
    // 注意: showQrModal: true 确保桌面端用户可以扫码
    walletConnect({ 
      projectId: WALLETCONNECT_PROJECT_ID,
      showQrModal: true,
      metadata: {
        name: 'FLYDAO',
        description: 'Web3 + AI Research Community',
        url: 'https://flydao.top',
        icons: ['https://flydao.top/logo.png'],
      },
    }),

    // 优先级 4: Coinbase Smart Wallet
    coinbaseWallet({ 
      appName: 'FLYDAO',
      preference: 'smartWalletOnly' as any
    }),
    
    // 优先级 5: MetaMask 特定连接器 (兼容移动端深链)
    metaMask({ 
      dappMetadata: { name: 'FLYDAO' }
    }),
  ],
});