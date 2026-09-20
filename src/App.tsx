import React, { useState, useEffect } from 'react';
import { Bot, Sparkles, BookOpen, Layers, Heart, ArrowUp } from 'lucide-react';
import { Language, UserProgress } from './types';
import {
  getUserProgress,
  saveUserProgress,
  getStoredLanguage,
  saveLanguage,
  toggleLessonCompletion,
  toggleBookmark,
} from './utils/storage';
import {
  allLevels,
  allLessons,
  getLevelById,
  getLessonById,
  getAdjacentLessons,
} from './data/curriculum';

import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Roadmap } from './components/Roadmap';
import { LevelOverview } from './components/LevelOverview';
import { LessonContent } from './components/LessonContent';
import { BookmarksView } from './components/BookmarksView';
import { Search } from './components/Search';
import { Chatbot } from './components/Chatbot';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>('bn');
  const [progress, setProgress] = useState<UserProgress>({
    completedLessons: [],
    bookmarkedLessons: [],
    quizScores: {},
    currentLevelId: 0,
    currentLessonId: 'l0-what-is-programming',
    streakDays: 1,
    lastActiveDate: new Date().toISOString(),
    lastUpdated: new Date().toISOString(),
  });

  const [currentView, setCurrentView] = useState<'roadmap' | 'level' | 'lesson' | 'bookmarks'>('roadmap');
  const [activeLevelId, setActiveLevelId] = useState<number | null>(0);
  const [activeLessonId, setActiveLessonId] = useState<string | null>('l0-what-is-programming');

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Load initial settings & progress
  useEffect(() => {
    const savedLang = getStoredLanguage();
    if (savedLang) setCurrentLang(savedLang);

    const savedProgress = getUserProgress();
    setProgress(savedProgress);

    // Track scroll for "Scroll to Top" button
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard shortcut listeners (Cmd+K / Ctrl+K for search)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen((prev) => !prev);
      }
      if ((e.ctrlKey || e.metaKey) && e.key === 'b') {
        e.preventDefault();
        setIsSidebarOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, activeLessonId, activeLevelId]);

  const handleToggleLanguage = (newLang: Language) => {
    setCurrentLang(newLang);
    saveLanguage(newLang);
  };

  const handleSelectLevel = (levelId: number) => {
    setActiveLevelId(levelId);
    setCurrentView('level');
  };

  const handleSelectLesson = (lessonId: string) => {
    const lesson = getLessonById(lessonId);
    if (lesson) {
      setActiveLessonId(lessonId);
      setActiveLevelId(lesson.levelId);
      setCurrentView('lesson');

      // Update current in progress
      const updated = {
        ...progress,
        currentLessonId: lessonId,
        currentLevelId: lesson.levelId,
      };
      setProgress(updated);
      saveUserProgress(updated);
    }
  };

  const handleToggleComplete = (lessonId: string) => {
    const updated = toggleLessonCompletion(lessonId);
    setProgress(updated);
  };

  const handleToggleBookmark = (lessonId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    const updated = toggleBookmark(lessonId);
    setProgress(updated);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Resolve current active lesson and level
  const currentLesson = activeLessonId ? getLessonById(activeLessonId) : undefined;
  const currentLevel = activeLevelId !== null ? getLevelById(activeLevelId) : undefined;
  const { prevLesson, nextLesson } = activeLessonId
    ? getAdjacentLessons(activeLessonId)
    : {};

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-900 selection:text-cyan-100">
      {/* Top Navigation */}
      <Navbar
        currentLang={currentLang}
        onToggleLanguage={handleToggleLanguage}
        onOpenSidebar={() => setIsSidebarOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
        onToggleChatbot={() => setIsChatbotOpen(!isChatbotOpen)}
        onNavigateHome={() => setCurrentView('roadmap')}
        onNavigateBookmarks={() => setCurrentView('bookmarks')}
        progress={progress}
        totalLessons={allLessons.length}
      />

      {/* Main Container Layout */}
      <div className="flex-1 flex">
        {/* Collapsible Left Sidebar */}
        <Sidebar
          levels={allLevels}
          activeLevelId={activeLevelId}
          activeLessonId={activeLessonId}
          currentLang={currentLang}
          progress={progress}
          totalLessons={allLessons.length}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          onSelectLevel={handleSelectLevel}
          onSelectLesson={handleSelectLesson}
          onSelectView={(view) => setCurrentView(view)}
          currentView={currentView}
        />

        {/* Content Body Area (with padding offset for sidebar on lg screens) */}
        <main className="flex-1 lg:pl-72 sm:lg:pl-80 flex flex-col justify-between">
          <div className="py-2">
            {/* View 1: Full Visual Roadmap */}
            {currentView === 'roadmap' && (
              <Roadmap
                levels={allLevels}
                progress={progress}
                currentLang={currentLang}
                onSelectLevel={handleSelectLevel}
                onSelectLesson={handleSelectLesson}
              />
            )}

            {/* View 2: Level Overview & Lessons */}
            {currentView === 'level' && currentLevel && (
              <LevelOverview
                level={currentLevel}
                currentLang={currentLang}
                progress={progress}
                onSelectLesson={handleSelectLesson}
                onToggleBookmark={handleToggleBookmark}
                onBackToRoadmap={() => setCurrentView('roadmap')}
              />
            )}

            {/* View 3: In-Depth Lesson Content */}
            {currentView === 'lesson' && currentLesson && currentLevel && (
              <LessonContent
                lesson={currentLesson}
                level={currentLevel}
                currentLang={currentLang}
                isCompleted={progress.completedLessons.includes(currentLesson.id)}
                isBookmarked={progress.bookmarkedLessons.includes(currentLesson.id)}
                onToggleComplete={handleToggleComplete}
                onToggleBookmark={handleToggleBookmark}
                onNavigateLesson={handleSelectLesson}
                onBackToLevel={() => setCurrentView('level')}
                prevLesson={prevLesson}
                nextLesson={nextLesson}
              />
            )}

            {/* View 4: Saved Bookmarks */}
            {currentView === 'bookmarks' && (
              <BookmarksView
                allLessons={allLessons}
                levels={allLevels}
                progress={progress}
                currentLang={currentLang}
                onSelectLesson={handleSelectLesson}
                onToggleBookmark={handleToggleBookmark}
                onBackToRoadmap={() => setCurrentView('roadmap')}
              />
            )}
          </div>

          {/* Footer */}
          <footer className="mt-16 border-t border-slate-800/80 bg-slate-950/80 py-8 px-6 text-xs text-slate-500">
            <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 rounded-md bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-mono font-bold text-[10px]">
                  ML
                </div>
                <span className="font-semibold text-slate-400">ML Path</span>
                <span>•</span>
                <span>
                  {currentLang === 'bn'
                    ? 'মেশিন লার্নিং সহজ ও আনন্দদায়ক করার উন্মুক্ত প্ল্যাটফর্ম'
                    : 'The Open Modern Machine Learning Learning Platform'}
                </span>
              </div>

              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setCurrentView('roadmap')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {currentLang === 'bn' ? 'রোডম্যাপ' : 'Roadmap'}
                </button>
                <button
                  onClick={() => setCurrentView('bookmarks')}
                  className="hover:text-cyan-400 transition-colors"
                >
                  {currentLang === 'bn' ? 'বুকমার্কসমূহ' : 'Bookmarks'}
                </button>
                <button
                  onClick={() => setIsChatbotOpen(true)}
                  className="hover:text-cyan-400 transition-colors text-cyan-400 font-medium"
                >
                  {currentLang === 'bn' ? 'AI মেন্টর' : 'AI Mentor'}
                </button>
              </div>
            </div>
          </footer>
        </main>
      </div>

      {/* Floating AI Mentor Launcher Button */}
      {!isChatbotOpen && (
        <button
          type="button"
          onClick={() => setIsChatbotOpen(true)}
          className="fixed bottom-6 right-6 z-40 p-4 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-2xl shadow-cyan-500/30 hover:scale-110 active:scale-95 transition-all flex items-center space-x-2.5 group"
          title="Open ML Path AI Mentor"
        >
          <Bot className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          <span className="text-xs font-bold hidden sm:inline">
            {currentLang === 'bn' ? 'AI শিক্ষক' : 'AI Mentor'}
          </span>
          <span className="absolute -top-1 -right-1 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500" />
          </span>
        </button>
      )}

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          type="button"
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 p-3 rounded-2xl bg-slate-900/90 border border-slate-700/80 text-slate-300 shadow-xl hover:text-white hover:border-cyan-500 transition-all"
          title="Scroll to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}

      {/* Global Search Modal */}
      <Search
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        levels={allLevels}
        allLessons={allLessons}
        currentLang={currentLang}
        onSelectLesson={handleSelectLesson}
      />

      {/* Interactive AI Mentor Chatbot Panel */}
      <Chatbot
        isOpen={isChatbotOpen}
        onClose={() => setIsChatbotOpen(false)}
        currentLang={currentLang}
        onSelectLesson={handleSelectLesson}
      />
    </div>
  );
}
