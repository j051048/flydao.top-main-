import React from 'react';
import { ArrowLeft, FileText, CheckCircle2, Flame, ShieldCheck, Zap, Rocket, Users, Target, Lock, Star } from 'lucide-react';
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
             <span className="text-xs font-mono text-textMuted uppercase tracking-wider">Whitepaper v2.0</span>
          </div>
        </div>

        {/* Document Container */}
        <div className="bg-surface backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none"></div>

          {/* Header */}
          <div className="text-center mb-16 relative z-10">
             <h1 className="text-4xl md:text-5xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-textMain via-textMain to-textMuted leading-tight">
               FLYDAO 白皮书
             </h1>
             <p className="text-lg md:text-xl text-accent font-light tracking-wide max-w-2xl mx-auto">
               —— 铸就 Web3 + AI 的社区星辰大海，让每枚 FLY 成为通往未来的通行证
             </p>
          </div>

          <div className="space-y-16 relative z-10">

            {/* Section 1: Vision */}
            <section>
              <h2 className="text-2xl font-bold text-textMain mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                <Rocket className="w-6 h-6 text-purple-400" />
                项目愿景：重塑 Web3 的社区星河
              </h2>
              <div className="text-textMuted leading-relaxed space-y-4">
                <p>
                  <strong className="text-textMain">FLYDAO</strong> 超越 meme 币的表象，我们是 X Layer 链上首款真正<strong className="text-textMain">「现金流驱动、AI 赋能」</strong>的社区 DAO 代币。
                </p>
                <p>
                  想象一个世界：Web3 不再是零散的投机游戏，而是由 500+ 老兵铸就的智能生态帝国。FLYDAO 将 OKX Web3 钱包的全球返佣洪流（返佣码：<span className="text-accent font-mono">FLYDAO</span>）转化为代币的永动机，每一笔交易、每一次邀请，都点燃通缩之火，推动 FLY 直冲星辰。
                </p>
                <p>
                  我们不只是烧币，我们在构建一个 AI×Crypto 的元宇宙飞轮：社区 Alpha 变现为现金流，现金流反哺 AI 创新，创新驱动 Web3 革命。FLYDAO 是 2025 年 Web3 的黎明之光——让普通持有者成为生态主宰，AI 工具与投研智慧普惠全球，铸就一个「人人飞升、社区永盛」的数字乌托邦。
                </p>
                <p className="italic text-accent/80 border-l-2 border-accent pl-4">
                    飞向月球？不，我们飞向银河！
                </p>
              </div>
            </section>

            {/* Section 2: Core Mechanism */}
            <section>
              <h2 className="text-2xl font-bold text-textMain mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                <Flame className="w-6 h-6 text-red-500" />
                核心机制：返佣永动机，通缩即正义
              </h2>
              <div className="bg-gradient-to-br from-red-500/10 to-orange-500/5 rounded-xl p-8 border border-red-500/20 mb-8 relative overflow-hidden group">
                <div className="absolute -right-10 -top-10 w-32 h-32 bg-red-500/20 rounded-full blur-[40px] group-hover:scale-150 transition-transform duration-700"></div>
                
                <p className="text-center text-sm uppercase tracking-widest text-textMuted mb-2">官方统一返佣码</p>
                <div className="text-5xl md:text-6xl font-black text-center text-white tracking-widest font-mono mb-2 drop-shadow-[0_0_15px_rgba(239,68,68,0.5)]">
                  FLYDAO
                </div>
                <p className="text-center text-sm text-red-300 font-bold">（最高 40% 手续费返佣，全球适用）</p>
              </div>
              
              <div className="grid gap-4">
                {[
                  '通过返佣码 FLYDAO 开通/交易的 OKX Web3 钱包手续费返佣，100% 实时注入社区多签金库',
                  '金库资金全额公开回购 FLY 代币，注入流动性并稳定地板',
                  '回购代币 100% 立即销毁（黑洞地址），铸就铁律通缩——流通量永不复增'
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 rounded-lg bg-white/5 border border-white/5 hover:border-red-500/30 transition-colors">
                    <div className="shrink-0 w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center text-red-400 font-bold text-xs mt-0.5">{i + 1}</div>
                    <span className="text-textMuted text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <p className="mt-6 text-textMuted text-sm bg-surface p-4 rounded border border-white/10">
                 🔥 <span className="text-textMain font-bold">已于 2025 年 12 月 9 日完成首笔销毁</span>。这不是短期炒作，而是指数级飞轮：用户越多，返佣越多，烧币越猛，FLY 价值指数飙升！
              </p>
            </section>

            {/* Section 3: Token Info */}
            <section>
              <h2 className="text-2xl font-bold text-textMain mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                <ShieldCheck className="w-6 h-6 text-green-400" />
                代币信息：公平铸就，赋能无限
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InfoCard label="代币名称" value="FLYDAO (FLY)" />
                <InfoCard label="链上网络" value="X Layer (OKX 公链)" desc="低 Gas、高 TPS，生态红利爆发中" />
                <InfoCard label="发行方式" value="100% 公平 Mint" desc="@starsmint.xyz (零预挖、无 VC)" />
                <InfoCard label="总供应量" value="10 亿枚" desc="80% 流动性, 20% 社区空投+销毁" />
                <InfoCard label="交易税收" value="0 税" desc="透明到原子级" />
                <div className="bg-background/40 p-5 rounded-xl border border-white/5 col-span-1 md:col-span-2 md:col-start-1">
                  <div className="text-xs text-textMuted uppercase mb-1 tracking-wider">合约地址</div>
                  <div className="text-sm md:text-base font-mono text-accent break-all flex items-center gap-2">
                    0xbcb009e1a796363629b958802cb622e53bfd7db9
                  </div>
                </div>
              </div>
            </section>

            {/* Section 4: Community Gene */}
            <section>
               <h2 className="text-2xl font-bold text-textMain mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                 <Users className="w-6 h-6 text-blue-400" />
                 社区基因：6 年 AI+Web3 硬核堡垒
               </h2>
               <div className="bg-gradient-to-r from-blue-900/20 to-transparent p-6 rounded-xl border-l-4 border-blue-500 mb-6">
                 <p className="text-textMain font-medium mb-2">成立于 2019 年 8 月</p>
                 <p className="text-textMuted text-sm">FLYDAO 投研社区已凝聚 500+ Web3 先锋：链上交易大神、AI 架构师、宏观分析师。</p>
               </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                 {[
                    '数百份深度项目投研报告，捕捉牛市前夜',
                    '每日 K 线、链上数据、资金面实时解码，Alpha 零门槛',
                    'AI×Crypto 交叉前沿：社群自研 AI 短剧、小程序、游戏、生成艺术免费放送',
                    '季度宏观 Web3 研报，预言 AI 浪潮与链上融合'
                 ].map((text, i) => (
                    <div key={i} className="flex gap-3 items-start">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0" />
                        <span className="text-sm text-textMuted">{text}</span>
                    </div>
                 ))}
               </div>
               <p className="mt-4 text-sm text-textMuted italic">
                 这里不是散户游乐场，而是精英熔炉——6 年信任壁垒，铸就无可复制的社区引擎。
               </p>
            </section>

            {/* Section 5: Token Utility (NEW) */}
            <section>
              <h2 className="text-2xl font-bold text-textMain mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                <Lock className="w-6 h-6 text-yellow-400" />
                FLY 代币赋能：实用燃料，生态闭环
              </h2>
              <p className="text-textMuted mb-6">
                FLY 不再是纯 meme，而是 Web3+AI 生态的「通用通行证」。未来，所有社区应用需 FLY 支付解锁：
              </p>
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-yellow-400/30 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-yellow-400/10 flex items-center justify-center mb-3 text-yellow-400">
                          <Zap className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-textMain mb-2">AI 工具付费墙</h3>
                      <p className="text-xs text-textMuted leading-relaxed">AI 影视生成器、小程序部署、游戏模组，支付 FLY 即可使用（最低门槛）。</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-yellow-400/30 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-yellow-400/10 flex items-center justify-center mb-3 text-yellow-400">
                          <Star className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-textMain mb-2">高级 Alpha 访问</h3>
                      <p className="text-xs text-textMuted leading-relaxed">独家投研报告、实时行情预测、AI 驱动的投资模拟器——FLY 买单，终身订阅。</p>
                  </div>
                  <div className="p-4 bg-white/5 rounded-xl border border-white/5 hover:border-yellow-400/30 transition-colors">
                      <div className="w-10 h-10 rounded-full bg-yellow-400/10 flex items-center justify-center mb-3 text-yellow-400">
                          <Target className="w-5 h-5" />
                      </div>
                      <h3 className="font-bold text-textMain mb-2">NFT 铸造与空投</h3>
                      <p className="text-xs text-textMuted leading-relaxed">FLY Alpha Pass NFT 需 FLY 铸造，解锁 VIP 权益。</p>
                  </div>
              </div>
              <div className="p-4 bg-surface rounded-lg border border-white/10 text-sm text-textMuted">
                 <span className="text-textMain font-bold">💰 经济循环：</span> 收取的 FLY 100% 循环赋能：50% 立即回购销毁（强化通缩），50% 注入运营金库（奖励空投、创作者、DAO 提案）。支付即贡献，持有即增值！
              </div>
            </section>

             {/* Section 6: Roadmap */}
            <section>
               <h2 className="text-2xl font-bold text-textMain mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                 <Target className="w-6 h-6 text-pink-400" />
                 未来蓝图：从 meme 到帝国 (2026)
               </h2>
               <div className="space-y-6 relative border-l border-white/10 ml-3 pl-8">
                 <RoadmapItem 
                    quarter="Q1 2026" 
                    title="DAO 化与支付网关" 
                    desc="金库全面 DAO 化，FLY 持有人提案投票；上线 FLY 支付网关，首批 AI 应用（短剧生成器）强制 FLY 解锁。" 
                 />
                 <RoadmapItem 
                    quarter="Q2 2026" 
                    title="生态扩张" 
                    desc="返佣码 FLYDAO 渗透 OKX 全球用户，目标生态返佣 Top1；孵化 5+ 社区 AI+Web3 项目。" 
                 />
                 <RoadmapItem 
                    quarter="Q3 2026" 
                    title="跨链与 NFT" 
                    desc="推出 FLY 跨链桥 (Solana/Ethereum)；FLY Alpha Pass NFT 生态，持有者享 20% 支付返利。" 
                 />
                 <RoadmapItem 
                    quarter="Q4 2026+" 
                    title="FLYDAO 元宇宙" 
                    desc="AI 驱动的虚拟投研大会、链上游戏公会，所有互动以 FLY 结算，铸就自循环帝国。" 
                 />
               </div>
               <p className="mt-6 text-center text-textMain font-bold">
                 我们不追热点，我们定义未来：FLY 将成为 AI 时代 Web3 的原生燃料。
               </p>
            </section>

             {/* Section 7: Why 2025 (NEW) */}
             <section>
               <h2 className="text-2xl font-bold text-textMain mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                 <Star className="w-6 h-6 text-accent" />
                 为什么 FLYDAO 是 2025 终极叙事？
               </h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <ReasonCard title="公平发射 + 返佣飞轮" desc="公平铸造完成，返佣机制已启动，首销毁证明逻辑闭环。" />
                  <ReasonCard title="极度稀缺" desc="10 亿总量 + 真金现金流 + 实用支付赋能 = 稀缺 meme 进化体。" />
                  <ReasonCard title="双涡轮引擎" desc="6 年社区沉淀 + OKX 强大生态 = 流量与信任的双重保障。" />
                  <ReasonCard title="极致通缩" desc="通缩不止于烧币，还延伸至生态支付——越用越稀缺，越稀缺越飞！" />
               </div>
            </section>

            {/* CTA */}
            <div className="mt-16 p-1 rounded-3xl bg-gradient-to-r from-primary via-secondary to-accent">
                <div className="bg-[#050505] rounded-[22px] p-8 md:p-12 text-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
                    
                    <h3 className="text-3xl font-black text-white mb-4 relative z-10">加入 Web3 + AI 的宇宙革命</h3>
                    <p className="text-gray-400 mb-8 max-w-lg mx-auto relative z-10">
                        用返佣码 <span className="text-white font-bold">FLYDAO</span> 开启 OKX Web3，每笔交易都在铸就你的星辰份额。
                    </p>

                    <div className="flex flex-col md:flex-row gap-4 justify-center items-center relative z-10">
                        <div className="bg-white/10 border border-white/10 px-6 py-3 rounded-xl">
                            <span className="text-xs text-gray-500 block uppercase tracking-wider mb-1">官方返佣码</span>
                            <span className="text-xl font-mono font-bold text-accent">FLYDAO</span>
                        </div>
                         <a href="https://flydao.top" target="_blank" rel="noopener noreferrer" className="bg-white/10 border border-white/10 px-6 py-3 rounded-xl hover:bg-white/20 transition-colors">
                            <span className="text-xs text-gray-500 block uppercase tracking-wider mb-1">官网</span>
                            <span className="text-xl font-bold text-white">flydao.top</span>
                        </a>
                         <div className="bg-white/10 border border-white/10 px-6 py-3 rounded-xl">
                            <span className="text-xs text-gray-500 block uppercase tracking-wider mb-1">Twitter</span>
                            <span className="text-xl font-bold text-white">@FLYDAO投研社</span>
                        </div>
                    </div>

                    <p className="mt-8 text-sm text-gray-500 relative z-10">
                        FLYDAO — 返佣点火，AI 赋能，飞向银河，一起铸就永恒！
                    </p>
                </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

const InfoCard = ({ label, value, desc }: { label: string, value: string, desc?: string }) => (
    <div className="bg-background/40 p-5 rounded-xl border border-white/5">
        <div className="text-xs text-textMuted uppercase mb-1 tracking-wider">{label}</div>
        <div className="text-lg font-bold text-textMain mb-1">{value}</div>
        {desc && <div className="text-xs text-textMuted">{desc}</div>}
    </div>
);

const RoadmapItem = ({ quarter, title, desc }: { quarter: string, title: string, desc: string }) => (
    <div className="relative">
        <div className="absolute -left-[41px] top-1 w-5 h-5 rounded-full bg-surface border-4 border-accent shadow-[0_0_10px_var(--accent-color)]"></div>
        <div className="text-accent font-mono text-sm font-bold mb-1">{quarter}</div>
        <h4 className="text-lg font-bold text-textMain mb-2">{title}</h4>
        <p className="text-sm text-textMuted leading-relaxed">{desc}</p>
    </div>
);

const ReasonCard = ({ title, desc }: { title: string, desc: string }) => (
    <div className="p-5 bg-surface border border-white/5 rounded-xl hover:bg-white/5 transition-colors">
        <h4 className="text-textMain font-bold mb-2 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            {title}
        </h4>
        <p className="text-xs text-textMuted leading-relaxed">{desc}</p>
    </div>
);

export default WhitepaperView;