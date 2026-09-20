import React, { useState } from 'react';
import {
  Compass,
  Code,
  Activity,
  BarChart3,
  Cpu,
  CheckCircle2,
  Zap,
  Network,
  Sparkle,
  Server,
  Award,
  ChevronDown,
  ChevronRight,
  Bookmark,
  MapPin,
  X,
  BookOpen,
} from 'lucide-react';
import { Level, Lesson, Language, UserProgress } from '../types';
import { ProgressBar } from './ProgressBar';

interface SidebarProps {
  levels: Level[];
  activeLevelId: number | null;
  activeLessonId: string | null;
  currentLang: Language;
  progress: UserProgress;
  totalLessons: number;
  isOpen: boolean;
  onClose: () => void;
  onSelectLevel: (levelId: number) => void;
  onSelectLesson: (lessonId: string) => void;
  onSelectView: (view: 'roadmap' | 'bookmarks') => void;
  currentView: 'roadmap' | 'level' | 'lesson' | 'bookmarks';
}

export const Sidebar: React.FC<SidebarProps> = ({
  levels,
  activeLevelId,
  activeLessonId,
  currentLang,
  progress,
  totalLessons,
  isOpen,
  onClose,
  onSelectLevel,
  onSelectLesson,
  onSelectView,
  currentView,
}) => {
  const [expandedLevels, setExpandedLevels] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    [activeLevelId ?? 0]: true,
  });

  const toggleLevelExpand = (levelId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpandedLevels((prev) => ({ ...prev, [levelId]: !prev[levelId] }));
  };

  const getLevelIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-4 h-4" />;
      case 'Code':
        return <Code className="w-4 h-4" />;
      case 'Activity':
        return <Activity className="w-4 h-4" />;
      case 'BarChart3':
        return <BarChart3 className="w-4 h-4" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-4 h-4" />;
      case 'Zap':
        return <Zap className="w-4 h-4" />;
      case 'Network':
        return <Network className="w-4 h-4" />;
      case 'Sparkle':
        return <Sparkle className="w-4 h-4" />;
      case 'Server':
        return <Server className="w-4 h-4" />;
      case 'Award':
        return <Award className="w-4 h-4" />;
      default:
        return <Cpu className="w-4 h-4" />;
    }
  };

  return (
    <>
      {/* Mobile Backdrop Overlay */}
      {isOpen && (
        <div
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm lg:hidden"
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 bottom-0 left-0 z-50 w-72 sm:w-80 bg-slate-950 border-r border-slate-800/90 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Brand Header */}
        <div className="p-4 border-b border-slate-800/80 flex items-center justify-between bg-slate-950">
          <div
            onClick={() => {
              onSelectView('roadmap');
              onClose();
            }}
            className="flex items-center space-x-2.5 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white shadow-md shadow-cyan-500/20 font-mono font-bold text-base">
              ML
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-extrabold text-slate-100 text-base tracking-tight group-hover:text-cyan-400 transition-colors">
                  ML Path
                </span>
                <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  Zero to Hero
                </span>
              </div>
              <p className="text-[10px] text-slate-400">
                {currentLang === 'bn' ? 'মেশিন লার্নিং পূর্ণাঙ্গ একাডেমি' : 'Master Machine Learning'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 lg:hidden"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Actions */}
        <div className="p-3 border-b border-slate-800/60 space-y-1">
          <button
            type="button"
            onClick={() => {
              onSelectView('roadmap');
              onClose();
            }}
            className={`w-full flex items-center space-x-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
              currentView === 'roadmap'
                ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
                : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
            }`}
          >
            <MapPin className="w-4 h-4 text-cyan-400" />
            <span>{currentLang === 'bn' ? '🗺️ সম্পূর্ণ রোডম্যাপ' : '🗺️ Full Visual Roadmap'}</span>
          </button>

          <button
            type="button"
            onClick={() => {
              onSelectView('bookmarks');
              onClose();
            }}
            className={`w-full flex items-center justify-between px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
              currentView === 'bookmarks'
                ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
            }`}
          >
            <div className="flex items-center space-x-2.5">
              <Bookmark className="w-4 h-4 text-amber-400" />
              <span>{currentLang === 'bn' ? 'বুকমার্কসমূহ' : 'Saved Bookmarks'}</span>
            </div>
            {progress.bookmarkedLessons.length > 0 && (
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-mono">
                {progress.bookmarkedLessons.length}
              </span>
            )}
          </button>
        </div>

        {/* Levels Accordion List */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1 custom-scrollbar">
          <div className="px-2 py-1 text-[11px] font-bold uppercase tracking-wider text-slate-500">
            {currentLang === 'bn' ? 'কারিকুলাম লেভেলসমূহ (০ - ১০)' : 'Curriculum Levels (0 - 10)'}
          </div>

          {levels.map((lvl) => {
            const isExpanded = !!expandedLevels[lvl.id];
            const isLevelActive = activeLevelId === lvl.id && currentView !== 'roadmap';
            const completedInThisLevel = lvl.lessons.filter((l) =>
              progress.completedLessons.includes(l.id)
            ).length;
            const isLevelComplete =
              lvl.lessons.length > 0 && completedInThisLevel === lvl.lessons.length;

            return (
              <div key={lvl.id} className="rounded-xl overflow-hidden">
                {/* Level header item */}
                <div
                  onClick={() => {
                    onSelectLevel(lvl.id);
                    onClose();
                  }}
                  className={`flex items-center justify-between p-2.5 rounded-xl cursor-pointer text-xs transition-all ${
                    isLevelActive
                      ? 'bg-slate-800/90 text-white font-bold border border-slate-700'
                      : 'text-slate-300 hover:bg-slate-900/80 hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-2.5 min-w-0">
                    <div
                      className={`p-1.5 rounded-lg bg-slate-800 text-cyan-400 shrink-0 ${
                        isLevelComplete ? 'text-emerald-400' : ''
                      }`}
                    >
                      {getLevelIcon(lvl.iconName)}
                    </div>
                    <div className="truncate">
                      <div className="flex items-center space-x-1.5">
                        <span className="font-mono text-[11px] text-cyan-400">L{lvl.id}</span>
                        <span className="truncate font-semibold">{lvl.title[currentLang] || lvl.title.en}</span>
                      </div>
                      <span className="text-[10px] text-slate-500">
                        {completedInThisLevel}/{lvl.lessons.length} {currentLang === 'bn' ? 'সম্পন্ন' : 'done'}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={(e) => toggleLevelExpand(lvl.id, e)}
                    className="p-1 rounded text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                  >
                    {isExpanded ? (
                      <ChevronDown className="w-3.5 h-3.5" />
                    ) : (
                      <ChevronRight className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Sub-lessons list */}
                {isExpanded && (
                  <div className="pl-6 pr-1 py-1 space-y-0.5 border-l border-slate-800/80 ml-4 my-1">
                    {lvl.lessons.map((lesson) => {
                      const isCompleted = progress.completedLessons.includes(lesson.id);
                      const isCurrent = activeLessonId === lesson.id && currentView === 'lesson';

                      return (
                        <button
                          key={lesson.id}
                          type="button"
                          onClick={() => {
                            onSelectLesson(lesson.id);
                            onClose();
                          }}
                          className={`w-full text-left flex items-center justify-between px-2.5 py-1.5 rounded-lg text-xs transition-all ${
                            isCurrent
                              ? 'bg-cyan-500/20 text-cyan-300 font-semibold border border-cyan-500/30'
                              : 'text-slate-400 hover:bg-slate-900 hover:text-slate-200'
                          }`}
                        >
                          <span className="truncate pr-2">
                            {lesson.title[currentLang] || lesson.title.en}
                          </span>
                          {isCompleted ? (
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          ) : (
                            <span className="text-[10px] text-slate-600 font-mono shrink-0">
                              {lesson.estimatedMinutes}m
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer Progress Tracker */}
        <div className="p-3 border-t border-slate-800/90 bg-slate-950">
          <ProgressBar
            progress={progress}
            totalLessons={totalLessons}
            currentLang={currentLang}
          />
        </div>
      </aside>
    </>
  );
};
