import { getAddress, isAddress } from 'viem';

/**
 * 纯逻辑头等连接模块 - 工具函数
 * 安全规范：10, 11, 12
 */

/**
 * 安全地截断地址
 * 规范 #10: 前4后4 + 校验和格式 (EIP-55 Checksum)
 * 规范 #11: 外部输入必须经过 viem validate
 */
export const getTruncatedAddress = (address: string | undefined): string => {
  if (!address) return '';
  
  try {
    // 规范 #11: 必须验证地址格式
    if (!isAddress(address)) {
       throw new Error('Invalid address format');
    }
    // 规范 #10: 强制进行 Checksum 转换 (EIP-55)，防止大小写混淆钓鱼
    const checksummedAddress = getAddress(address);
    return `${checksummedAddress.slice(0, 6)}...${checksummedAddress.slice(-4)}`;
  } catch (error) {
    console.error('Security Alert: Invalid address format detected:', address);
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
    case 1: return 'Ethereum Mainnet';
    case 196: return 'X Layer';
    default: return `Chain ID: ${chainId}`;
  }
};

/**
 * 规范 #12: 错误信息返回中文友好提示 + 错误码
 */
export const getFriendlyErrorMessage = (error: any): string => {
  if (!error) return '';
  
  const msg = error.message || error.toString();
  
  // 常见错误码映射
  if (error.code === 4001 || msg.includes('User rejected') || msg.includes('rejected the request')) {
    return '用户取消了操作 (User Rejected) [Code: 4001]';
  }
  if (error.code === -32002 || msg.includes('Already processing')) {
    return '请求正在处理中，请查看钱包 (Pending) [Code: -32002]';
  }
  if (msg.includes('Connector not found')) {
    return '未检测到可用钱包，请安装 MetaMask 或 OKX Wallet';
  }
  if (msg.includes('Chain not configured')) {
    return '当前网络不支持，请切换网络';
  }

  // 截断过长的错误信息
  return `连接错误: ${msg.slice(0, 60)}${msg.length > 60 ? '...' : ''}`;
};
