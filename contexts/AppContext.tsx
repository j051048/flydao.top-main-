import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Language, Theme } from '../types';
import { translations } from '../translations';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  t: typeof translations.en;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('zh'); // Default to Chinese as requested implies Chinese community
  const [theme, setTheme] = useState<Theme>('black');

  useEffect(() => {
    // Update body class for theming
    const body = document.body;
    body.classList.remove('theme-black', 'theme-white', 'theme-pink', 'theme-yellow');
    body.classList.add(`theme-${theme}`);
    
    // Handle light/dark mode for Tailwind
    const html = document.documentElement;
    if (theme === 'white') {
        html.classList.remove('dark');
    } else {
        html.classList.add('dark');
    }
  }, [theme]);

  const t = translations[language];

  return (
    <AppContext.Provider value={{ language, setLanguage, theme, setTheme, t }}>
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
