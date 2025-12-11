import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, Globe, Palette, Wallet, LogOut, Loader2, AlertCircle, RefreshCw } from 'lucide-react';
import { formatUnits } from 'viem';
import { xLayer } from 'viem/chains';
import { NAV_ITEMS, APP_NAME } from '../constants';
import { SectionType, Theme } from '../types';
import { useAppContext } from '../contexts/AppContext';
import { useWallet } from '../web3/hooks';

interface NavigationProps {
  currentSection: SectionType;
  onNavigate: (section: SectionType) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentSection, onNavigate }) => {
  const { t, language, setLanguage, theme, setTheme } = useAppContext();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showThemeMenu, setShowThemeMenu] = useState(false);
  
  // Web3 Integration
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
  } = useWallet();

  const isWrongNetwork = isConnected && chainId !== xLayer.id;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Show error alert if wallet error occurs
  useEffect(() => {
    if (error) {
        if (!error.includes('User Rejected')) {
            alert(error);
        }
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

             {/* Web3 Connect Button */}
             {isConnected ? (
                <div className="flex items-center gap-2">
                    {isWrongNetwork ? (
                        <button 
                            onClick={() => switchChain(xLayer.id)}
                            className="bg-red-500/20 hover:bg-red-500/30 border border-red-500/50 text-red-400 px-4 py-2 rounded-full font-mono text-xs flex items-center gap-2 transition-all animate-pulse whitespace-nowrap"
                        >
                            <AlertCircle className="w-3 h-3" />
                            Switch to X Layer
                            <RefreshCw className="w-3 h-3" />
                        </button>
                    ) : (
                        <div className="flex items-center gap-3 bg-surface/80 border border-white/10 rounded-full py-1.5 pl-4 pr-1.5 backdrop-blur-md shadow-sm transition-all hover:border-white/20 hover:bg-surface">
                            {/* Network & Balance */}
                            <div className="flex flex-col items-end space-y-0.5">
                                <span className="text-[10px] font-bold text-textMuted uppercase tracking-wider leading-none">X Layer</span>
                                <span className="text-xs font-mono font-bold text-accent leading-none whitespace-nowrap">
                                    {balance ? parseFloat(formatUnits(balance.value, balance.decimals)).toFixed(3) : '0.00'} {balance?.symbol}
                                </span>
                            </div>

                            {/* Divider */}
                            <div className="w-px h-5 bg-white/10"></div>

                            {/* Wallet Button */}
                            <button 
                                onClick={() => disconnect()}
                                className="group flex items-center gap-2 pl-1 pr-2 py-1 rounded-full hover:bg-white/5 transition-all"
                                title="Click to disconnect"
                            >
                                <div className="relative flex items-center justify-center w-5 h-5 rounded-full bg-gradient-to-tr from-emerald-500 to-teal-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]">
                                    <span className="absolute w-full h-full rounded-full bg-white opacity-20 animate-pulse"></span>
                                </div>
                                <span className="text-xs font-mono font-bold text-textMain group-hover:text-red-400 transition-colors whitespace-nowrap">
                                    {formattedAddress}
                                </span>
                                <div className="w-5 h-5 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-red-500/20 group-hover:text-red-400 transition-colors ml-1">
                                    <LogOut className="w-3 h-3" />
                                </div>
                            </button>
                        </div>
                    )}
                </div>
             ) : (
                <button 
                    onClick={() => connect()} 
                    disabled={isConnecting}
                    className="bg-white/5 hover:bg-white/10 border border-white/10 text-textMain px-6 py-2 rounded-full font-mono text-xs tracking-wider uppercase transition-all hover:border-accent/50 hover:shadow-[0_0_15px_var(--accent-color)] flex items-center gap-2 disabled:opacity-50 disabled:cursor-wait whitespace-nowrap"
                >
                    {isConnecting ? (
                        <>
                           <Loader2 className="w-3 h-3 animate-spin" />
                           Connecting...
                        </>
                    ) : (
                        <>
                           <Wallet className="w-3 h-3" />
                           {t.nav.connect}
                        </>
                    )}
                </button>
             )}
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
              {isConnected ? (
                  isWrongNetwork ? (
                    <button 
                        onClick={() => switchChain(xLayer.id)}
                        className="w-full bg-red-500/20 border border-red-500/50 text-red-400 px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2"
                    >
                        <AlertCircle className="w-4 h-4" />
                        Switch Network
                    </button>
                  ) : (
                    <button 
                        onClick={() => disconnect()}
                        className="w-full bg-white/5 border border-white/10 text-textMain px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2"
                    >
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        {formattedAddress} ({connectorName})
                    </button>
                  )
              ) : (
                  <button 
                    onClick={() => {
                        connect();
                        setIsMobileMenuOpen(false);
                    }}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2"
                  >
                      <Wallet className="w-4 h-4" />
                      {t.nav.connect}
                  </button>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;