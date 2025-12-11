import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, Globe, Palette } from 'lucide-react';
import { NAV_ITEMS, APP_NAME } from '../constants';
import { SectionType, Theme } from '../types';
import { useAppContext } from '../contexts/AppContext';

interface NavigationProps {
  currentSection: SectionType;
  onNavigate: (section: SectionType) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection, onNavigate }) => {
  const { t, language, setLanguage, theme, setTheme } = useAppContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getNavLabel = (id: SectionType) => {
    switch (id) {
      case SectionType.HOME: return t.nav.home;
      case SectionType.MOVIE: return t.nav.movie;
      case SectionType.GAME: return t.nav.game;
      case SectionType.NEWS: return t.nav.news;
      case SectionType.LITERATURE: return t.nav.literature;
      case SectionType.PHOTOGRAPHY: return t.nav.photography;
      case SectionType.APP: return t.nav.app;
      default: return '';
    }
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'bg-background/80 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer group"
            onClick={() => onNavigate(SectionType.HOME)}
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center mr-3 shadow-lg shadow-primary/20 group-hover:shadow-primary/40 transition-all duration-300">
              <Rocket className="text-white w-6 h-6" />
            </div>
            <span className="font-bold text-2xl tracking-tighter textMain">
              {APP_NAME}
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {NAV_ITEMS.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`relative px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 flex items-center gap-2 group ${
                    currentSection === item.id
                      ? 'text-accent'
                      : 'text-textMuted hover:text-textMain'
                  }`}
                >
                  <item.icon className={`w-4 h-4 transition-colors ${currentSection === item.id ? 'text-accent' : 'group-hover:text-accent'}`} />
                  {getNavLabel(item.id)}
                  {currentSection === item.id && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-accent shadow-[0_0_10px_var(--accent-color)] rounded-full transform scale-x-100 transition-transform duration-300" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="hidden lg:flex items-center gap-4">
             {/* Theme Switcher */}
             <div className="relative">
                <button 
                  onClick={() => setShowThemeMenu(!showThemeMenu)}
                  className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-textMuted hover:text-textMain hover:bg-white/5 transition-all"
                >
                  <Palette className="w-4 h-4" />
                </button>
                {showThemeMenu && (
                  <div className="absolute top-10 right-0 glass-panel p-2 rounded-xl flex flex-col gap-2 min-w-[40px] items-center animate-in fade-in zoom-in duration-200">
                    {(['black', 'white', 'pink', 'yellow'] as Theme[]).map((t) => (
                      <button
                        key={t}
                        onClick={() => { setTheme(t); setShowThemeMenu(false); }}
                        className={`w-6 h-6 rounded-full border-2 transition-transform hover:scale-110 ${theme === t ? 'border-accent' : 'border-transparent'}`}
                        style={{ backgroundColor: t === 'black' ? '#030014' : t === 'white' ? '#f8fafc' : t === 'pink' ? '#1a0510' : '#121200' }}
                        title={t}
                      />
                    ))}
                  </div>
                )}
             </div>

             {/* Language Switcher */}
             <button 
                onClick={toggleLanguage}
                className="flex items-center gap-1 text-xs font-mono font-bold text-textMuted hover:text-accent transition-colors"
             >
                <Globe className="w-4 h-4" />
                {language.toUpperCase()}
             </button>

             <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-textMain px-6 py-2 rounded-full font-mono text-xs tracking-wider uppercase transition-all hover:border-accent/50 hover:shadow-[0_0_15px_var(--accent-color)]">
                {t.nav.connect}
             </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center gap-4">
             <button 
                onClick={toggleLanguage}
                className="text-textMain font-bold"
             >
                {language === 'zh' ? 'EN' : '中'}
             </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-textMuted hover:text-textMain hover:bg-white/10 focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden glass-panel border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-3 py-4 rounded-md text-base font-medium flex items-center gap-3 ${
                  currentSection === item.id
                    ? 'bg-white/10 text-textMain'
                    : 'text-textMuted hover:bg-white/5 hover:text-textMain'
                }`}
              >
                <item.icon className="w-5 h-5 text-accent" />
                {getNavLabel(item.id)}
              </button>
            ))}
            
            <div className="flex gap-4 p-4 border-t border-white/5">
                <span className="text-sm text-textMuted">Theme:</span>
                {(['black', 'white', 'pink', 'yellow'] as Theme[]).map((t) => (
                    <button
                    key={t}
                    onClick={() => setTheme(t)}
                    className={`w-6 h-6 rounded-full border-2 ${theme === t ? 'border-accent' : 'border-transparent'}`}
                    style={{ backgroundColor: t === 'black' ? '#030014' : t === 'white' ? '#f8fafc' : t === 'pink' ? '#1a0510' : '#121200' }}
                    />
                ))}
            </div>

            <div className="px-3 py-4">
              <button className="w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-bold">
                  {t.nav.connect}
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;