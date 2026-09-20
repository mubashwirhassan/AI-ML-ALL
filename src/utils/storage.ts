import { Language, UserProgress } from '../types';

const STORAGE_KEYS = {
  LANGUAGE: 'mlpath_lang',
  THEME: 'mlpath_theme',
  PROGRESS: 'mlpath_progress',
};

export const getStoredLanguage = (): Language => {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.LANGUAGE);
    if (saved === 'en' || saved === 'bn') return saved;
  } catch {
    // fallback
  }
  return 'bn'; // Default language as requested: Bengali
};

export const setStoredLanguage = (lang: Language): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, lang);
  } catch (err) {
    console.error('Failed to save language preference', err);
  }
};

export const saveLanguage = setStoredLanguage;

export const getStoredTheme = (): 'dark' | 'light' => {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.THEME);
    if (saved === 'dark' || saved === 'light') return saved;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
  } catch {
    // fallback
  }
  return 'dark'; // modern dark developer theme default
};

export const setStoredTheme = (theme: 'dark' | 'light'): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  } catch (err) {
    console.error('Failed to save theme', err);
  }
};

export const getStoredProgress = (): UserProgress => {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.PROGRESS);
    if (saved) {
      const parsed = JSON.parse(saved);
      return {
        completedLessons: Array.isArray(parsed.completedLessons) ? parsed.completedLessons : [],
        bookmarkedLessons: Array.isArray(parsed.bookmarkedLessons) ? parsed.bookmarkedLessons : [],
        quizScores: parsed.quizScores || {},
        lastVisitedLessonId: parsed.lastVisitedLessonId || 'l0-what-is-ai',
        lastUpdated: parsed.lastUpdated || new Date().toISOString(),
      };
    }
  } catch (err) {
    console.error('Failed to read progress', err);
  }
  return {
    completedLessons: ['l0-what-is-ai', 'l0-what-is-ml'], // initial starter progress
    bookmarkedLessons: [],
    quizScores: {},
    lastVisitedLessonId: 'l0-what-is-ai',
    lastUpdated: new Date().toISOString(),
  };
};

export const getUserProgress = getStoredProgress;

export const saveProgress = (progress: UserProgress): void => {
  try {
    localStorage.setItem(STORAGE_KEYS.PROGRESS, JSON.stringify(progress));
  } catch (err) {
    console.error('Failed to save progress', err);
  }
};

export const saveUserProgress = saveProgress;

export const toggleLessonCompletion = (lessonId: string): UserProgress => {
  const current = getStoredProgress();
  const exists = current.completedLessons.includes(lessonId);
  const updatedCompleted = exists
    ? current.completedLessons.filter((id) => id !== lessonId)
    : [...current.completedLessons, lessonId];

  const updated: UserProgress = {
    ...current,
    completedLessons: updatedCompleted,
    lastUpdated: new Date().toISOString(),
  };
  saveProgress(updated);
  return updated;
};

export const toggleBookmark = (lessonId: string): UserProgress => {
  const current = getStoredProgress();
  const exists = current.bookmarkedLessons.includes(lessonId);
  const updatedBookmarks = exists
    ? current.bookmarkedLessons.filter((id) => id !== lessonId)
    : [...current.bookmarkedLessons, lessonId];

  const updated: UserProgress = {
    ...current,
    bookmarkedLessons: updatedBookmarks,
    lastUpdated: new Date().toISOString(),
  };
  saveProgress(updated);
  return updated;
};

export const recordQuizScore = (lessonId: string, scorePercent: number): UserProgress => {
  const current = getStoredProgress();
  const updated: UserProgress = {
    ...current,
    quizScores: {
      ...current.quizScores,
      [lessonId]: Math.max(current.quizScores[lessonId] || 0, scorePercent),
    },
    lastUpdated: new Date().toISOString(),
  };
  saveProgress(updated);
  return updated;
};
