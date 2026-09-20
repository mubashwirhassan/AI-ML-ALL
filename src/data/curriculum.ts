import { Level, Lesson } from '../types';
import { level0 } from './levels/level0';
import { level1 } from './levels/level1';
import { level2 } from './levels/level2';
import { level3 } from './levels/level3';
import { level4 } from './levels/level4';
import { level5 } from './levels/level5';
import { level6 } from './levels/level6';
import { level7 } from './levels/level7';
import { level8 } from './levels/level8';
import { level9 } from './levels/level9';
import { level10 } from './levels/level10';

export const allLevels: Level[] = [
  level0,
  level1,
  level2,
  level3,
  level4,
  level5,
  level6,
  level7,
  level8,
  level9,
  level10,
];

export const allLessons: Lesson[] = allLevels.flatMap((lvl) => lvl.lessons);

export function getLevelById(id: number): Level | undefined {
  return allLevels.find((lvl) => lvl.id === id);
}

export function getLessonById(id: string): Lesson | undefined {
  return allLessons.find((l) => l.id === id);
}

export function getLessonBySlug(slug: string): Lesson | undefined {
  return allLessons.find((l) => l.slug === slug);
}

export function getAdjacentLessons(lessonId: string): {
  prevLesson?: Lesson;
  nextLesson?: Lesson;
  currentLevel?: Level;
} {
  const currentIndex = allLessons.findIndex((l) => l.id === lessonId);
  if (currentIndex === -1) return {};

  const currentLesson = allLessons[currentIndex];
  const currentLevel = allLevels.find((lvl) => lvl.id === currentLesson.levelId);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : undefined;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : undefined;

  return { prevLesson, nextLesson, currentLevel };
}
