import React, { useState } from 'react';
import { Film, Gamepad2, Newspaper, HelpCircle, Code, Cpu } from 'lucide-react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import FeatureCard from './components/FeatureCard';
import Footer from './components/Footer';
import SubAppPlaceholder from './components/SubAppPlaceholder';
import WhitepaperView from './components/WhitepaperView';
import ResearchView from './components/ResearchView';
import ArchitectureModal from './components/ArchitectureModal';
import { SectionType } from './types';
import { AppProvider, useAppContext } from './contexts/AppContext';

// Inner App Content to access Context
const AppContent: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<SectionType>(SectionType.HOME);
  const [showArchitectureInfo, setShowArchitectureInfo] = useState(false);
  const { t } = useAppContext();

  const handleNavigate = (section: SectionType) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setCurrentSection(section);
  };

  // If Whitepaper
  if (currentSection === SectionType.WHITEPAPER) {
    return (
      <div className="min-h-screen bg-background text-textMain">
        <WhitepaperView onBack={() => handleNavigate(SectionType.HOME)} />
      </div>
    );
  }

  // If Research/News
  if (currentSection === SectionType.NEWS) {
    return (
      <div className="min-h-screen bg-background text-textMain">
        <ResearchView onBack={() => handleNavigate(SectionType.HOME)} />
      </div>
    );
  }

  // If we are in other sub-apps (Movie, Game, App), render the placeholder
  if (currentSection !== SectionType.HOME) {
    return (
      <div className="min-h-screen bg-background text-textMain">
        <Navigation currentSection={currentSection} onNavigate={handleNavigate} />
        <SubAppPlaceholder type={currentSection} onBack={() => setCurrentSection(SectionType.HOME)} />
        <Footer />
      </div>
    );
  }

  // Main Home Page Layout
  return (
    <div className="min-h-screen bg-background text-textMain selection:bg-accent/30 selection:text-white relative transition-colors duration-500">
      <Navigation currentSection={SectionType.HOME} onNavigate={handleNavigate} />

      <main>
        {/* Hero Section */}
        <HeroSection onNavigate={handleNavigate} />

        {/* Portals Section */}
        <section id="explore-section" className="py-24 relative">
            <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-textMain to-textMuted">
                        {t.sections.explore}
                    </h2>
                    <p className="text-textMuted max-w-xl">
                        {t.sections.explore_desc}
                    </p>
                  </div>
                  <button 
                    onClick={() => setShowArchitectureInfo(true)}
                    className="flex items-center gap-2 text-xs font-mono text-textMuted hover:text-accent transition-colors border border-white/5 hover:border-accent/50 rounded px-3 py-2 bg-white/5"
                  >
                    <Code className="w-3 h-3" /> {t.sections.architecture}
                  </button>
              </div>

              {/* 2x2 Grid for 4 items */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-8">
                <FeatureCard 
                  title={t.sections.movie_title}
                  description={t.sections.movie_desc}
                  icon={Film}
                  badge={t.sections.movie_badge}
                  gradient="from-purple-600 to-blue-600"
                  link="/movie"
                  onClick={() => handleNavigate(SectionType.MOVIE)}
                />
                
                <FeatureCard 
                  title={t.sections.game_title}
                  description={t.sections.game_desc}
                  icon={Gamepad2}
                  badge={t.sections.game_badge}
                  gradient="from-emerald-500 to-cyan-500"
                  link="/game"
                  onClick={() => handleNavigate(SectionType.GAME)}
                />

                <FeatureCard 
                  title={t.sections.news_title}
                  description={t.sections.news_desc}
                  icon={Newspaper}
                  badge={t.sections.news_badge}
                  gradient="from-orange-500 to-amber-500"
                  link="/news"
                  onClick={() => handleNavigate(SectionType.NEWS)}
                />

                <FeatureCard 
                  title={t.sections.app_title}
                  description={t.sections.app_desc}
                  icon={Cpu}
                  badge={t.sections.app_badge}
                  gradient="from-blue-500 to-indigo-500"
                  link="/app"
                  onClick={() => handleNavigate(SectionType.APP)}
                />
              </div>
            </div>
        </section>

        {/* Value Proposition Strip */}
        <section className="py-24 bg-surface border-y border-white/5">
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    <div>
                        <h3 className="text-3xl font-bold mb-6 text-textMain">Why FLYDAO?</h3>
                        <div className="space-y-6">
                            {[
                                { title: 'Decentralized Identity', desc: 'Single-sign on across all platforms using your Web3 wallet.' },
                                { title: 'AI-Enhanced Governance', desc: 'Proposals summarized and analyzed by autonomous agents.' },
                                { title: 'Cross-Chain Rewards', desc: 'Earn tokens seamlessly whether you are watching, playing, or reading.' }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center shrink-0 border border-white/10 text-accent">
                                        {i + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-textMain mb-1">{item.title}</h4>
                                        <p className="text-sm text-textMuted">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-black/50 group">
                         <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 via-transparent to-accent/10"></div>
                         <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-32 h-32">
                                <div className="absolute inset-0 border-4 border-dashed border-white/20 rounded-full animate-spin-slow"></div>
                                <div className="absolute inset-2 border-4 border-white/10 rounded-full"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-16 h-16 bg-white rounded-full blur-[40px] opacity-20 animate-pulse"></div>
                                </div>
                            </div>
                         </div>
                         <div className="absolute bottom-0 w-full p-6 glass-panel">
                             <div className="font-mono text-xs text-accent mb-2">LIVE SYSTEM STATUS</div>
                             <div className="flex justify-between items-end">
                                 <div>
                                     <div className="text-2xl font-bold text-textMain">99.9%</div>
                                     <div className="text-xs text-textMuted">Uptime</div>
                                 </div>
                                 <div className="h-8 w-32 bg-white/5 rounded flex items-end gap-1 p-1">
                                     {[40, 70, 50, 90, 60, 80, 75, 50, 90, 100].map((h, idx) => (
                                         <div key={idx} style={{ height: `${h}%` }} className="flex-1 bg-accent/50 rounded-sm"></div>
                                     ))}
                                 </div>
                             </div>
                         </div>
                    </div>
                </div>
             </div>
        </section>
      </main>

      <Footer />
      
      <ArchitectureModal 
        isOpen={showArchitectureInfo} 
        onClose={() => setShowArchitectureInfo(false)} 
      />
    </div>
  );
};

// Root App Component wrapper
const App: React.FC = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
};

export default App;