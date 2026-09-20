import React from 'react';
import { Menu, Search, Bot, MapPin, Bookmark, Sparkles, BookOpen } from 'lucide-react';
import { Language, UserProgress } from '../types';
import { LanguageToggle } from './LanguageToggle';

interface NavbarProps {
  currentLang: Language;
  onToggleLanguage: (lang: Language) => void;
  onOpenSidebar: () => void;
  onOpenSearch: () => void;
  onToggleChatbot: () => void;
  onNavigateHome: () => void;
  onNavigateBookmarks: () => void;
  progress: UserProgress;
  totalLessons: number;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang,
  onToggleLanguage,
  onOpenSidebar,
  onOpenSearch,
  onToggleChatbot,
  onNavigateHome,
  onNavigateBookmarks,
  progress,
  totalLessons,
}) => {
  const completedCount = progress.completedLessons.length;
  const percentage = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  return (
    <header className="sticky top-0 z-30 w-full h-16 bg-slate-950/90 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-6 flex items-center justify-between">
      {/* Left section: Hamburger & Logo */}
      <div className="flex items-center space-x-3">
        <button
          type="button"
          onClick={onOpenSidebar}
          className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          title="Toggle Navigation Menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div
          onClick={onNavigateHome}
          className="flex items-center space-x-2.5 cursor-pointer group"
        >
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 font-mono font-bold text-sm">
            ML
          </div>
          <div className="hidden sm:block">
            <div className="flex items-center space-x-1.5">
              <span className="font-extrabold text-slate-100 text-base tracking-tight group-hover:text-cyan-400 transition-colors">
                ML Path
              </span>
              <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                AI Academy
              </span>
            </div>
            <p className="text-[10px] text-slate-400 -mt-0.5">
              {currentLang === 'bn' ? 'জিরো থেকে হিরো মেশিন লার্নিং' : 'Zero to Hero Curriculum'}
            </p>
          </div>
        </div>
      </div>

      {/* Middle section: Global Search Trigger Button */}
      <div className="flex-1 max-w-md mx-4 hidden md:block">
        <button
          type="button"
          onClick={onOpenSearch}
          className="w-full flex items-center justify-between px-3.5 py-2 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 text-slate-400 text-xs transition-all shadow-inner"
        >
          <div className="flex items-center space-x-2">
            <Search className="w-4 h-4 text-cyan-400" />
            <span>
              {currentLang === 'bn'
                ? 'যেকোনো টপিক বা অ্যালগরিদম খুঁজুন...'
                : 'Search lessons, algorithms, math formulas...'}
            </span>
          </div>
          <kbd className="px-2 py-0.5 rounded bg-slate-800 border border-slate-700 text-[10px] font-mono text-slate-400">
            ⌘K
          </kbd>
        </button>
      </div>

      {/* Right section: Mobile Search, AI Mentor, Bookmarks, Language Toggle */}
      <div className="flex items-center space-x-2 sm:space-x-3">
        {/* Mobile search button */}
        <button
          type="button"
          onClick={onOpenSearch}
          className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white md:hidden"
          title="Search"
        >
          <Search className="w-4 h-4" />
        </button>

        {/* Compact Progress (Desktop) */}
        <div className="hidden lg:flex items-center space-x-2 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs">
          <span className="text-slate-400 font-mono">
            {completedCount}/{totalLessons}
          </span>
          <div className="w-16 h-1.5 rounded-full bg-slate-800 overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
              style={{ width: `${percentage}%` }}
            />
          </div>
          <span className="text-cyan-400 font-semibold">{percentage}%</span>
        </div>

        {/* Bookmarks Quick Trigger */}
        <button
          type="button"
          onClick={onNavigateBookmarks}
          className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition-colors relative"
          title="Saved Bookmarks"
        >
          <Bookmark className="w-4 h-4" />
          {progress.bookmarkedLessons.length > 0 && (
            <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-amber-500 text-slate-950 font-bold text-[9px] flex items-center justify-center">
              {progress.bookmarkedLessons.length}
            </span>
          )}
        </button>

        {/* AI Mentor Button */}
        <button
          type="button"
          onClick={onToggleChatbot}
          className="flex items-center space-x-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 text-cyan-300 border border-cyan-500/30 text-xs font-semibold transition-all shadow-sm shadow-cyan-500/10"
        >
          <Bot className="w-4 h-4 text-cyan-400 animate-pulse" />
          <span className="hidden sm:inline">
            {currentLang === 'bn' ? 'AI মেন্টর' : 'AI Mentor'}
          </span>
        </button>

        {/* Language Toggle */}
        <LanguageToggle
          currentLang={currentLang}
          onToggle={onToggleLanguage}
        />
      </div>
    </header>
  );
};
