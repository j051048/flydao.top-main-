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
      className="group relative h-[400px] w-full cursor-pointer overflow-hidden rounded-3xl border border-white/5 bg-[#0a0a1a] transition-all duration-500 hover:-translate-y-2 hover:border-white/20"
    >
      {/* Hover Gradient */}
      <div 
        className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${gradient}`}
      ></div>

      <div className="relative h-full flex flex-col justify-between p-8 z-10">
        <div>
          <div className="flex justify-between items-start mb-6">
            <div className={`w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
              <Icon className="w-7 h-7 text-white" />
            </div>
            <span className="px-3 py-1 rounded-full bg-white/5 text-[10px] font-mono uppercase tracking-wider text-gray-300 border border-white/5">
              {badge}
            </span>
          </div>

          <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all">
            {title}
          </h3>
          <p className="text-gray-400 leading-relaxed text-sm">
            {description}
          </p>
        </div>

        <div className="flex items-center text-sm font-semibold text-white/50 group-hover:text-white transition-colors">
          Enter Portal <ArrowUpRight className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </div>
      </div>

      {/* Decorative Blur */}
      <div className={`absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-[80px] opacity-20 bg-gradient-to-tr ${gradient}`}></div>
    </div>
  );
};

export default FeatureCard;
