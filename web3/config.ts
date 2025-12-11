import { http, createConfig } from 'wagmi';
import { mainnet, xLayer } from 'viem/chains';
import { injected, walletConnect } from 'wagmi/connectors';

/**
 * 纯逻辑头等连接模块 - 配置中心
 * 安全规范：1, 2, 3, 4, 8
 */

// 替换为您的 WalletConnect Project ID (从 cloud.walletconnect.com 获取)
const WALLETCONNECT_PROJECT_ID = '3a8170812b534d0ff9d794f19a901d64';

export const wagmiConfig = createConfig({
  chains: [xLayer, mainnet], // 规范 #8: 自动处理多链，X Layer 优先
  transports: {
    [mainnet.id]: http(),
    [xLayer.id]: http(),
  },
  connectors: [
    // 规范 #3: EIP-6963 多注入钱包标准 (支持 MetaMask, OKX, Rabby 并存)
    injected({ shimDisconnect: true }),
    // 规范 #2: WalletConnect v2 (移动端/跨端标准)
    walletConnect({ 
      projectId: WALLETCONNECT_PROJECT_ID,
      showQrModal: true, // 规范 #13: 移动端自动处理 Deep Link / QR
    }),
  ],
  // 规范 #5 & #6: 默认启用 EIP-712 和 EIP-6492 签名支持 (内置于 wagmi v2)
});