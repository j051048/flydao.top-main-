import React from 'react';
import { ExternalLink, ArrowLeft, CloudSun, Shirt } from 'lucide-react';
import { SectionType } from '../types';
import { useAppContext } from '../contexts/AppContext';

interface Props {
  type: SectionType;
  onBack: () => void;
}

const SubAppPlaceholder: React.FC<Props> = ({ type, onBack }) => {
  const { t, language } = useAppContext();

  // If this is the APP section, render the special showcase layout
  if (type === SectionType.APP) {
    return (
      <div className="min-h-screen bg-background pt-24 px-4 pb-12 flex flex-col transition-colors duration-500">
        <div className="max-w-7xl mx-auto w-full">
           <div className="flex items-center gap-4 mb-8">
              <button 
                onClick={onBack}
                className="w-10 h-10 rounded-full bg-surface border border-white/10 flex items-center justify-center text-textMuted hover:text-textMain hover:border-accent transition-all"
              >
                <ArrowLeft className="w-5 h-5" />
              </button>
              <div>
                <h1 className="text-3xl font-bold text-textMain">{t.sections.app_title}</h1>
                <p className="text-sm text-textMuted">{t.sections.app_desc}</p>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* APP CARD 1: Cartoon Weather */}
              <a 
                href="https://app1.flydao.top" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative aspect-[9/16] rounded-3xl overflow-hidden bg-surface border border-white/10 hover:border-accent/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                 {/* Pixar Style Background Gradient */}
                 <div className="absolute inset-0 bg-gradient-to-b from-cyan-400/20 to-blue-600/20 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                 
                 {/* 3D Icon Composition */}
                 <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40">
                    {/* Sun */}
                    <div className="absolute top-0 right-0 w-24 h-24 rounded-full bg-gradient-to-tr from-yellow-300 to-orange-500 shadow-[0_0_30px_rgba(251,191,36,0.6)] animate-pulse-fast z-10"></div>
                    {/* Cloud */}
                    <div className="absolute bottom-4 left-0 w-32 h-20 bg-white rounded-full shadow-lg z-20 opacity-90 backdrop-blur-sm flex items-center justify-center">
                       <CloudSun className="w-10 h-10 text-blue-400" />
                    </div>
                    <div className="absolute bottom-8 left-8 w-20 h-20 bg-white rounded-full z-10 opacity-80"></div>
                 </div>

                 {/* Text Info */}
                 <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent pt-20">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {language === 'zh' ? 'AI天气穿搭 (卡通版)' : 'AI Weather Outfit (Cartoon)'}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-cyan-300 font-mono">
                      <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                      Vercel App
                      <ExternalLink className="w-3 h-3" />
                    </div>
                 </div>
              </a>

              {/* APP CARD 2: Real Weather */}
              <a 
                href="https://app2.flydao.top" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative aspect-[9/16] rounded-3xl overflow-hidden bg-surface border border-white/10 hover:border-purple-400/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20"
              >
                 {/* Pixar Style Background Gradient */}
                 <div className="absolute inset-0 bg-gradient-to-b from-purple-400/20 to-pink-600/20 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                 
                 {/* 3D Icon Composition */}
                 <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 flex items-center justify-center">
                    {/* Circle Backing */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent border border-white/20 backdrop-blur-md"></div>
                    
                    {/* Stylized Shirt Icon */}
                    <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                        <div className="absolute inset-0 bg-pink-500 blur-2xl opacity-40"></div>
                        <Shirt className="w-24 h-24 text-pink-300 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]" strokeWidth={1.5} />
                    </div>

                    {/* Sparkles */}
                    <div className="absolute top-0 right-4 w-2 h-2 bg-white rounded-full animate-ping"></div>
                    <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-purple-200 rounded-full animate-ping delay-75"></div>
                 </div>

                 {/* Text Info */}
                 <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent pt-20">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {language === 'zh' ? 'AI天气穿搭 (真人版)' : 'AI Weather Outfit (Real)'}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-purple-300 font-mono">
                      <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse"></span>
                      Vercel App
                      <ExternalLink className="w-3 h-3" />
                    </div>
                 </div>
              </a>

              {/* Placeholder Card for Future Apps */}
              <div className="aspect-[9/16] rounded-3xl border border-dashed border-white/10 bg-white/5 flex flex-col items-center justify-center text-center p-6 opacity-50 hover:opacity-100 transition-opacity">
                 <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mb-4">
                    <span className="text-2xl text-textMuted">+</span>
                 </div>
                 <p className="text-sm text-textMuted font-mono">Coming Soon</p>
              </div>

           </div>
        </div>
      </div>
    );
  }

  // Fallback for other sections (Movie/Game/News) that are "External" in this demo
  const getConfig = () => {
    switch(type) {
      case SectionType.MOVIE:
        return {
          title: t.sections.movie_title,
          sub: t.sections.movie_desc,
          url: 'flydao.top/movie'
        };
      case SectionType.GAME:
        return {
          title: t.sections.game_title,
          sub: t.sections.game_desc,
          url: 'flydao.top/game'
        };
      case SectionType.NEWS:
        return {
          title: t.sections.news_title,
          sub: t.sections.news_desc,
          url: 'flydao.top/news'
        };
      default:
        return { title: 'Unknown', sub: '', url: '' };
    }
  };

  const config = getConfig();

  return (
    <div className={`min-h-screen bg-background pt-24 px-4 pb-12 flex flex-col transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col">
        {/* Mock Browser Bar */}
        <div className="w-full h-12 bg-surface rounded-t-xl border border-white/10 flex items-center px-4 gap-4 mb-8">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
          </div>
          <div className="flex-1 bg-black/20 h-8 rounded flex items-center justify-center text-xs font-mono text-gray-500">
            https://www.{config.url}
          </div>
        </div>

        {/* Content Simulation */}
        <div className="flex-grow flex flex-col items-center justify-center text-center p-12 border border-dashed border-white/10 rounded-b-xl rounded-t-sm bg-surface/50">
          <h1 className="text-4xl md:text-6xl font-black text-textMain mb-4">{config.title}</h1>
          <p className="text-xl text-textMuted mb-8 max-w-2xl">{config.sub}</p>
          
          <div className="bg-surface p-6 rounded-lg max-w-lg text-left border border-white/5">
            <h4 className="text-textMain font-bold mb-2 flex items-center gap-2">
              <ExternalLink className="w-4 h-4" /> {t.placeholder.note_title}
            </h4>
            <p className="text-sm text-textMuted">
              {t.placeholder.note_desc}
            </p>
          </div>

          <button 
            onClick={onBack}
            className="mt-12 flex items-center gap-2 text-textMain hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> {t.placeholder.back}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubAppPlaceholder;