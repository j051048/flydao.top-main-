import React from 'react';
import { ArrowRight, Globe } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';
import { SectionType } from '../types';

interface Props {
  onNavigate: (section: SectionType) => void;
}

const HeroSection: React.FC<Props> = ({ onNavigate }) => {
  const { t } = useAppContext();

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] opacity-30 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] opacity-20"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'linear-gradient(var(--border-color) 1px, transparent 1px), linear-gradient(90deg, var(--border-color) 1px, transparent 1px)', 
          backgroundSize: '50px 50px' 
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md animate-float">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          <span className="text-accent text-xs font-mono uppercase tracking-widest">{t.hero.status}</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-textMain via-textMain to-textMain/40 mb-8 tracking-tight">
          {t.hero.title}
        </h1>

        <p className="text-lg md:text-xl text-textMuted max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button 
            onClick={() => {
              const el = document.getElementById('explore-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative px-8 py-4 bg-textMain text-background rounded-full font-bold text-sm tracking-wide overflow-hidden transition-all hover:scale-105"
          >
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
              {t.hero.start} <ArrowRight className="w-4 h-4" />
            </span>
          </button>
          
          <button 
            onClick={() => onNavigate(SectionType.WHITEPAPER)}
            className="px-8 py-4 bg-white/5 border border-white/10 rounded-full font-bold text-sm text-textMain tracking-wide hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-sm"
          >
            <Globe className="w-4 h-4 text-textMuted" />
            {t.hero.whitepaper}
          </button>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-white/5 pt-10">
          {[
            { label: t.hero.stats.community, value: '150K+' },
            { label: t.hero.stats.treasury, value: '$25M+' },
            { label: t.hero.stats.projects, value: '85+' },
            { label: t.hero.stats.proposals, value: '420' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-3xl font-bold text-textMain mb-1 font-mono">{stat.value}</div>
              <div className="text-xs text-textMuted uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;