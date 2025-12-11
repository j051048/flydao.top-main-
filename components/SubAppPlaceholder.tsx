import React, { useState } from 'react';
import { ExternalLink, ArrowLeft, CloudSun, Shirt, Camera, Sparkles, BookOpen, Gamepad2, Coins } from 'lucide-react';
import { SectionType } from '../types';
import { useAppContext } from '../contexts/AppContext';
import InstructionModal from './InstructionModal';

interface Props {
  type: SectionType;
  onBack: () => void;
}

const SubAppPlaceholder: React.FC<Props> = ({ type, onBack }) => {
  const { t, language } = useAppContext();
  const [showInstructions, setShowInstructions] = useState(false);

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
                <button
                  onClick={() => setShowInstructions(true)}
                  className="mt-4 flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 hover:from-blue-600/30 hover:to-purple-600/30 text-blue-300 border border-blue-500/20 rounded-lg text-xs font-bold transition-all hover:scale-105 hover:shadow-[0_0_15px_rgba(37,99,235,0.2)]"
                >
                  <BookOpen className="w-3 h-3" />
                  AI应用使用说明
                </button>
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

              {/* APP CARD 3: AI Portrait Master */}
              <a 
                href="https://app3.flydao.top" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative aspect-[9/16] rounded-3xl overflow-hidden bg-surface border border-white/10 hover:border-rose-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-500/20"
              >
                 {/* Background Gradient */}
                 <div className="absolute inset-0 bg-gradient-to-b from-rose-400/20 to-orange-600/20 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                 
                 {/* 3D Icon Composition */}
                 <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 flex items-center justify-center">
                    {/* Circle Backing */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent border border-white/20 backdrop-blur-md"></div>
                    
                    {/* Stylized Camera Icon */}
                    <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                        <div className="absolute inset-0 bg-rose-500 blur-2xl opacity-40"></div>
                        <Camera className="w-24 h-24 text-rose-300 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]" strokeWidth={1.5} />
                    </div>

                    {/* Sparkles */}
                    <div className="absolute top-2 right-6 w-3 h-3 bg-white rounded-full animate-pulse"></div>
                    <Sparkles className="absolute bottom-6 left-4 w-8 h-8 text-yellow-300 animate-spin-slow" />
                 </div>

                 {/* Text Info */}
                 <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent pt-20">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {language === 'zh' ? 'AI写真馆 (大师版)' : 'AI Portrait (Master)'}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-rose-300 font-mono">
                      <span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse"></span>
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

        <InstructionModal isOpen={showInstructions} onClose={() => setShowInstructions(false)} />
      </div>
    );
  }

  // If this is the GAME section, render the game grid
  if (type === SectionType.GAME) {
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
                <h1 className="text-3xl font-bold text-textMain">{t.sections.game_title}</h1>
                <p className="text-sm text-textMuted">{t.sections.game_desc}</p>
              </div>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              
              {/* GAME CARD 1: Coin Match */}
              <a 
                href="https://game1.flydao.top" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative aspect-[9/14] rounded-3xl overflow-hidden bg-surface border border-white/10 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20"
              >
                 {/* Background Gradient */}
                 <div className="absolute inset-0 bg-gradient-to-b from-emerald-400/20 to-teal-600/20 opacity-50 group-hover:opacity-100 transition-opacity"></div>
                 
                 {/* 3D Icon Composition */}
                 <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 flex items-center justify-center">
                    {/* Circle Backing */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent border border-white/20 backdrop-blur-md"></div>
                    
                    {/* Icon */}
                    <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-500">
                        <div className="absolute inset-0 bg-emerald-500 blur-2xl opacity-40"></div>
                        <Gamepad2 className="w-24 h-24 text-emerald-300 drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)]" strokeWidth={1.5} />
                    </div>

                    {/* Coins / Sparkles effects */}
                     <div className="absolute top-0 right-4 w-6 h-6 bg-yellow-400 rounded-full animate-bounce shadow-[0_0_10px_rgba(250,204,21,0.8)] flex items-center justify-center border border-yellow-200">
                        <Coins className="w-4 h-4 text-yellow-700" />
                     </div>
                     <div className="absolute bottom-4 left-4 w-4 h-4 bg-yellow-400 rounded-full animate-bounce delay-100 shadow-[0_0_10px_rgba(250,204,21,0.8)] border border-yellow-200"></div>
                 </div>

                 {/* Text Info */}
                 <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent pt-20">
                    <h3 className="text-xl font-bold text-white mb-1">
                      {language === 'zh' ? '消消乐（币了个币）' : 'Crypto Match 3'}
                    </h3>
                    <div className="flex items-center gap-2 text-xs text-emerald-300 font-mono">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                      Web3 Game
                      <ExternalLink className="w-3 h-3" />
                    </div>
                 </div>
              </a>

              {/* Placeholder Card for Future Games */}
              <div className="aspect-[9/14] rounded-3xl border border-dashed border-white/10 bg-white/5 flex flex-col items-center justify-center text-center p-6 opacity-50 hover:opacity-100 transition-opacity">
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

  // Fallback for other sections (Movie/News/Literature/Photography)
  const getConfig = () => {
    switch(type) {
      case SectionType.MOVIE:
        return {
          title: t.sections.movie_title,
          sub: t.sections.movie_desc,
          url: 'flydao.top/movie'
        };
      case SectionType.NEWS:
        return {
          title: t.sections.news_title,
          sub: t.sections.news_desc,
          url: 'flydao.top/news'
        };
      case SectionType.LITERATURE:
        return {
          title: t.sections.literature_title,
          sub: t.sections.literature_desc,
          url: 'flydao.top/literature'
        };
      case SectionType.PHOTOGRAPHY:
        return {
          title: t.sections.photography_title,
          sub: t.sections.photography_desc,
          url: 'flydao.top/photography'
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