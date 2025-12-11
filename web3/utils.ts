import { getAddress, isAddress } from 'viem';

/**
 * 纯逻辑头等连接模块 - 工具函数
 * 安全规范：10, 11
 */

/**
 * 安全地截断地址
 * 规范 #10: 前4后4 + 校验和格式 (EIP-55 Checksum)
 * 规范 #11: 外部输入必须经过 viem validate
 */
export const getTruncatedAddress = (address: string | undefined): string => {
  if (!address) return '';
  
  try {
    // 强制进行 checksum 转换，如果地址非法会抛出错误，防止钓鱼显示假地址
    const checksummedAddress = getAddress(address);
    return `${checksummedAddress.slice(0, 6)}...${checksummedAddress.slice(-4)}`;
  } catch (error) {
    console.error('Invalid address format detected:', address);
    return 'Invalid Address';
  }
};

/**
 * 校验地址格式
 */
export const isValidAddress = (address: string): boolean => {
  return isAddress(address);
};

export const formatChainName = (chainId: number): string => {
  switch (chainId) {
    case 1: return 'Ethereum';
    case 196: return 'X Layer';
    default: return 'Unknown Network';
  }
};