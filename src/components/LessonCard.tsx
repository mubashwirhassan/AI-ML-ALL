import React from 'react';
import { CheckCircle2, Circle, Clock, ArrowRight, Bookmark, BookmarkCheck } from 'lucide-react';
import { Lesson, Language } from '../types';

interface LessonCardProps {
  lesson: Lesson;
  isCompleted: boolean;
  isBookmarked: boolean;
  currentLang: Language;
  onSelect: (lessonId: string) => void;
  onToggleBookmark: (lessonId: string, e: React.MouseEvent) => void;
}

export const LessonCard: React.FC<LessonCardProps> = ({
  lesson,
  isCompleted,
  isBookmarked,
  currentLang,
  onSelect,
  onToggleBookmark,
}) => {
  const getDifficultyColor = (diff: string) => {
    switch (diff) {
      case 'Absolute Beginner':
      case 'Beginner':
        return 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30';
      case 'Intermediate':
        return 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30';
      case 'Advanced':
        return 'text-purple-400 bg-purple-500/10 border-purple-500/30';
      case 'Expert':
        return 'text-rose-400 bg-rose-500/10 border-rose-500/30';
      default:
        return 'text-slate-400 bg-slate-800 border-slate-700';
    }
  };

  return (
    <div
      onClick={() => onSelect(lesson.id)}
      className={`group relative p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
        isCompleted
          ? 'bg-slate-900/60 border-slate-800 hover:border-emerald-500/50 hover:shadow-lg hover:shadow-emerald-950/20'
          : 'bg-slate-900/90 border-slate-800 hover:border-cyan-500/60 hover:shadow-xl hover:shadow-cyan-950/30'
      }`}
    >
      <div>
        {/* Top Badges & Bookmark */}
        <div className="flex items-center justify-between gap-2 mb-3">
          <div className="flex items-center space-x-2 flex-wrap gap-y-1">
            <span
              className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${getDifficultyColor(
                lesson.difficulty
              )}`}
            >
              {lesson.difficulty}
            </span>
            <span className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-slate-800 text-slate-400 border border-slate-700/60">
              {lesson.category}
            </span>
          </div>

          <button
            type="button"
            onClick={(e) => onToggleBookmark(lesson.id, e)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-slate-800 transition-colors"
            title={isBookmarked ? 'Remove Bookmark' : 'Bookmark Lesson'}
          >
            {isBookmarked ? (
              <BookmarkCheck className="w-4 h-4 text-amber-400 fill-amber-400/20" />
            ) : (
              <Bookmark className="w-4 h-4" />
            )}
          </button>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-base font-bold text-slate-100 group-hover:text-cyan-400 transition-colors leading-snug">
          {lesson.title[currentLang] || lesson.title.en}
        </h3>
        <p className="mt-1.5 text-xs text-slate-400 line-clamp-2 leading-relaxed">
          {lesson.subtitle[currentLang] || lesson.subtitle.en}
        </p>
      </div>

      {/* Footer Info */}
      <div className="mt-5 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-500">
        <div className="flex items-center space-x-1.5">
          <Clock className="w-3.5 h-3.5 text-slate-400" />
          <span>
            {lesson.estimatedMinutes} {currentLang === 'bn' ? 'মিনিট' : 'mins'}
          </span>
        </div>

        <div className="flex items-center space-x-1.5">
          {isCompleted ? (
            <div className="flex items-center space-x-1 text-emerald-400 font-semibold text-[11px]">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>{currentLang === 'bn' ? 'সম্পন্ন' : 'Completed'}</span>
            </div>
          ) : (
            <div className="flex items-center space-x-1 text-cyan-400 group-hover:translate-x-0.5 transition-transform font-medium">
              <span>{currentLang === 'bn' ? 'শুরু করুন' : 'Start'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
