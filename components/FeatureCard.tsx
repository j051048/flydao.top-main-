import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FeatureCardProps } from '../types';

const FeatureCard: React.FC<FeatureCardProps> = ({ 
  title, 
  description, 
  icon: Icon, 
  gradient, 
  badge,
  onClick 
}) => {
  return (
    <div 
      onClick={onClick}
      className="group relative h-[420px] w-full cursor-pointer rounded-3xl overflow-hidden bg-surface backdrop-blur-xl border border-borderDim transition-all duration-500 hover:border-black/10 dark:hover:border-white/20 hover:shadow-2xl hover:shadow-primary/10"
    >
      {/* Background Gradient Mesh */}
      <div 
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br ${gradient} mix-blend-soft-light`}
      ></div>
      
      {/* Noise Texture Overlay - Reduced opacity for cleaner light mode */}
      <div className="absolute inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none"></div>

      <div className="relative h-full flex flex-col justify-between p-8 md:p-10 z-10">
        <div>
          <div className="flex justify-between items-start mb-8">
            <div className={`w-14 h-14 rounded-2xl bg-surfaceHighlight border border-borderDim flex items-center justify-center group-hover:scale-110 group-hover:bg-surface transition-all duration-500 shadow-sm`}>
              <Icon className="w-6 h-6 text-textMain opacity-80 group-hover:opacity-100" />
            </div>
            <span className="px-3 py-1.5 rounded-full bg-surfaceHighlight text-[10px] font-mono font-bold uppercase tracking-widest text-textMuted border border-borderDim backdrop-blur-sm group-hover:border-black/10 dark:group-hover:border-white/20 group-hover:text-textMain transition-colors shadow-sm">
              {badge}
            </span>
          </div>

          <h3 className="text-3xl font-bold text-textMain mb-4 tracking-tight group-hover:translate-x-1 transition-transform duration-300">
            {title}
          </h3>
          <p className="text-textMuted leading-relaxed text-sm font-light opacity-80 group-hover:opacity-100 transition-opacity duration-300 max-w-sm">
            {description}
          </p>
        </div>

        <div className="flex items-center gap-3">
           <div className="w-10 h-10 rounded-full border border-borderDim flex items-center justify-center group-hover:bg-textMain group-hover:border-textMain transition-all duration-300 bg-surface">
              <ArrowUpRight className="w-4 h-4 text-textMuted group-hover:text-background transition-colors duration-300" />
           </div>
           <span className="text-xs font-mono font-bold text-textMuted uppercase tracking-widest group-hover:text-textMain transition-colors">Explore</span>
        </div>
      </div>

      {/* Glow Effect */}
      <div className={`absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-500 bg-gradient-to-tr ${gradient}`}></div>
    </div>
  );
};

export default FeatureCard;