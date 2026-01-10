import React from 'react';
import { Rocket, Twitter, Github, Disc } from 'lucide-react';
import { APP_NAME } from '../constants';
import { useAppContext } from '../contexts/AppContext';

const Footer: React.FC = () => {
  const { t } = useAppContext();

  return (
    <footer className="relative bg-background pt-24 pb-12 border-t border-white/5 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center mr-3">
                 <Rocket className="text-white w-4 h-4" />
              </div>
              <span className="font-bold text-xl text-textMain tracking-tighter">{APP_NAME}</span>
            </div>
            <p className="text-textMuted text-sm leading-relaxed max-w-sm font-light">
              {t.footer.desc}
            </p>
          </div>
          
          <div>
            <h3 className="text-textMain font-bold mb-6 tracking-widest text-xs uppercase opacity-80">{t.footer.ecosystem}</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-textMuted hover:text-textMain transition-colors text-sm font-medium hover:translate-x-1 inline-block duration-200">{t.nav.movie}</a></li>
              <li><a href="#" className="text-textMuted hover:text-textMain transition-colors text-sm font-medium hover:translate-x-1 inline-block duration-200">{t.nav.game}</a></li>
              <li><a href="#" className="text-textMuted hover:text-textMain transition-colors text-sm font-medium hover:translate-x-1 inline-block duration-200">{t.nav.news}</a></li>
              <li><a href="#" className="text-textMuted hover:text-textMain transition-colors text-sm font-medium hover:translate-x-1 inline-block duration-200">{t.nav.literature}</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-textMain font-bold mb-6 tracking-widest text-xs uppercase opacity-80">{t.footer.community}</h3>
            <div className="flex gap-4">
              <a 
                href="https://x.com/0xFelix1989" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-surface border border-white/5 flex items-center justify-center text-textMuted hover:bg-white/10 hover:text-textMain hover:border-white/20 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-surface border border-white/5 flex items-center justify-center text-textMuted hover:bg-white/10 hover:text-textMain hover:border-white/20 transition-all duration-300">
                <Disc className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-2xl bg-surface border border-white/5 flex items-center justify-center text-textMuted hover:bg-white/10 hover:text-textMain hover:border-white/20 transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-textMuted text-xs font-mono">© 2026 {APP_NAME} LABS. {t.footer.rights}</p>
          <div className="flex space-x-8">
            <a href="#" className="text-textMuted hover:text-textMain text-xs font-mono uppercase tracking-wider">{t.footer.privacy}</a>
            <a href="#" className="text-textMuted hover:text-textMain text-xs font-mono uppercase tracking-wider">{t.footer.terms}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;