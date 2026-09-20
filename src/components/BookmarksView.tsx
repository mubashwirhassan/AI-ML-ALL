import React from 'react';
import { Bookmark, ArrowLeft, BookOpen } from 'lucide-react';
import { Lesson, Level, Language, UserProgress } from '../types';
import { LessonCard } from './LessonCard';

interface BookmarksViewProps {
  allLessons: Lesson[];
  levels: Level[];
  progress: UserProgress;
  currentLang: Language;
  onSelectLesson: (lessonId: string) => void;
  onToggleBookmark: (lessonId: string, e: React.MouseEvent) => void;
  onBackToRoadmap: () => void;
}

export const BookmarksView: React.FC<BookmarksViewProps> = ({
  allLessons,
  levels,
  progress,
  currentLang,
  onSelectLesson,
  onToggleBookmark,
  onBackToRoadmap,
}) => {
  const bookmarkedLessons = allLessons.filter((l) =>
    progress.bookmarkedLessons.includes(l.id)
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 font-sans">
      <button
        onClick={onBackToRoadmap}
        className="inline-flex items-center space-x-2 text-xs font-semibold text-slate-400 hover:text-cyan-400 transition-colors mb-6 group"
      >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
        <span>{currentLang === 'bn' ? 'সম্পূর্ণ রোডম্যাপে ফিরে যান' : 'Back to Roadmap'}</span>
      </button>

      <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-800">
        <div className="flex items-center space-x-3">
          <div className="p-3 rounded-2xl bg-amber-500/10 text-amber-400 border border-amber-500/20">
            <Bookmark className="w-6 h-6 fill-amber-500/20" />
          </div>
          <div>
            <h1 className="text-2xl font-extrabold text-slate-100">
              {currentLang === 'bn' ? 'সংরক্ষিত পাঠসমূহ (Bookmarks)' : 'Saved Bookmarks'}
            </h1>
            <p className="text-xs text-slate-400">
              {currentLang === 'bn'
                ? `আপনার বুকমার্ক করা মোট ${bookmarkedLessons.length}টি পাঠ`
                : `${bookmarkedLessons.length} lessons saved for quick review`}
            </p>
          </div>
        </div>
      </div>

      {bookmarkedLessons.length === 0 ? (
        <div className="p-12 text-center rounded-3xl bg-slate-900/60 border border-slate-800">
          <BookOpen className="w-12 h-12 mx-auto text-slate-600 mb-3" />
          <h3 className="text-base font-bold text-slate-300">
            {currentLang === 'bn' ? 'কোনো বুকমার্ক সংরক্ষিত নেই' : 'No Bookmarks Saved Yet'}
          </h3>
          <p className="text-xs text-slate-500 max-w-sm mx-auto mt-1">
            {currentLang === 'bn'
              ? 'যেকোনো পাঠ পড়ার সময় বুকমার্ক আইকনে ক্লিক করে পরবর্তীতে দ্রুত পড়ার জন্য এখানে সংরক্ষণ করতে পারেন।'
              : 'Click the bookmark icon on any lesson card or header to save it here for fast revision.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {bookmarkedLessons.map((lesson) => {
            const isCompleted = progress.completedLessons.includes(lesson.id);

            return (
              <LessonCard
                key={lesson.id}
                lesson={lesson}
                isCompleted={isCompleted}
                isBookmarked={true}
                currentLang={currentLang}
                onSelect={onSelectLesson}
                onToggleBookmark={onToggleBookmark}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};
