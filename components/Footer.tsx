import React from 'react';
import { Rocket, Twitter, Github, Disc } from 'lucide-react';
import { APP_NAME } from '../constants';
import { useAppContext } from '../contexts/AppContext';

const Footer: React.FC = () => {
  const { t } = useAppContext();

  return (
    <footer className="bg-background border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <Rocket className="text-primary w-6 h-6 mr-2" />
              <span className="font-bold text-xl text-textMain tracking-wider">{APP_NAME}</span>
            </div>
            <p className="text-textMuted text-sm leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>
          </div>
          
          <div>
            <h3 className="text-textMain font-semibold mb-4 tracking-wider text-sm uppercase">{t.footer.ecosystem}</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-textMuted hover:text-accent transition-colors text-sm">{t.nav.movie}</a></li>
              <li><a href="#" className="text-textMuted hover:text-accent transition-colors text-sm">{t.nav.game}</a></li>
              <li><a href="#" className="text-textMuted hover:text-accent transition-colors text-sm">{t.nav.news}</a></li>
              <li><a href="#" className="text-textMuted hover:text-accent transition-colors text-sm">{t.nav.literature}</a></li>
              <li><a href="#" className="text-textMuted hover:text-accent transition-colors text-sm">{t.nav.photography}</a></li>
              <li><a href="#" className="text-textMuted hover:text-accent transition-colors text-sm">{t.nav.app}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-textMain font-semibold mb-4 tracking-wider text-sm uppercase">{t.footer.community}</h3>
            <div className="flex space-x-4">
              <a 
                href="https://x.com/0xFelix1989" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-textMuted hover:bg-primary hover:text-white transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-textMuted hover:bg-secondary hover:text-white transition-all duration-300">
                <Disc className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-textMuted hover:bg-white hover:text-black transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center">
          <p className="text-textMuted text-xs">© 2025 {APP_NAME}. {t.footer.rights}</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-textMuted hover:text-textMain text-xs">{t.footer.privacy}</a>
            <a href="#" className="text-textMuted hover:text-textMain text-xs">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;