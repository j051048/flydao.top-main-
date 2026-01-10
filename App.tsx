import React, { useState } from 'react';
import { Film, Gamepad2, Newspaper, HelpCircle, Code, Cpu, BookOpen, Camera } from 'lucide-react';
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
      <div className="min-h-screen bg-background text-textMain relative selection:bg-accent/20">
        <div className="noise-bg" />
        <WhitepaperView onBack={() => handleNavigate(SectionType.HOME)} />
      </div>
    );
  }

  // If Research/News
  if (currentSection === SectionType.NEWS) {
    return (
      <div className="min-h-screen bg-background text-textMain relative selection:bg-accent/20">
        <div className="noise-bg" />
        <ResearchView onBack={() => handleNavigate(SectionType.HOME)} />
      </div>
    );
  }

  // If we are in other sub-apps (Movie, Game, App, Literature, Photography), render the placeholder
  if (currentSection !== SectionType.HOME) {
    return (
      <div className="min-h-screen bg-background text-textMain relative selection:bg-accent/20">
        <div className="noise-bg" />
        <Navigation currentSection={currentSection} onNavigate={handleNavigate} />
        <SubAppPlaceholder type={currentSection} onBack={() => setCurrentSection(SectionType.HOME)} />
        <Footer />
      </div>
    );
  }

  // Main Home Page Layout
  return (
    <div className="min-h-screen bg-background text-textMain selection:bg-accent/30 selection:text-white relative transition-colors duration-500 overflow-hidden">
      <div className="noise-bg" />
      
      {/* Global Ambient Glows */}
      <div className="fixed top-0 left-0 w-full h-screen pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/10 rounded-full blur-[120px] opacity-30 animate-float" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-secondary/10 rounded-full blur-[120px] opacity-20 animate-float" style={{ animationDelay: '-4s' }} />
      </div>

      <Navigation currentSection={SectionType.HOME} onNavigate={handleNavigate} />

      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection onNavigate={handleNavigate} />

        {/* Portals Section */}
        <section id="explore-section" className="py-32 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tighter text-textMain">
                        {t.sections.explore}
                    </h2>
                    <p className="text-textMuted max-w-xl text-lg font-light leading-relaxed">
                        {t.sections.explore_desc}
                    </p>
                  </div>
                  <button 
                    onClick={() => setShowArchitectureInfo(true)}
                    className="group flex items-center gap-2 text-xs font-mono text-textMuted hover:text-accent transition-colors border border-white/5 hover:border-accent/30 rounded-full px-4 py-2 bg-surface backdrop-blur-md"
                  >
                    <Code className="w-3 h-3 group-hover:rotate-12 transition-transform" /> 
                    <span className="tracking-wide">{t.sections.architecture}</span>
                  </button>
              </div>

              {/* Grid for 6 items - Spacing increased for Minimal Maximalism */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                <FeatureCard 
                  title={t.sections.movie_title}
                  description={t.sections.movie_desc}
                  icon={Film}
                  badge={t.sections.movie_badge}
                  gradient="from-purple-600/20 to-blue-600/20"
                  link="/movie"
                  onClick={() => handleNavigate(SectionType.MOVIE)}
                />
                
                <FeatureCard 
                  title={t.sections.game_title}
                  description={t.sections.game_desc}
                  icon={Gamepad2}
                  badge={t.sections.game_badge}
                  gradient="from-emerald-500/20 to-cyan-500/20"
                  link="/game"
                  onClick={() => handleNavigate(SectionType.GAME)}
                />

                <FeatureCard 
                  title={t.sections.news_title}
                  description={t.sections.news_desc}
                  icon={Newspaper}
                  badge={t.sections.news_badge}
                  gradient="from-orange-500/20 to-amber-500/20"
                  link="/news"
                  onClick={() => handleNavigate(SectionType.NEWS)}
                />

                <FeatureCard 
                  title={t.sections.literature_title}
                  description={t.sections.literature_desc}
                  icon={BookOpen}
                  badge={t.sections.literature_badge}
                  gradient="from-cyan-600/20 to-teal-600/20"
                  link="/literature"
                  onClick={() => handleNavigate(SectionType.LITERATURE)}
                />

                <FeatureCard 
                  title={t.sections.photography_title}
                  description={t.sections.photography_desc}
                  icon={Camera}
                  badge={t.sections.photography_badge}
                  gradient="from-fuchsia-600/20 to-pink-600/20"
                  link="/photography"
                  onClick={() => handleNavigate(SectionType.PHOTOGRAPHY)}
                />

                <FeatureCard 
                  title={t.sections.app_title}
                  description={t.sections.app_desc}
                  icon={Cpu}
                  badge={t.sections.app_badge}
                  gradient="from-blue-500/20 to-indigo-500/20"
                  link="/app"
                  onClick={() => handleNavigate(SectionType.APP)}
                />
              </div>
            </div>
        </section>

        {/* Value Proposition Strip - Redesigned to be cleaner */}
        <section className="py-32 border-t border-white/5 relative overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none"></div>
             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h3 className="text-4xl font-bold mb-8 text-textMain tracking-tighter">Why FLYDAO?</h3>
                        <div className="space-y-8">
                            {[
                                { title: 'Decentralized Identity', desc: 'Single-sign on across all platforms using your Web3 wallet.' },
                                { title: 'AI-Enhanced Governance', desc: 'Proposals summarized and analyzed by autonomous agents.' },
                                { title: 'Cross-Chain Rewards', desc: 'Earn tokens seamlessly whether you are watching, playing, or reading.' }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-6 group">
                                    <div className="w-12 h-12 rounded-2xl bg-surfaceHighlight/5 flex items-center justify-center shrink-0 border border-white/10 text-accent font-mono text-lg group-hover:scale-110 group-hover:bg-accent/10 transition-all duration-300">
                                        0{i + 1}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-textMain text-lg mb-2">{item.title}</h4>
                                        <p className="text-textMuted leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Abstract Tech Visualization */}
                    <div className="relative h-[500px] w-full rounded-3xl overflow-hidden border border-white/10 bg-black/40 backdrop-blur-xl group hover:border-white/20 transition-all duration-500">
                         {/* Internal Glows */}
                         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-accent/20 rounded-full blur-[80px] animate-pulse"></div>
                         
                         {/* Data Rings */}
                         <div className="absolute inset-0 flex items-center justify-center">
                            <div className="relative w-64 h-64 border border-white/10 rounded-full animate-spin-slow"></div>
                            <div className="absolute w-48 h-48 border border-white/5 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }}></div>
                            <div className="absolute w-32 h-32 border-2 border-accent/20 rounded-full animate-pulse"></div>
                         </div>
                         
                         {/* Floating UI Elements */}
                         <div className="absolute top-10 right-10 p-4 glass-panel rounded-xl">
                            <div className="flex items-center gap-3 mb-2">
                               <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                               <span className="text-xs font-mono text-textMuted uppercase">Network Status</span>
                            </div>
                            <div className="text-xl font-bold font-mono text-textMain">X LAYER</div>
                         </div>

                         <div className="absolute bottom-0 w-full p-8 border-t border-white/5 bg-black/20 backdrop-blur-md">
                             <div className="flex justify-between items-end">
                                 <div>
                                     <div className="text-3xl font-bold text-textMain mb-1">99.9%</div>
                                     <div className="text-xs text-textMuted font-mono uppercase tracking-wider">System Uptime</div>
                                 </div>
                                 <div className="flex gap-1 items-end h-10">
                                     {[40, 70, 50, 90, 60, 80, 75, 50, 90, 100, 85, 95].map((h, idx) => (
                                         <div key={idx} style={{ height: `${h}%` }} className="w-2 bg-accent/50 rounded-full hover:bg-accent transition-colors duration-300"></div>
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