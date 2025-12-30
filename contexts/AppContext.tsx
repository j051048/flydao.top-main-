import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, ThemeMode, ThemeColor } from '../types';
import { translations } from '../translations';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  themeMode: ThemeMode;
  toggleThemeMode: () => void;
  themeColor: ThemeColor;
  setThemeColor: (color: ThemeColor) => void;
  t: typeof translations.en;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('zh');
  const [themeMode, setThemeMode] = useState<ThemeMode>('dark');
  const [themeColor, setThemeColor] = useState<ThemeColor>('blue');

  // Handle Day/Night Mode (Light/Dark)
  useEffect(() => {
    const html = document.documentElement;
    if (themeMode === 'dark') {
      html.classList.add('dark');
    } else {
      html.classList.remove('dark');
    }
  }, [themeMode]);

  // Handle Color Themes
  useEffect(() => {
    const body = document.body;
    // Remove all existing theme-* classes
    const classes = body.className.split(' ').filter(c => !c.startsWith('theme-'));
    body.className = classes.join(' ');
    // Add new theme class
    body.classList.add(`theme-${themeColor}`);
  }, [themeColor]);

  const toggleThemeMode = () => {
    setThemeMode(prev => prev === 'dark' ? 'light' : 'dark');
  };

  // Safe translation access
  const t = translations[language] || translations['en'];

  return (
    <AppContext.Provider value={{ language, setLanguage, themeMode, toggleThemeMode, themeColor, setThemeColor, t }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};