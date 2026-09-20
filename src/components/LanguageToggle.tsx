import React from 'react';
import { Globe } from 'lucide-react';
import { Language } from '../types';

interface LanguageToggleProps {
  currentLang: Language;
  onToggle: (lang: Language) => void;
  className?: string;
}

export const LanguageToggle: React.FC<LanguageToggleProps> = ({
  currentLang,
  onToggle,
  className = '',
}) => {
  return (
    <div
      className={`inline-flex items-center p-1 rounded-xl bg-slate-800/90 border border-slate-700/80 shadow-inner ${className}`}
    >
      <div className="flex items-center pl-2 pr-1.5 text-slate-400">
        <Globe className="w-3.5 h-3.5" />
      </div>
      <button
        type="button"
        onClick={() => onToggle('bn')}
        className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all ${
          currentLang === 'bn'
            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md font-semibold'
            : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        বাংলা
      </button>
      <button
        type="button"
        onClick={() => onToggle('en')}
        className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all ${
          currentLang === 'en'
            ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md font-semibold'
            : 'text-slate-400 hover:text-slate-200'
        }`}
      >
        EN
      </button>
    </div>
  );
};
