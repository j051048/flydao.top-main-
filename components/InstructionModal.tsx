import React from 'react';
import { X, ExternalLink, Shield, CreditCard, Key, Smartphone, HelpCircle } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const InstructionModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onClick={onClose} />
      
      <div className="relative w-full max-w-2xl bg-[#0f172a] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-6 border-b border-white/10 flex justify-between items-center">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400 border border-blue-500/20">
                    <HelpCircle className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-white tracking-wide">AI应用使用说明</h2>
            </div>
            <button 
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors"
            >
                <X className="w-5 h-5" />
            </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
            
            {/* Step 1 */}
            <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-blue-500/20 text-blue-400 border border-blue-500/30 flex items-center justify-center font-mono font-bold text-sm">1</div>
                <div className="space-y-2">
                    <h3 className="font-bold text-gray-200">注册登录 API易 官网</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        访问官网进行注册（任意填写喜欢的注册账号、密码和QQ邮箱即可轻松注册）。
                    </p>
                    <a 
                        href="https://api.apiyi.com/register/?aff_code=4r8z" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-xs bg-blue-500/10 text-blue-400 px-3 py-2 rounded-lg hover:bg-blue-500/20 transition-colors border border-blue-500/20"
                    >
                        https://api.apiyi.com/register/?aff_code=4r8z <ExternalLink className="w-3 h-3" />
                    </a>
                </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-purple-500/20 text-purple-400 border border-purple-500/30 flex items-center justify-center font-mono font-bold text-sm">2</div>
                <div className="space-y-2">
                    <h3 className="font-bold text-gray-200 flex items-center gap-2">充值余额 <CreditCard className="w-4 h-4 text-purple-400" /></h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        点击顶部账户按钮，选择左侧余额充值，输入您愿意购买的AI API浏览金额，微信支付宝均可轻松充值。
                    </p>
                    <div className="text-xs bg-white/5 p-3 rounded text-gray-400 border border-white/5">
                        <span className="text-purple-400 font-bold">注：</span>AI的服务能力类似手机服务商的上网流量，是一种消耗品，但是不会每个月清零而是可以长期保存。
                    </div>
                </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 flex items-center justify-center font-mono font-bold text-sm">3</div>
                <div className="space-y-2">
                    <h3 className="font-bold text-gray-200 flex items-center gap-2">获取 API Key <Key className="w-4 h-4 text-yellow-400" /></h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        点击左上角令牌按钮，页面显示的初始令牌在最右侧操作栏找到第一个复制按钮，点击复制自己的APIKEY。
                    </p>
                    <div className="text-xs text-red-400/90 flex items-center gap-1 bg-red-500/10 p-2 rounded border border-red-500/10 w-fit">
                        <Shield className="w-3 h-3" /> 请妥善保存自己的apikey切勿透露给任何人
                    </div>
                </div>
            </div>

             {/* Step 4 */}
             <div className="flex gap-4">
                <div className="shrink-0 w-8 h-8 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 flex items-center justify-center font-mono font-bold text-sm">4</div>
                <div className="space-y-2">
                    <h3 className="font-bold text-gray-200">配置应用</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        点击您想使用的AI应用，在每个应用的右上角配置按钮中，选择第三方（自定义），粘贴填写自己的APIKEY后点击保存配置即可正常使用。
                    </p>
                </div>
            </div>

            {/* Note */}
            <div className="mt-6 p-4 bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-white/10 rounded-xl flex gap-3 items-start">
                <Smartphone className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div className="text-sm text-gray-300 leading-relaxed">
                    <span className="text-blue-400 font-bold">移动端技巧：</span> 用户使用手机浏览器打开，大多数品牌的手机浏览器均可点击设置（功能）键后点击添加到桌面（保存应用到桌面），无需安装app方便后续快捷使用。
                </div>
            </div>

        </div>
        
        {/* Footer Action */}
        <div className="p-4 border-t border-white/10 bg-black/20 flex justify-end">
             <button 
                onClick={onClose}
                className="px-6 py-2 bg-white/10 hover:bg-white/20 hover:text-white text-gray-300 rounded-lg text-sm font-medium transition-colors border border-white/5"
             >
                关闭
             </button>
        </div>
      </div>
    </div>
  );
};

export default InstructionModal;