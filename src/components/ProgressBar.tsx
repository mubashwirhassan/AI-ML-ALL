import React from 'react';
import { Award, CheckCircle, Flame, BookOpen } from 'lucide-react';
import { Language, UserProgress } from '../types';

interface ProgressBarProps {
  progress: UserProgress;
  totalLessons: number;
  currentLang: Language;
  compact?: boolean;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  totalLessons,
  currentLang,
  compact = false,
}) => {
  const completedCount = progress.completedLessons.length;
  const percentage = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  if (compact) {
    return (
      <div className="flex items-center space-x-3">
        <div className="w-24 sm:w-32 h-2 rounded-full bg-slate-800 overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
        <span className="text-xs font-semibold text-cyan-400">{percentage}%</span>
      </div>
    );
  }

  return (
    <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-md">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
            <BookOpen className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-300">
            {currentLang === 'bn' ? 'লার্নিং অগ্রগতি' : 'Curriculum Progress'}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-bold text-cyan-400">{percentage}%</span>
          <span className="text-xs text-slate-500">
            ({completedCount}/{totalLessons})
          </span>
        </div>
      </div>

      {/* Bar */}
      <div className="w-full h-2.5 rounded-full bg-slate-800 overflow-hidden p-0.5 border border-slate-700/50">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 rounded-full transition-all duration-700 shadow-sm shadow-cyan-500/50"
          style={{ width: `${Math.max(percentage, 2)}%` }}
        />
      </div>

      {/* Quick stats pills */}
      <div className="mt-3 flex items-center justify-between text-[11px] text-slate-400">
        <div className="flex items-center space-x-1">
          <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
          <span>
            {currentLang === 'bn' ? `${completedCount}টি সম্পন্ন` : `${completedCount} Completed`}
          </span>
        </div>
        <div className="flex items-center space-x-1">
          <Flame className="w-3.5 h-3.5 text-amber-400" />
          <span>
            {currentLang === 'bn' ? `${progress.streakDays} দিন স্ট্রিক` : `${progress.streakDays} Day Streak`}
          </span>
        </div>
        <div className="flex items-center space-x-1">
          <Award className="w-3.5 h-3.5 text-purple-400" />
          <span>
            {currentLang === 'bn' ? `লেভেল ${progress.currentLevelId}` : `Level ${progress.currentLevelId}`}
          </span>
        </div>
      </div>
    </div>
  );
};
