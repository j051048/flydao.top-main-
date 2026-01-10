import React from 'react';
import { ArrowRight, Globe, Sparkles } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';
import { SectionType } from '../types';

interface Props {
  onNavigate: (section: SectionType) => void;
}

const HeroSection: React.FC<Props> = ({ onNavigate }) => {
  const { t } = useAppContext();

  return (
    <div className="relative min-h-[95vh] flex items-center justify-center overflow-hidden pt-20">
      
      {/* Background Ambience */}
      <div className="absolute inset-0 z-0 pointer-events-none">
         {/* Central Glow */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-primary/20 via-accent/10 to-transparent rounded-full blur-[100px] opacity-40 animate-pulse"></div>
         
         {/* Mesh Grid - Adjusted opacity for light mode */}
         <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] dark:bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        {/* Status Badge - Updated Border/Bg */}
        <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-surface border border-borderDim backdrop-blur-md mb-12 animate-in fade-in slide-in-from-bottom-4 duration-700 shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-[10px] font-mono font-bold text-textMuted uppercase tracking-[0.2em]">{t.hero.status}</span>
        </div>

        {/* Main Title - Updated Gradient for Light Mode */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-gray-900 via-gray-700 to-gray-500 dark:from-white dark:via-white/90 dark:to-white/50 mb-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100 drop-shadow-sm dark:drop-shadow-none">
          {t.hero.title}
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-textMuted max-w-2xl mx-auto mb-16 leading-relaxed font-light tracking-wide animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          {t.hero.subtitle}
        </p>

        {/* Actions - Updated Button Styles */}
        <div className="flex flex-col sm:flex-row items-center gap-6 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
          <button 
            onClick={() => {
              const el = document.getElementById('explore-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative px-10 py-5 bg-textMain text-background rounded-full font-bold text-sm tracking-widest uppercase overflow-hidden transition-all hover:scale-105 shadow-[0_0_20px_-5px_rgba(0,0,0,0.2)] dark:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_-5px_rgba(0,0,0,0.3)] dark:hover:shadow-[0_0_60px_-10px_rgba(255,255,255,0.5)]"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <span className="relative z-10 flex items-center gap-3 group-hover:text-white transition-colors">
              {t.hero.start} <ArrowRight className="w-4 h-4" />
            </span>
          </button>
          
          <button 
            onClick={() => onNavigate(SectionType.WHITEPAPER)}
            className="group px-10 py-5 bg-surface border border-borderDim rounded-full font-bold text-sm text-textMain tracking-widest uppercase hover:bg-black/5 dark:hover:bg-white/5 hover:border-black/10 dark:hover:border-white/20 transition-all flex items-center gap-3 backdrop-blur-sm"
          >
            <Globe className="w-4 h-4 text-textMuted group-hover:text-textMain transition-colors" />
            {t.hero.whitepaper}
          </button>
        </div>

        {/* Stats Strip - Updated Border */}
        <div className="mt-24 w-full max-w-4xl glass-panel rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 animate-in fade-in zoom-in-95 duration-1000 delay-500 border-t border-borderDim">
          {[
            { label: t.hero.stats.community, value: '150K+', color: 'text-blue-500 dark:text-blue-400' },
            { label: t.hero.stats.treasury, value: '$25M+', color: 'text-purple-500 dark:text-purple-400' },
            { label: t.hero.stats.projects, value: '85+', color: 'text-green-500 dark:text-green-400' },
            { label: t.hero.stats.proposals, value: '420', color: 'text-orange-500 dark:text-orange-400' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center group cursor-default">
              <div className={`text-2xl md:text-3xl font-bold text-textMain mb-2 group-hover:scale-110 transition-transform duration-300 font-mono tracking-tight`}>{stat.value}</div>
              <div className="text-[10px] font-bold text-textMuted uppercase tracking-widest group-hover:text-textMain transition-colors">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;