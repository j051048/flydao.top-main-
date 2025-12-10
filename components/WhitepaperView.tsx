import React from 'react';
import { ArrowLeft, FileText, CheckCircle2, Flame, ShieldCheck, Zap } from 'lucide-react';
import { APP_NAME } from '../constants';
import { useAppContext } from '../contexts/AppContext';

interface Props {
  onBack: () => void;
}

const WhitepaperView: React.FC<Props> = ({ onBack }) => {
  const { t } = useAppContext();

  return (
    <div className="min-h-screen bg-background pt-24 px-4 pb-20 transition-colors duration-500">
      <div className="max-w-4xl mx-auto">
        {/* Navigation Bar */}
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center text-textMuted hover:text-textMain hover:border-accent transition-all group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </button>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-white/5">
             <FileText className="w-4 h-4 text-accent" />
             <span className="text-xs font-mono text-textMuted uppercase tracking-wider">Whitepaper v1.0</span>
          </div>
        </div>

        {/* Document Container */}
        <div className="bg-surface backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>

          {/* Header */}
          <div className="text-center mb-16 relative z-10">
             <h1 className="text-4xl md:text-5xl font-black mb-4 bg-clip-text text-transparent bg-gradient-to-r from-textMain via-textMain to-textMuted">
               {APP_NAME} 白皮书
             </h1>
             <p className="text-xl text-accent font-light tracking-wide">
               —— 飞得更高，让社区真正做主
             </p>
          </div>

          <div className="space-y-12 relative z-10">
            
            {/* Section 1: Vision */}
            <section>
              <h2 className="text-2xl font-bold text-textMain mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                <Zap className="w-6 h-6 text-yellow-400" />
                项目愿景
              </h2>
              <div className="text-textMuted leading-relaxed space-y-4">
                <p>
                  <strong className="text-textMain">FLYDAO</strong> 是 X Layer 链上首款真正带现金流赋能的社区 meme 币。
                </p>
                <p>
                  我们把 OKX Web3 钱包的全部返佣收益（返佣码：<span className="text-accent font-mono font-bold">FLYDAO</span>）<strong className="text-textMain">100% 用于 FLYDAO 代币回购并永久销毁！</strong>
                </p>
                <p>
                  每邀请一人、每笔交易产生的返佣，都直接变成实打实的通缩燃料，让 <span className="text-textMain font-bold">FLY通证</span> 地板持续抬升，持币者躺着也能飞。
                </p>
              </div>
            </section>

            {/* Section 2: Core Mechanism */}
            <section>
              <h2 className="text-2xl font-bold text-textMain mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                <Flame className="w-6 h-6 text-red-500" />
                核心机制：返佣即回购，即销毁
              </h2>
              <div className="bg-white/5 rounded-xl p-6 border border-white/5 mb-6">
                <p className="text-center text-lg mb-2 text-textMain">官方统一返佣码</p>
                <div className="text-4xl font-black text-center text-accent tracking-widest font-mono select-all selection:bg-accent selection:text-black">
                  FLYDAO
                </div>
                <p className="text-center text-xs text-textMuted mt-2">（最高 40% 手续费返佣）</p>
              </div>
              <ul className="space-y-4">
                {[
                  '所有通过返佣码 FLYDAO 产生的 OKX Web3 钱包手续费返佣，实时归集至社区多签金库',
                  '金库资金 100% 公开用于市场回购 FLY',
                  '回购代币 100% 立即销毁（发送黑洞地址），永久减少流通量'
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 text-textMuted">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-textMain font-medium italic border-l-4 border-red-500 pl-4 py-2 bg-red-500/5">
                越多人使用返佣码 FLYDAO 开通/交易，FLYDAO通证 烧得越狠，越早加入烧得越猛！
              </p>
            </section>

            {/* Section 3: Token Info */}
            <section>
              <h2 className="text-2xl font-bold text-textMain mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                <ShieldCheck className="w-6 h-6 text-green-400" />
                代币信息
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-background/50 p-4 rounded-lg border border-white/5">
                  <div className="text-xs text-textMuted uppercase mb-1">代币名称</div>
                  <div className="text-lg font-bold text-textMain">FLYDAO (FLY)</div>
                </div>
                <div className="bg-background/50 p-4 rounded-lg border border-white/5">
                  <div className="text-xs text-textMuted uppercase mb-1">链上网络</div>
                  <div className="text-lg font-bold text-textMain">X Layer (OKX 公链)</div>
                </div>
                <div className="bg-background/50 p-4 rounded-lg border border-white/5 col-span-1 md:col-span-2">
                  <div className="text-xs text-textMuted uppercase mb-1">合约地址</div>
                  <div className="text-sm md:text-base font-mono font-bold text-accent break-all select-all">
                    0xbcb009e1a796363629b958802cb622e53bfd7db9
                  </div>
                </div>
                <div className="bg-background/50 p-4 rounded-lg border border-white/5">
                  <div className="text-xs text-textMuted uppercase mb-1">总供应量</div>
                  <div className="text-lg font-bold text-textMain">10 亿枚</div>
                </div>
                <div className="bg-background/50 p-4 rounded-lg border border-white/5">
                  <div className="text-xs text-textMuted uppercase mb-1">发行方式</div>
                  <div className="text-lg font-bold text-textMain">100% 公平 Mint (0税)</div>
                </div>
              </div>
            </section>

            {/* Section 4: History */}
            <section>
               <h2 className="text-xl font-bold text-textMain mb-4">6 年硬核投研社区加持</h2>
               <p className="text-textMuted mb-4">
                 FLYDAO 社区成立于 2019 年 8 月，500+ Web3 老兵、链上猎手、AI 极客组成。
               </p>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-textMuted">
                 <div className="flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                   免费输出上百份深度投研报告
                 </div>
                 <div className="flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                   每日 K 线、链上数据、资金面实时硬核分析
                 </div>
                 <div className="flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                   专注 AI×Crypto 前沿，免费分享社群自研作品
                 </div>
                 <div className="flex items-center gap-2">
                   <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                   不定期发布全网最硬的宏观 Web3 研报
                 </div>
               </div>
            </section>

             {/* Section 5: Roadmap */}
            <section>
               <h2 className="text-xl font-bold text-textMain mb-4">未来规划</h2>
               <ol className="list-decimal list-inside space-y-3 text-textMuted marker:text-accent marker:font-bold">
                 <li>FLYDAO 金库完全 DAO 化，持币即投票权</li>
                 <li>持续做大返佣码 <strong>FLYDAO</strong> 使用规模，目标 OKX 生态返佣 Top1 社区</li>
                 <li>推出 FLY Alpha Pass NFT，终身免费享所有付费级 Alpha 与 AI 作品</li>
                 <li>用金库资金孵化社区 AI+Web3 项目，创作者拿收益，社区拿治理权</li>
               </ol>
            </section>

            {/* CTA */}
            <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 border border-white/10 text-center">
              <h3 className="text-2xl font-bold text-textMain mb-2">现在就是最佳上车点</h3>
              <p className="text-textMuted mb-6">10 亿总量 + 真实现金流赋能 + 6 年老炮社区，2025 最稀缺组合</p>
              
              <div className="inline-block text-left bg-black/40 p-4 rounded-lg border border-white/10 mb-6 w-full md:w-auto">
                 <p className="text-sm text-gray-400 mb-1">官方 Twitter</p>
                 <p className="text-white font-mono">@FLYDAO投研社</p>
              </div>

              <p className="text-accent font-bold animate-pulse">
                FLYDAO — 返佣码 FLYDAO 一敲，代币就烧，地板就飞！
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default WhitepaperView;