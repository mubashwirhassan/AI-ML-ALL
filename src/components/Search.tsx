import React, { useState, useEffect, useRef } from 'react';
import { Search as SearchIcon, X, BookOpen, ChevronRight, Layers, Tag } from 'lucide-react';
import { Lesson, Level, Language } from '../types';

interface SearchProps {
  isOpen: boolean;
  onClose: () => void;
  levels: Level[];
  allLessons: Lesson[];
  currentLang: Language;
  onSelectLesson: (lessonId: string) => void;
}

export const Search: React.FC<SearchProps> = ({
  isOpen,
  onClose,
  levels,
  allLessons,
  currentLang,
  onSelectLesson,
}) => {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    } else {
      setQuery('');
    }
  }, [isOpen]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
      // Ctrl+K / Cmd+K trigger
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const cleanQuery = query.toLowerCase().trim();

  const filteredLessons = cleanQuery
    ? allLessons.filter((lesson) => {
        const titleEn = lesson.title.en.toLowerCase();
        const titleBn = lesson.title.bn.toLowerCase();
        const subEn = lesson.subtitle.en.toLowerCase();
        const subBn = lesson.subtitle.bn.toLowerCase();
        const category = lesson.category.toLowerCase();
        const whatEn = lesson.whatIsIt.en.toLowerCase();
        const whatBn = lesson.whatIsIt.bn.toLowerCase();

        return (
          titleEn.includes(cleanQuery) ||
          titleBn.includes(cleanQuery) ||
          subEn.includes(cleanQuery) ||
          subBn.includes(cleanQuery) ||
          category.includes(cleanQuery) ||
          whatEn.includes(cleanQuery) ||
          whatBn.includes(cleanQuery)
        );
      })
    : [];

  const handleItemClick = (lessonId: string) => {
    onSelectLesson(lessonId);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div
        className="w-full max-w-2xl rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-800 bg-slate-900/90">
          <SearchIcon className="w-5 h-5 text-cyan-400 mr-3 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              currentLang === 'bn'
                ? 'যেকোনো টপিক খুঁজুন (যেমন: লিনিয়ার রিগ্রেশন, ব্যাকপ্রপাগেশন, সিএনএন)...'
                : 'Search any ML topic (e.g., Regression, Backpropagation, CNN, XGBoost)...'
            }
            className="w-full bg-transparent text-slate-100 placeholder-slate-500 text-sm sm:text-base outline-none font-sans"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-slate-400 hover:text-slate-200 mr-2"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2 py-1 rounded-lg bg-slate-800 text-slate-400 hover:text-slate-200 text-xs font-mono"
          >
            ESC
          </button>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-3 space-y-2 divide-y divide-slate-800/50">
          {cleanQuery && filteredLessons.length === 0 && (
            <div className="py-12 text-center text-slate-500">
              <SearchIcon className="w-8 h-8 mx-auto mb-2 opacity-40 text-slate-400" />
              <p className="text-sm font-medium">
                {currentLang === 'bn'
                  ? `"${query}" সম্পর্কিত কোনো পাঠ পাওয়া যায়নি`
                  : `No lessons found matching "${query}"`}
              </p>
              <p className="text-xs text-slate-600 mt-1">
                {currentLang === 'bn'
                  ? 'ভিন্ন কোনো কীওয়ার্ড বা সাধারণ ইংরেজি নাম দিয়ে চেষ্টা করুন।'
                  : 'Try searching for broader keywords like Python, Math, Forest, or Neural.'}
              </p>
            </div>
          )}

          {!cleanQuery && (
            <div className="p-4 text-xs text-slate-400">
              <span className="font-semibold uppercase tracking-wider text-slate-500 block mb-2">
                {currentLang === 'bn' ? 'জনপ্রিয় অনুসন্ধানসমূহ' : 'Popular Search Topics'}
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  'Linear Regression',
                  'Gradient Descent',
                  'Random Forest',
                  'XGBoost',
                  'Backpropagation',
                  'Confusion Matrix',
                  'Docker & FastAPI',
                  'Customer Churn',
                ].map((term) => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="flex items-center space-x-1 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700/80 text-slate-300 transition-colors"
                  >
                    <Tag className="w-3 h-3 text-cyan-400" />
                    <span>{term}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {filteredLessons.map((lesson) => {
            const parentLevel = levels.find((lvl) => lvl.id === lesson.levelId);
            return (
              <button
                key={lesson.id}
                type="button"
                onClick={() => handleItemClick(lesson.id)}
                className="w-full text-left p-3 rounded-xl hover:bg-slate-800/70 transition-all flex items-center justify-between group"
              >
                <div className="flex items-start space-x-3">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 mt-0.5 shrink-0 group-hover:bg-cyan-500/20">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-800 text-cyan-400 border border-slate-700">
                        Level {lesson.levelId}
                      </span>
                      <span className="text-xs text-slate-400">{lesson.category}</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-200 group-hover:text-cyan-400 transition-colors mt-1">
                      {lesson.title[currentLang] || lesson.title.en}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">
                      {lesson.subtitle[currentLang] || lesson.subtitle.en}
                    </p>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 group-hover:translate-x-0.5 transition-all shrink-0 ml-2" />
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="px-4 py-2.5 bg-slate-950 border-t border-slate-800 text-[11px] text-slate-500 flex items-center justify-between">
          <span>
            {currentLang === 'bn'
              ? `${allLessons.length}টি পাঠের মধ্যে সরাসরি সন্ধান`
              : `Searching across ${allLessons.length} comprehensive lessons`}
          </span>
          <span className="font-mono">ML Path Knowledge Base</span>
        </div>
      </div>
    </div>
  );
};
