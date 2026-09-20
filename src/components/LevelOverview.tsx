import React from 'react';
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
  ArrowLeft,
  Play,
  Check,
} from 'lucide-react';
import { Level, Language, UserProgress } from '../types';
import { LessonCard } from './LessonCard';

interface LevelOverviewProps {
  level: Level;
  currentLang: Language;
  progress: UserProgress;
  onSelectLesson: (lessonId: string) => void;
  onToggleBookmark: (lessonId: string, e: React.MouseEvent) => void;
  onBackToRoadmap: () => void;
}

export const LevelOverview: React.FC<LevelOverviewProps> = ({
  level,
  currentLang,
  progress,
  onSelectLesson,
  onToggleBookmark,
  onBackToRoadmap,
}) => {
  const getLevelIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-8 h-8" />;
      case 'Code':
        return <Code className="w-8 h-8" />;
      case 'Activity':
        return <Activity className="w-8 h-8" />;
      case 'BarChart3':
        return <BarChart3 className="w-8 h-8" />;
      case 'Cpu':
        return <Cpu className="w-8 h-8" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-8 h-8" />;
      case 'Zap':
        return <Zap className="w-8 h-8" />;
      case 'Network':
        return <Network className="w-8 h-8" />;
      case 'Sparkle':
        return <Sparkle className="w-8 h-8" />;
      case 'Server':
        return <Server className="w-8 h-8" />;
      case 'Award':
        return <Award className="w-8 h-8" />;
      default:
        return <Cpu className="w-8 h-8" />;
    }
  };

  const completedInLevel = level.lessons.filter((l) =>
    progress.completedLessons.includes(l.id)
  ).length;
  const totalLessons = level.lessons.length;
  const percentage = totalLessons > 0 ? Math.round((completedInLevel / totalLessons) * 100) : 0;
  const firstUnfinishedLesson =
    level.lessons.find((l) => !progress.completedLessons.includes(l.id)) || level.lessons[0];

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 font-sans">
      {/* Top back button */}
      <button
        onClick={onBackToRoadmap}
        className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors mb-6 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>{currentLang === 'bn' ? 'সম্পূর্ণ রোডম্যাপে ফিরে যান' : 'Back to Full Roadmap'}</span>
      </button>

      {/* Level Header Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-8 shadow-xl mb-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex items-start space-x-4">
            <div
              className={`p-4 rounded-2xl bg-gradient-to-br ${level.color} text-white shadow-lg shadow-cyan-950/50 shrink-0`}
            >
              {getLevelIcon(level.iconName)}
            </div>
            <div>
              <div className="flex items-center space-x-2 mb-1.5 flex-wrap gap-y-1">
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-800 text-cyan-400 border border-slate-700">
                  Level {level.id}
                </span>
                <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {level.badge}
                </span>
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-100 tracking-tight">
                {level.title[currentLang] || level.title.en}
              </h1>
              <p className="mt-1 text-sm text-cyan-300/80 font-medium">
                {level.subtitle[currentLang] || level.subtitle.en}
              </p>
              <p className="mt-3 text-xs sm:text-sm text-slate-400 max-w-2xl leading-relaxed">
                {level.description[currentLang] || level.description.en}
              </p>
            </div>
          </div>

          {/* Start / Continue Button */}
          {firstUnfinishedLesson && (
            <button
              onClick={() => onSelectLesson(firstUnfinishedLesson.id)}
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-xs sm:text-sm shadow-lg shadow-cyan-500/20 hover:scale-105 active:scale-95 transition-all flex items-center space-x-2 shrink-0 self-stretch sm:self-auto justify-center"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>
                {completedInLevel > 0
                  ? currentLang === 'bn'
                    ? 'পড়া চালিয়ে যান'
                    : 'Continue Learning'
                  : currentLang === 'bn'
                  ? 'লেভেল শুরু করুন'
                  : 'Start Level'}
              </span>
            </button>
          )}
        </div>

        {/* Progress Bar inside banner */}
        <div className="mt-6 pt-6 border-t border-slate-800/80">
          <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
            <span>
              {currentLang === 'bn'
                ? `অগ্রগতি: ${completedInLevel} / ${totalLessons}টি পাঠ সম্পন্ন`
                : `Progress: ${completedInLevel} of ${totalLessons} lessons completed`}
            </span>
            <span className="font-semibold text-cyan-400">{percentage}%</span>
          </div>
          <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
            <div
              className={`h-full bg-gradient-to-r ${level.color} rounded-full transition-all duration-500`}
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>
      </div>

      {/* Lessons List Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-slate-200">
          {currentLang === 'bn' ? 'এই লেভেলের পাঠসমূহ' : 'Curriculum Lessons'}
        </h2>
        <span className="text-xs text-slate-500">
          {totalLessons} {currentLang === 'bn' ? 'টি পাঠ' : 'Lessons'}
        </span>
      </div>

      {/* Lesson Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {level.lessons.map((lesson) => {
          const isCompleted = progress.completedLessons.includes(lesson.id);
          const isBookmarked = progress.bookmarkedLessons.includes(lesson.id);

          return (
            <LessonCard
              key={lesson.id}
              lesson={lesson}
              isCompleted={isCompleted}
              isBookmarked={isBookmarked}
              currentLang={currentLang}
              onSelect={onSelectLesson}
              onToggleBookmark={onToggleBookmark}
            />
          );
        })}
      </div>
    </div>
  );
};
