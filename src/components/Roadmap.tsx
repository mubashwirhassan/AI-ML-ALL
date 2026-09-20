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
  ArrowRight,
  Flame,
  BookOpen,
  Check,
} from 'lucide-react';
import { Level, Language, UserProgress } from '../types';
import { CourseCard } from './CourseCard';

interface RoadmapProps {
  levels: Level[];
  progress: UserProgress;
  currentLang: Language;
  onSelectLevel: (levelId: number) => void;
  onSelectLesson: (lessonId: string) => void;
}

export const Roadmap: React.FC<RoadmapProps> = ({
  levels,
  progress,
  currentLang,
  onSelectLevel,
  onSelectLesson,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'beginner' | 'core' | 'advanced' | 'capstone'>('all');

  const filteredLevels = levels.filter((lvl) => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'beginner') return lvl.id <= 2;
    if (selectedFilter === 'core') return lvl.id >= 3 && lvl.id <= 5;
    if (selectedFilter === 'advanced') return lvl.id >= 6 && lvl.id <= 9;
    if (selectedFilter === 'capstone') return lvl.id === 10;
    return true;
  });

  const totalLessons = levels.reduce((acc, lvl) => acc + lvl.lessons.length, 0);
  const completedCount = progress.completedLessons.length;
  const overallPercentage = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 font-sans">
      {/* Hero Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 via-cyan-950/40 to-slate-900 border border-slate-800 p-6 sm:p-10 shadow-2xl mb-10">
        <div className="relative z-10 max-w-2xl">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-4">
            <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>
              {currentLang === 'bn'
                ? 'সম্পূর্ণ জিরো থেকে প্রোডাকশন রোডম্যাপ'
                : 'Zero to Production Machine Learning Roadmap'}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            {currentLang === 'bn'
              ? 'মেশিন লার্নিংয়ের প্রতিটি ধাপ সহজ ও স্বজ্ঞাতভাবে শিখুন'
              : 'Master Machine Learning from Ground Zero to Production'}
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            {currentLang === 'bn'
              ? 'কোনো পূর্ব অভিজ্ঞতার প্রয়োজন নেই। গণিত, প্রোগ্রামিং, অ্যালগরিদম, ডিপ লার্নিং এবং লাইভ ডিপ্লয়মেন্ট—সবকিছু পরিষ্কার বাংলা ও ইংরেজিতে সাজানো।'
              : 'Structured step-by-step curriculum: Intuitive analogies, essential math, hands-on Scikit-Learn code, deep learning, MLOps, and real-world industrial capstones.'}
          </p>

          <div className="mt-6 flex items-center space-x-4 flex-wrap gap-y-3">
            <div className="flex items-center space-x-2 text-xs text-slate-300">
              <span className="font-bold text-cyan-400 text-base">{levels.length}</span>
              <span>{currentLang === 'bn' ? 'টি পূর্ণাঙ্গ লেভেল' : 'Curriculum Levels'}</span>
            </div>
            <span className="text-slate-600">•</span>
            <div className="flex items-center space-x-2 text-xs text-slate-300">
              <span className="font-bold text-cyan-400 text-base">{totalLessons}</span>
              <span>{currentLang === 'bn' ? 'টি বিস্তারিত পাঠ' : 'Mastery Lessons'}</span>
            </div>
            <span className="text-slate-600">•</span>
            <div className="flex items-center space-x-2 text-xs text-slate-300">
              <span className="font-bold text-emerald-400 text-base">{overallPercentage}%</span>
              <span>{currentLang === 'bn' ? 'সম্পন্ন' : 'Completed'}</span>
            </div>
          </div>
        </div>

        {/* Decorative Grid Artwork */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-20 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none hidden md:block" />
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
        <div className="flex items-center space-x-1.5 p-1 rounded-2xl bg-slate-900 border border-slate-800">
          {[
            { id: 'all', en: 'All Levels (0-10)', bn: 'সকল লেভেল (০-১০)' },
            { id: 'beginner', en: 'Foundations (0-2)', bn: 'ভিত্তি (০-২)' },
            { id: 'core', en: 'Core ML (3-5)', bn: 'কোর এমএল (৩-৫)' },
            { id: 'advanced', en: 'Advanced (6-9)', bn: 'উন্নত (৬-৯)' },
            { id: 'capstone', en: 'Capstones (10)', bn: 'ক্যাপস্টোন (১০)' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedFilter(tab.id as any)}
              className={`px-3 py-1.5 text-xs font-semibold rounded-xl transition-all ${
                selectedFilter === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab[currentLang] || tab.en}
            </button>
          ))}
        </div>

        <span className="text-xs text-slate-500">
          {currentLang === 'bn'
            ? `${filteredLevels.length}টি লেভেল প্রদর্শিত হচ্ছে`
            : `Showing ${filteredLevels.length} levels`}
        </span>
      </div>

      {/* Levels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredLevels.map((level) => {
          const completedInLevel = level.lessons.filter((l) =>
            progress.completedLessons.includes(l.id)
          ).length;

          return (
            <CourseCard
              key={level.id}
              level={level}
              completedLessonsCount={completedInLevel}
              currentLang={currentLang}
              onSelectLevel={onSelectLevel}
            />
          );
        })}
      </div>
    </div>
  );
};
