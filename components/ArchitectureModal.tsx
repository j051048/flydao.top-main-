import React from 'react';
import { X, Copy, Check } from 'lucide-react';

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ArchitectureModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const codeString = `/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      // 1. AI Weather (Cartoon)
      {
        source: '/app/weather-cartoon/:path*',
        destination: 'https://app1.flydao.top/:path*',
      },
      // 2. AI Weather (Real)
      {
        source: '/app/weather-real/:path*',
        destination: 'https://app2.flydao.top/:path*',
      },
      // Other Sections
      {
        source: '/movie/:path*',
        destination: 'https://flydao-movie.vercel.app/:path*',
      },
      {
        source: '/game/:path*',
        destination: 'https://flydao-game.vercel.app/:path*',
      },
      {
        source: '/news/:path*',
        destination: 'https://flydao-news.vercel.app/:path*',
      },
    ]
  },
}

module.exports = nextConfig`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeString);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative bg-surface border border-white/10 rounded-xl w-full max-w-2xl shadow-2xl overflow-hidden">
        <div className="flex justify-between items-center p-6 border-b border-white/10 bg-white/5">
          <h2 className="text-xl font-bold text-textMain flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Deploy Configuration
          </h2>
          <button onClick={onClose} className="text-textMuted hover:text-textMain">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6">
          <p className="text-textMuted mb-4 text-sm">
            To integrate your H5 apps into the main domain, add these rules to 
            <code>next.config.js</code>. This will make <code>flydao.top/app/weather-cartoon</code> load your external Vercel app transparently.
          </p>
          
          <div className="relative group">
            <div className="absolute top-4 right-4 z-10">
              <button 
                onClick={handleCopy}
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-xs px-3 py-1.5 rounded transition-colors text-white"
              >
                {copied ? <Check className="w-3 h-3 text-green-400" /> : <Copy className="w-3 h-3" />}
                {copied ? 'Copied' : 'Copy Config'}
              </button>
            </div>
            <pre className="bg-[#030014] p-4 rounded-lg overflow-x-auto text-xs text-blue-300 font-mono border border-white/5 leading-relaxed">
              {codeString}
            </pre>
          </div>

          <div className="mt-6 flex flex-col gap-2 bg-yellow-500/10 border border-yellow-500/20 p-4 rounded text-xs text-yellow-200">
            <strong>Integration Note:</strong>
            <ul className="list-disc list-inside space-y-1 opacity-80">
               <li>The cards below link directly to the sub-apps for this demo.</li>
               <li>In production, with rewrites enabled, you can change the links to relative paths like <code>/app/weather-cartoon</code>.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArchitectureModal;