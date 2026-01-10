import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, Globe, Palette, Wallet, LogOut, Loader2, AlertCircle, RefreshCw, Sun, Moon, Check } from 'lucide-react';
import { formatUnits } from 'viem';
import { xLayer } from 'viem/chains';
import { NAV_ITEMS, APP_NAME } from '../constants';
import { SectionType, ThemeColor } from '../types';
import { useAppContext } from '../contexts/AppContext';
import { useWallet } from '../web3/hooks';

interface NavigationProps {
  currentSection: SectionType;
  onNavigate: (section: SectionType) => void;
}

const THEME_COLORS: { id: ThemeColor; color: string }[] = [
  { id: 'blue', color: '#3b82f6' },
  { id: 'purple', color: '#a855f7' },
  { id: 'green', color: '#22c55e' },
  { id: 'red', color: '#ef4444' },
  { id: 'orange', color: '#f97316' },
  { id: 'pink', color: '#ec4899' },
  { id: 'cyan', color: '#06b6d4' },
  { id: 'yellow', color: '#eab308' },
];

const Navigation: React.FC<NavigationProps> = ({ currentSection, onNavigate }) => {
  const { t, language, setLanguage, themeMode, toggleThemeMode, themeColor, setThemeColor } = useAppContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  
  // Web3 Integration
  const wallet = useWallet();
  const { 
    isConnected, 
    formattedAddress, 
    connectorName, 
    connect, 
    disconnect, 
    isConnecting, 
    error,
    balance,
    chainId,
    switchChain
  } = wallet || {};

  const isWrongNetwork = isConnected && chainId !== xLayer.id;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show error alert if wallet error occurs
  useEffect(() => {
    if (error && typeof error === 'string' && !error.includes('User Rejected')) {
        // Use a clearer way to show error in production, alert is okay for now
        console.error(error);
    }
  }, [error]);

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
      className={`fixed top-4 left-0 right-0 z-50 transition-all duration-500 ease-in-out px-4 flex justify-center ${
        isScrolled 
          ? 'translate-y-0' 
          : 'translate-y-2'
      }`}
    >
      <div 
        className={`w-full max-w-7xl transition-all duration-500 rounded-2xl flex items-center justify-between px-4 sm:px-6 py-3 ${
            isScrolled 
            ? 'bg-surface/80 backdrop-blur-xl border border-borderDim shadow-2xl shadow-black/5 dark:shadow-black/20' 
            : 'bg-transparent border border-transparent'
        }`}
      >
          {/* Logo */}
          <div 
            className="flex-shrink-0 flex items-center cursor-pointer group"
            onClick={() => onNavigate(SectionType.HOME)}
          >
            <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr from-primary to-secondary flex items-center justify-center mr-3 transition-all duration-300 ${isScrolled ? 'shadow-lg shadow-primary/20' : 'shadow-2xl shadow-primary/40'}`}>
              <Rocket className="text-white w-5 h-5 group-hover:rotate-12 transition-transform" />
            </div>
            <span className={`font-bold text-xl tracking-tighter transition-colors ${isScrolled ? 'text-textMain' : 'text-textMain'}`}>
              {APP_NAME}
            </span>
          </div>

          {/* Desktop Menu - Centered Island Style */}
          <div className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2">
             <div className={`flex items-center gap-1 p-1.5 rounded-full transition-all duration-500 ${isScrolled ? 'bg-black/5 dark:bg-white/5 border border-borderDim' : 'bg-surface/30 backdrop-blur-md border border-borderDim'}`}>
                {NAV_ITEMS.map((item) => (
                    <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`relative px-4 py-2 rounded-full text-xs font-medium transition-all duration-300 flex items-center gap-2 ${
                        currentSection === item.id
                        ? 'text-white bg-textMain shadow-sm'
                        : 'text-textMuted hover:text-textMain hover:bg-black/5 dark:hover:bg-white/5'
                    }`}
                    >
                    {currentSection === item.id && (
                        <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
                    )}
                    {getNavLabel(item.id)}
                    </button>
                ))}
             </div>
          </div>

          {/* Right Controls */}
          <div className="hidden lg:flex items-center gap-3">
             {/* Theme & Language */}
             <div className="flex items-center gap-2 pr-4 border-r border-borderDim">
                <button 
                  onClick={() => setShowThemeMenu(!showThemeMenu)}
                  className="w-9 h-9 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 flex items-center justify-center text-textMuted hover:text-accent transition-all relative"
                >
                  <Palette className="w-4 h-4" />
                  {showThemeMenu && (
                    <div className="absolute top-12 right-0 glass-panel p-4 rounded-2xl flex flex-col gap-4 min-w-[260px] animate-in fade-in zoom-in-95 duration-200 shadow-2xl z-50 border border-borderDim">
                        {/* Mode */}
                        <div className="flex items-center justify-between">
                            <span className="text-xs text-textMuted font-bold uppercase tracking-wider">Appearance</span>
                            <button onClick={toggleThemeMode} className="p-1.5 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors">
                                {themeMode === 'dark' ? <Moon className="w-4 h-4 text-accent" /> : <Sun className="w-4 h-4 text-yellow-500" />}
                            </button>
                        </div>
                        {/* Colors */}
                        <div className="grid grid-cols-4 gap-2">
                            {THEME_COLORS.map((tc) => (
                                <button
                                    key={tc.id}
                                    onClick={() => setThemeColor(tc.id)}
                                    className={`h-8 rounded-lg border flex items-center justify-center transition-all ${themeColor === tc.id ? 'border-textMain/50 scale-105' : 'border-transparent hover:scale-105'}`}
                                    style={{ backgroundColor: `${tc.color}33` }} // 20% opacity background
                                >
                                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: tc.color }}></div>
                                </button>
                            ))}
                        </div>
                    </div>
                  )}
                </button>

                <button 
                    onClick={toggleLanguage}
                    className="w-9 h-9 rounded-full bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 flex items-center justify-center text-xs font-mono font-bold text-textMuted hover:text-textMain transition-all"
                >
                    {language === 'zh' ? 'EN' : '中'}
                </button>
             </div>

             {/* Wallet Connection */}
             {isConnected ? (
                <div className="flex items-center gap-2">
                    {isWrongNetwork ? (
                        <button 
                            onClick={() => switchChain && switchChain(xLayer.id)}
                            className="bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 px-4 py-2 rounded-full font-mono text-xs flex items-center gap-2 transition-all animate-pulse"
                        >
                            <AlertCircle className="w-3 h-3" />
                            Wrong Network
                        </button>
                    ) : (
                        <button 
                            onClick={() => disconnect && disconnect()}
                            className="group relative flex items-center gap-3 pl-1 pr-4 py-1.5 rounded-full bg-surface/50 border border-borderDim hover:border-red-500/30 hover:bg-red-500/10 transition-all duration-300"
                        >
                            <div className="relative flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500">
                                <Wallet className="w-3 h-3 text-white" />
                            </div>
                            <div className="flex flex-col items-start">
                                <span className="text-[10px] text-textMuted leading-none mb-0.5">Connected</span>
                                <span className="text-xs font-mono font-bold text-textMain group-hover:text-red-400 transition-colors">
                                    {formattedAddress}
                                </span>
                            </div>
                        </button>
                    )}
                </div>
             ) : (
                <button 
                    onClick={() => connect && connect()} 
                    disabled={isConnecting}
                    className="relative overflow-hidden group bg-textMain text-background px-6 py-2.5 rounded-full font-bold text-xs tracking-wide transition-all hover:scale-105"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative z-10 flex items-center gap-2 group-hover:text-white transition-colors">
                        {isConnecting ? <Loader2 className="w-3 h-3 animate-spin" /> : <Wallet className="w-3 h-3" />}
                        {t.nav.connect}
                    </span>
                </button>
             )}
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center gap-3">
             <button onClick={toggleLanguage} className="text-sm font-bold text-textMain">{language.toUpperCase()}</button>
             <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full bg-black/5 dark:bg-white/5 text-textMain"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-20 left-4 right-4 glass-panel rounded-2xl p-4 flex flex-col gap-2 animate-in fade-in slide-in-from-top-4 duration-300 shadow-xl">
             {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-3 transition-colors ${
                  currentSection === item.id
                    ? 'bg-black/10 dark:bg-white/10 text-textMain'
                    : 'text-textMuted hover:bg-black/5 dark:hover:bg-white/5 hover:text-textMain'
                }`}
              >
                <item.icon className="w-4 h-4" />
                {getNavLabel(item.id)}
              </button>
            ))}
            
            <div className="h-px bg-borderDim my-2"></div>
            
            {/* Mobile Wallet */}
            {isConnected ? (
                <button 
                    onClick={() => disconnect && disconnect()}
                    className="w-full bg-red-500/10 text-red-400 px-4 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2"
                >
                    Disconnect {formattedAddress}
                </button>
            ) : (
                <button 
                    onClick={() => {
                        if (connect) connect();
                        setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-textMain text-background px-4 py-3 rounded-xl text-sm font-bold flex items-center justify-center gap-2"
                >
                    Connect Wallet
                </button>
            )}
        </div>
      )}
    </nav>
  );
};

export default Navigation;