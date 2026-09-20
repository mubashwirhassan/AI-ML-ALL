export type Language = 'bn' | 'en';

export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export interface QuizQuestion {
  id: string;
  question: {
    en: string;
    bn: string;
  };
  type: 'multiple_choice' | 'true_false' | 'code_output' | 'conceptual';
  codeSnippet?: string;
  options: {
    id: string;
    en: string;
    bn: string;
  }[];
  correctAnswerId: string;
  explanation: {
    en: string;
    bn: string;
  };
}

export interface Lesson {
  id: string;
  levelId: number;
  slug: string;
  title: {
    en: string;
    bn: string;
  };
  subtitle: {
    en: string;
    bn: string;
  };
  difficulty: Difficulty;
  estimatedMinutes: number;
  category: string;
  prerequisites?: {
    lessonId: string;
    title: {
      en: string;
      bn: string;
    };
  }[];
  whatIsIt: {
    en: string;
    bn: string;
  };
  analogy: {
    en: string;
    bn: string;
  };
  whyItMatters: {
    en: string;
    bn: string;
  };
  howItWorks: {
    en: string;
    bn: string;
  };
  formula?: {
    expression: string;
    parts: {
      symbol: string;
      meaning: {
        en: string;
        bn: string;
      };
    }[];
  };
  practicalApplication: {
    en: string;
    bn: string;
  };
  whenToUse?: {
    en: string[];
    bn: string[];
  };
  whenNotToUse?: {
    en: string[];
    bn: string[];
  };
  advantages?: {
    en: string[];
    bn: string[];
  };
  limitations?: {
    en: string[];
    bn: string[];
  };
  importantParameters?: {
    name: string;
    description: {
      en: string;
      bn: string;
    };
    recommendedValue?: string;
  }[];
  codeExample?: {
    title: string;
    code: string;
    language: string;
    expectedOutput?: string;
    explanation: {
      en: string[];
      bn: string[];
    };
  };
  visualExplanation?: {
    type: 'diagram' | 'chart' | 'steps' | 'matrix' | 'interactive';
    caption: {
      en: string;
      bn: string;
    };
    steps?: {
      step: number;
      title: { en: string; bn: string };
      desc: { en: string; bn: string };
    }[];
  };
  commonMistakes: {
    mistake: { en: string; bn: string };
    solution: { en: string; bn: string };
  }[];
  practiceTask: {
    title: { en: string; bn: string };
    instructions: { en: string; bn: string };
    starterCode?: string;
    hint: { en: string; bn: string };
    solutionCode?: string;
  };
  quiz?: QuizQuestion[];
  nextLessonId?: string;
  previousLessonId?: string;
}

export interface Level {
  id: number;
  slug: string;
  title: {
    en: string;
    bn: string;
  };
  subtitle: {
    en: string;
    bn: string;
  };
  description: {
    en: string;
    bn: string;
  };
  iconName: string;
  color: string;
  badge: string;
  lessons: Lesson[];
}

export interface ProjectRequirement {
  en: string;
  bn: string;
}

export interface RealWorldProject {
  id: string;
  level: Difficulty;
  title: {
    en: string;
    bn: string;
  };
  category: string;
  description: {
    en: string;
    bn: string;
  };
  problemStatement: {
    en: string;
    bn: string;
  };
  dataset: {
    name: string;
    description: { en: string; bn: string };
    source: string;
    features: string[];
    target: string;
  };
  requirements: ProjectRequirement[];
  steps: {
    phase: string;
    title: { en: string; bn: string };
    tasks: { en: string[]; bn: string[] };
  }[];
  codeSnippet: string;
  evaluationMetrics: string[];
  errorAnalysisNotes: {
    en: string;
    bn: string;
  };
  deploymentStrategy: {
    en: string;
    bn: string;
  };
  repoStructure: string;
  readmeTemplate: string;
}

export interface KnowledgeBaseEntry {
  id: string;
  topic: string;
  keywords: string[];
  questionPatterns: string[];
  shortAnswer: {
    en: string;
    bn: string;
  };
  detailedAnswer: {
    en: string;
    bn: string;
  };
  example: {
    en: string;
    bn: string;
  };
  relatedTopics: string[];
  recommendedLessonId: string;
}

export interface ChatMessage {
  id: string;
  sender: 'user' | 'assistant';
  content: string;
  timestamp: string;
  isHint?: boolean;
  recommendedLesson?: {
    id: string;
    title: string;
  };
  relatedTopics?: string[];
}

export interface AIMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  relatedLessons?: string[];
}

export interface UserProgress {
  completedLessons: string[];
  bookmarkedLessons: string[];
  quizScores: Record<string, number>;
  lastVisitedLessonId?: string;
  lastUpdated: string;
  currentLevelId?: number;
  currentLessonId?: string;
  streakDays?: number;
  lastActiveDate?: string;
}

