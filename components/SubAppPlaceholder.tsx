import React from 'react';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import { SectionType } from '../types';
import { useAppContext } from '../contexts/AppContext';

interface Props {
  type: SectionType;
  onBack: () => void;
}

const SubAppPlaceholder: React.FC<Props> = ({ type, onBack }) => {
  const { t } = useAppContext();

  const getConfig = () => {
    switch(type) {
      case SectionType.MOVIE:
        return {
          bg: 'bg-[#0f0518]',
          accent: 'text-purple-400',
          title: t.sections.movie_title,
          sub: t.sections.movie_desc,
          url: 'flydao.top/movie'
        };
      case SectionType.GAME:
        return {
          bg: 'bg-[#001014]',
          accent: 'text-cyan-400',
          title: t.sections.game_title,
          sub: t.sections.game_desc,
          url: 'flydao.top/game'
        };
      case SectionType.NEWS:
        return {
          bg: 'bg-[#181005]',
          accent: 'text-orange-400',
          title: t.sections.news_title,
          sub: t.sections.news_desc,
          url: 'flydao.top/news'
        };
      case SectionType.APP:
        return {
          bg: 'bg-[#050a18]',
          accent: 'text-blue-400',
          title: t.sections.app_title,
          sub: t.sections.app_desc,
          url: 'flydao.top/app'
        };
      default:
        return { bg: 'bg-black', accent: 'text-white', title: 'Unknown', sub: '', url: '' };
    }
  };

  const config = getConfig();

  return (
    <div className={`min-h-screen ${config.bg} pt-24 px-4 pb-12 flex flex-col`}>
      <div className="max-w-7xl mx-auto w-full flex-grow flex flex-col">
        {/* Mock Browser Bar */}
        <div className="w-full h-12 bg-white/5 rounded-t-xl border border-white/10 flex items-center px-4 gap-4 mb-8">
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
        <div className="flex-grow flex flex-col items-center justify-center text-center p-12 border border-dashed border-white/10 rounded-b-xl rounded-t-sm bg-white/[0.02]">
          <h1 className={`text-4xl md:text-6xl font-black ${config.accent} mb-4`}>{config.title}</h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl">{config.sub}</p>
          
          <div className="bg-white/10 p-6 rounded-lg max-w-lg text-left">
            <h4 className="text-white font-bold mb-2 flex items-center gap-2">
              <ExternalLink className="w-4 h-4" /> {t.placeholder.note_title}
            </h4>
            <p className="text-sm text-gray-400">
              {t.placeholder.note_desc}
            </p>
          </div>

          <button 
            onClick={onBack}
            className="mt-12 flex items-center gap-2 text-white hover:text-accent transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> {t.placeholder.back}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubAppPlaceholder;
