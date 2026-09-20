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
  ChevronRight,
} from 'lucide-react';
import { Level, Language } from '../types';

interface CourseCardProps {
  level: Level;
  completedLessonsCount: number;
  currentLang: Language;
  onSelectLevel: (levelId: number) => void;
}

export const CourseCard: React.FC<CourseCardProps> = ({
  level,
  completedLessonsCount,
  currentLang,
  onSelectLevel,
}) => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Compass':
        return <Compass className="w-6 h-6" />;
      case 'Code':
        return <Code className="w-6 h-6" />;
      case 'Activity':
        return <Activity className="w-6 h-6" />;
      case 'BarChart3':
        return <BarChart3 className="w-6 h-6" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-6 h-6" />;
      case 'Zap':
        return <Zap className="w-6 h-6" />;
      case 'Network':
        return <Network className="w-6 h-6" />;
      case 'Sparkle':
        return <Sparkle className="w-6 h-6" />;
      case 'Server':
        return <Server className="w-6 h-6" />;
      case 'Award':
        return <Award className="w-6 h-6" />;
      default:
        return <Cpu className="w-6 h-6" />;
    }
  };

  const totalLessons = level.lessons.length;
  const progressPercent = totalLessons > 0 ? Math.round((completedLessonsCount / totalLessons) * 100) : 0;
  const isFullyCompleted = totalLessons > 0 && completedLessonsCount >= totalLessons;

  return (
    <div
      onClick={() => onSelectLevel(level.id)}
      className="group relative p-6 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-950/20 transition-all cursor-pointer flex flex-col justify-between overflow-hidden"
    >
      {/* Background Subtle Gradient Glow */}
      <div
        className={`absolute top-0 right-0 w-36 h-36 bg-gradient-to-br ${level.color} opacity-5 blur-2xl group-hover:opacity-15 transition-opacity pointer-events-none`}
      />

      <div>
        {/* Header with Icon and Badge */}
        <div className="flex items-center justify-between mb-4">
          <div
            className={`p-3 rounded-xl bg-gradient-to-br ${level.color} text-white shadow-md shadow-cyan-950/40`}
          >
            {getIcon(level.iconName)}
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
              Level {level.id}
            </span>
            <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
              {level.badge}
            </span>
          </div>
        </div>

        {/* Title & Subtitle */}
        <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-400 transition-colors leading-snug">
          {level.title[currentLang] || level.title.en}
        </h3>
        <p className="mt-1 text-xs font-medium text-cyan-300/80">
          {level.subtitle[currentLang] || level.subtitle.en}
        </p>
        <p className="mt-2 text-xs text-slate-400 line-clamp-3 leading-relaxed">
          {level.description[currentLang] || level.description.en}
        </p>
      </div>

      {/* Progress & Bottom CTA */}
      <div className="mt-6 pt-4 border-t border-slate-800/80">
        <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
          <span>
            {currentLang === 'bn'
              ? `${completedLessonsCount}/${totalLessons}টি পাঠ সম্পন্ন`
              : `${completedLessonsCount} of ${totalLessons} Lessons`}
          </span>
          <span className="font-semibold text-slate-300">{progressPercent}%</span>
        </div>

        <div className="w-full h-2 rounded-full bg-slate-800 overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${level.color} rounded-full transition-all duration-500`}
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs font-medium text-slate-400 group-hover:text-slate-200 transition-colors">
            {isFullyCompleted
              ? currentLang === 'bn'
                ? '✅ লেভেল সমাপ্ত'
                : '✅ Level Mastered'
              : currentLang === 'bn'
              ? 'লেভেলটি এক্সপ্লোর করুন'
              : 'Explore Curriculum'}
          </span>
          <div className="p-1.5 rounded-lg bg-slate-800 group-hover:bg-cyan-500 group-hover:text-slate-950 text-slate-300 transition-all">
            <ChevronRight className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
