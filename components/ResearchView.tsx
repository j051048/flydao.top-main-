import React from 'react';
import { ArrowLeft, Calendar, TrendingUp, AlertTriangle, Anchor, Target, Zap, ShieldAlert, BarChart3, ArrowRight } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';

interface Props {
  onBack: () => void;
}

const ResearchView: React.FC<Props> = ({ onBack }) => {
  const { t } = useAppContext();

  // Data extracted from the PDF "Monetary Policy Showdown"
  const reportData = {
    title: "货币政策的对决：风暴眼中的比特币",
    subtitle: "2025年宏观投研报告：先抑后扬，剑指$180,000",
    date: "2025-12-08",
    cards: [
      {
        id: 'macro-clash',
        type: 'insight',
        icon: TrendingUp,
        color: 'text-blue-400',
        title: "宏观对峙：两大央行的政策博弈",
        content: (
          <div className="space-y-4">
            <p className="text-textMuted text-sm leading-relaxed">
              当前比特币市场正处于两大对立货币政策的拉锯战中。这种“政策错位”将导致BTC价格呈现<span className="text-textMain font-bold">“先抑后扬”</span>的走势。
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-lg">
                <div className="text-blue-400 font-bold mb-2 flex items-center gap-2">
                  <ArrowRight className="w-4 h-4 rotate-45" /> 挑战 (BOJ)
                </div>
                <div className="text-xs text-textMuted space-y-2">
                  <p>• 日本银行预计加息至 0.75%</p>
                  <p>• 加速日元套利交易平仓</p>
                  <p>• 短期抽取流动性，<span className="text-red-400">下行压力</span></p>
                </div>
              </div>
              <div className="bg-yellow-500/10 border border-yellow-500/20 p-4 rounded-lg">
                <div className="text-yellow-400 font-bold mb-2 flex items-center gap-2">
                  <Zap className="w-4 h-4" /> 机遇 (Fed)
                </div>
                <div className="text-xs text-textMuted space-y-2">
                  <p>• 美联储降息概率高达 87%</p>
                  <p>• 结束量化紧缩 (QT)</p>
                  <p>• 注入流动性，<span className="text-green-400">提振风险偏好</span></p>
                </div>
              </div>
            </div>
          </div>
        )
      },
      {
        id: 'liquidity',
        type: 'alert',
        icon: AlertTriangle,
        color: 'text-red-400',
        title: "流动性警报：日元套利交易平仓",
        content: (
          <div className="space-y-4">
            <div className="flex items-center justify-between text-sm border-b border-white/5 pb-2">
              <span className="text-textMuted">日元套利交易规模缩水</span>
              <span className="text-textMain font-mono">$1.2T → $0.9T</span>
            </div>
            <div className="flex items-center justify-between text-sm border-b border-white/5 pb-2">
              <span className="text-textMuted">预计回流日本资金</span>
              <span className="text-textMain font-mono">$800B - $1.5T</span>
            </div>
            <p className="text-xs text-textMuted bg-red-500/5 p-3 rounded border border-red-500/10">
              <strong className="text-red-400">核心解读：</strong> 日本银行加息推动日元升值，迫使大规模套利交易平仓，全球风险资产面临短期流动性挤压。
            </p>
          </div>
        )
      },
      {
        id: 'institutional',
        type: 'data',
        icon: Anchor,
        color: 'text-purple-400',
        title: "风暴中的锚点：机构采用",
        content: (
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="p-4 bg-surface rounded-xl border border-white/5">
                <div className="text-2xl font-black text-textMain mb-1">$223亿</div>
                <div className="text-xs text-textMuted uppercase">2025年 ETF 净流入</div>
              </div>
              <div className="p-4 bg-surface rounded-xl border border-white/5">
                <div className="text-2xl font-black text-textMain mb-1">55%</div>
                <div className="text-xs text-textMuted uppercase">机构持仓占比 (提升10%)</div>
              </div>
            </div>
            <p className="text-sm text-textMuted">
              与以往周期不同，当前的比特币市场拥有前所未有的机构参与度作为缓冲。黑石 IBIT 持仓规模已约 <span className="text-white font-bold">$600亿</span>。
            </p>
          </div>
        )
      },
      {
        id: 'prediction',
        type: 'chart',
        icon: Target,
        color: 'text-green-400',
        title: "通往 $180,000 之路",
        content: (
          <div className="space-y-6">
             <div className="relative h-48 w-full bg-white/5 rounded-xl border border-white/5 p-4 flex items-end justify-between group overflow-hidden">
                {/* Simplified Chart Line */}
                <svg className="absolute inset-0 w-full h-full text-green-500/20" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <path d="M0,80 C20,80 30,50 50,50 C70,50 80,10 100,5 L100,100 L0,100 Z" fill="currentColor" />
                  <path d="M0,80 C20,80 30,50 50,50 C70,50 80,10 100,5" fill="none" stroke="rgb(34, 197, 94)" strokeWidth="2" />
                </svg>
                
                {/* Points */}
                <div className="relative z-10 flex flex-col items-center gap-1">
                   <span className="text-xs font-mono text-textMuted">2026/01</span>
                   <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                   <span className="text-sm font-bold text-textMain">$85k</span>
                </div>
                <div className="relative z-10 flex flex-col items-center gap-1 mb-12">
                   <span className="text-xs font-mono text-textMuted">2026/04</span>
                   <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                   <span className="text-sm font-bold text-textMain">$105k</span>
                </div>
                <div className="relative z-10 flex flex-col items-center gap-1 mb-32">
                   <span className="text-xs font-mono text-textMuted">2026/06</span>
                   <div className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_10px_#22c55e]"></div>
                   <span className="text-lg font-black text-green-400">$180k</span>
                </div>
             </div>
             <div className="text-sm text-textMuted leading-relaxed">
               核心预测：宏观力量的博弈将引导BTC走出<span className="text-white">“短期探底 ($85k) -> 中期复苏 ($105k) -> 长期加速 ($180k)”</span>的三阶段路径。
             </div>
          </div>
        )
      },
      {
        id: 'strategy',
        type: 'action',
        icon: ShieldAlert,
        color: 'text-orange-400',
        title: "投资策略与风控",
        content: (
          <div className="space-y-3">
             <div className="flex gap-4 items-start p-3 bg-white/5 rounded-lg border-l-2 border-green-500">
               <div className="flex-1">
                 <h4 className="text-sm font-bold text-textMain mb-1">布局多头</h4>
                 <p className="text-xs text-textMuted">入场区间: <span className="text-green-400 font-mono">$95,000 - $98,000</span> (阻力位突破后)</p>
               </div>
             </div>
             <div className="flex gap-4 items-start p-3 bg-white/5 rounded-lg border-l-2 border-red-500">
               <div className="flex-1">
                 <h4 className="text-sm font-bold text-textMain mb-1">止损风控</h4>
                 <p className="text-xs text-textMuted">设于关键支撑 <span className="text-red-400 font-mono">$80,000</span> 下方</p>
               </div>
             </div>
             <div className="flex gap-4 items-start p-3 bg-white/5 rounded-lg border-l-2 border-orange-500">
               <div className="flex-1">
                 <h4 className="text-sm font-bold text-textMain mb-1">仓位管理</h4>
                 <p className="text-xs text-textMuted">建议BTC仓位不超过投资组合总资产的 15%。机构建议 5-10% 长期配置。</p>
               </div>
             </div>
          </div>
        )
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background pt-24 px-4 pb-20 transition-colors duration-500">
      <div className="max-w-3xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <button 
            onClick={onBack}
            className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center text-textMuted hover:text-textMain hover:border-accent transition-all group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          </button>
          <div>
             <h1 className="text-2xl font-bold text-textMain tracking-tight">Deep Research</h1>
             <p className="text-xs text-textMuted uppercase tracking-widest">FLYDAO Intelligence Unit</p>
          </div>
        </div>

        {/* Report Hero Card */}
        <div className="mb-10 p-1 rounded-3xl bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 shadow-2xl">
          <div className="bg-[#0a0a0a] rounded-[22px] p-6 md:p-10 relative overflow-hidden">
             {/* Background Pattern */}
             <div className="absolute inset-0 opacity-20 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
             <div className="absolute -right-20 -top-20 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px]"></div>

             <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2 py-1 rounded bg-blue-500/20 text-blue-300 text-[10px] font-bold uppercase tracking-wider border border-blue-500/20">Macro Report</span>
                  <div className="flex items-center text-textMuted text-xs gap-1">
                     <Calendar className="w-3 h-3" />
                     {reportData.date}
                  </div>
                </div>

                <h2 className="text-2xl md:text-4xl font-black text-white mb-2 leading-tight">
                  {reportData.title}
                </h2>
                <p className="text-lg text-gray-400 font-light mb-8">
                  {reportData.subtitle}
                </p>

                <div className="flex flex-wrap gap-4">
                   <div className="flex items-center gap-2 text-sm text-gray-300">
                      <BarChart3 className="w-4 h-4 text-green-400" /> Target: <span className="font-mono font-bold text-white">$180k</span>
                   </div>
                   <div className="flex items-center gap-2 text-sm text-gray-300">
                      <ShieldAlert className="w-4 h-4 text-orange-400" /> Risk: <span className="font-mono font-bold text-white">Medium</span>
                   </div>
                </div>
             </div>
          </div>
        </div>

        {/* Minimalist Card Flow */}
        <div className="space-y-6 relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-white/10 hidden md:block"></div>

          {reportData.cards.map((card, index) => (
            <div key={card.id} className="relative pl-0 md:pl-20 group">
               {/* Timeline Node */}
               <div className="absolute left-6 md:left-8 top-8 -translate-x-1/2 w-3 h-3 rounded-full bg-surface border-2 border-white/20 z-10 hidden md:block group-hover:border-accent group-hover:scale-125 transition-all"></div>

               <div className="bg-surface backdrop-blur-md border border-white/5 rounded-2xl p-6 hover:border-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex items-start gap-4">
                     <div className={`shrink-0 w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/5 ${card.color}`}>
                        <card.icon className="w-6 h-6" />
                     </div>
                     <div className="flex-1">
                        <h3 className="text-lg font-bold text-textMain mb-4">{card.title}</h3>
                        {card.content}
                     </div>
                  </div>
               </div>
            </div>
          ))}

          {/* Conclusion Card */}
          <div className="relative pl-0 md:pl-20">
             <div className="bg-gradient-to-r from-primary/10 to-secondary/10 border border-white/10 rounded-2xl p-8 text-center">
                <h3 className="text-xl font-bold text-textMain mb-2">结论：数字黄金的成熟礼</h3>
                <p className="text-textMuted text-sm mb-6">
                  2025年底的政策双刃剑，既是对比特币韧性的一次严峻考验，也是其作为宏观对冲资产角色的确立。拥抱结构性转变，驾驭宏观浪潮。
                </p>
                <div className="text-accent font-bold animate-pulse">
                   FLYDAO — 洞察未来，决胜链上
                </div>
             </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ResearchView;