import knowledgeBaseData from '../data/knowledgeBase.json';
import { KnowledgeBaseEntry, Language } from '../types';

export type ServiceMode = 'demo' | 'ai';

export interface ServiceStatus {
  mode: ServiceMode;
  statusLabel: string;
  description: string;
  hasServerKey: boolean;
}

export interface MentorAnswer {
  text: string;
  isHint?: boolean;
  recommendedLesson?: {
    id: string;
    title: string;
  };
  relatedTopics?: string[];
  codeExplanation?: string[];
}

class AIService {
  private knowledgeBase: KnowledgeBaseEntry[] = knowledgeBaseData as KnowledgeBaseEntry[];
  private currentMode: ServiceMode = 'demo';
  private hasCheckedBackend = false;
  private hasServerKey = false;

  constructor() {
    // Check backend connection in background if available
    this.checkStatus();
  }

  public async checkStatus(): Promise<ServiceStatus> {
    if (this.hasCheckedBackend) {
      return this.getStatus();
    }

    try {
      // Optional check to backend endpoint
      const res = await fetch('/api/ai-status', {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.ok) {
        const data = await res.json();
        if (data.hasApiKey) {
          this.currentMode = 'ai';
          this.hasServerKey = true;
        } else {
          this.currentMode = 'demo';
          this.hasServerKey = false;
        }
      } else {
        this.currentMode = 'demo';
        this.hasServerKey = false;
      }
    } catch {
      // If no backend is present, safely use Demo Mode
      this.currentMode = 'demo';
      this.hasServerKey = false;
    } finally {
      this.hasCheckedBackend = true;
    }

    return this.getStatus();
  }

  public getStatus(): ServiceStatus {
    if (this.currentMode === 'ai' && this.hasServerKey) {
      return {
        mode: 'ai',
        statusLabel: 'AI Mode — Connected',
        description: 'Powered by Gemini AI through secure server route',
        hasServerKey: true,
      };
    }
    return {
      mode: 'demo',
      statusLabel: 'Demo Mode — Local ML Knowledge Base',
      description: 'Instant local answers with zero API key requirement',
      hasServerKey: false,
    };
  }

  public setMode(mode: ServiceMode) {
    this.currentMode = mode;
  }

  /**
   * Main query entry point for ML Mentor
   */
  public async askMentor(
    userQuery: string,
    lang: Language = 'bn',
    contextLessonId?: string
  ): Promise<MentorAnswer> {
    // If AI Mode is active and server is available, attempt server API
    if (this.currentMode === 'ai' && this.hasServerKey) {
      try {
        const aiAnswer = await this.queryServerAI(userQuery, lang, contextLessonId);
        if (aiAnswer) {
          return aiAnswer;
        }
      } catch (err) {
        console.warn('AI mode request failed, falling back to local knowledge base:', err);
      }
    }

    // Default & Guaranteed: Intelligent Demo Mode using structured knowledge base
    return this.queryLocalKnowledgeBase(userQuery, lang, contextLessonId);
  }

  /**
   * Query the server-side API (keeps API keys completely safe on server)
   */
  private async queryServerAI(
    userQuery: string,
    lang: Language,
    contextLessonId?: string
  ): Promise<MentorAnswer | null> {
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: userQuery,
          language: lang,
          lessonId: contextLessonId,
        }),
      });

      if (!response.ok) return null;
      const data = await response.json();
      return {
        text: data.reply,
        recommendedLesson: data.recommendedLesson,
        relatedTopics: data.relatedTopics,
      };
    } catch {
      return null;
    }
  }

  /**
   * Demo Mode: Matches user queries to local knowledge base with ranking
   */
  private queryLocalKnowledgeBase(
    rawQuery: string,
    lang: Language,
    _contextLessonId?: string
  ): MentorAnswer {
    const query = rawQuery.toLowerCase().trim();

    // Check for greeting or introductory question
    if (
      query.match(/^(hi|hello|hey|সালাম|নমস্কার|হ্যালো|কেমন আছেন|help|সাহায্য)/) &&
      query.length < 25
    ) {
      if (lang === 'bn') {
        return {
          text: `নমস্কার! আমি আপনার **ML Mentor**। মেশিন লার্নিং, পাইথন, পরিসংখ্যান বা মডেল সম্পর্কিত যেকোনো প্রশ্ন আমাকে করতে পারেন।\n\nউদাহরণ:\n- *"Overfitting কি এবং কিভাবে দূর করব?"*\n- *"Linear vs Logistic Regression এর পার্থক্য কী?"*\n- *"Gradient Descent কিভাবে কাজ করে?"*\n- *"Precision vs Recall কোনটি কখন দরকার?"*`,
          relatedTopics: ['What is Machine Learning?', 'Supervised Learning', 'Linear Regression'],
        };
      } else {
        return {
          text: `Hello! I am your **ML Mentor**. Ask me anything about Machine Learning algorithms, Python code, statistics, or real-world projects.\n\nTry asking:\n- *"What is Overfitting and how do I fix it?"*\n- *"Difference between Linear and Logistic Regression?"*\n- *"How does Gradient Descent work?"*\n- *"When to prioritize Precision over Recall?"*`,
          relatedTopics: ['What is Machine Learning?', 'Supervised Learning', 'Linear Regression'],
        };
      }
    }

    // Check if user is asking for an exercise hint or code explanation
    const isAskingHint = query.includes('hint') || query.includes('ইঙ্গিত') || query.includes('ক্লু');
    const isAskingCode = query.includes('code') || query.includes('কোড') || query.includes('syntax') || query.includes('error');

    // Score entries
    let bestMatch: KnowledgeBaseEntry | null = null;
    let highestScore = 0;

    for (const entry of this.knowledgeBase) {
      let score = 0;

      // Check pattern match
      for (const pattern of entry.questionPatterns) {
        if (query.includes(pattern.toLowerCase())) {
          score += 15;
        }
      }

      // Check topic name
      if (query.includes(entry.topic.toLowerCase())) {
        score += 10;
      }

      // Check keywords
      for (const kw of entry.keywords) {
        const lowerKw = kw.toLowerCase();
        if (query.includes(lowerKw)) {
          score += 4;
        }
      }

      if (score > highestScore) {
        highestScore = score;
        bestMatch = entry;
      }
    }

    // If a good match is found
    if (bestMatch && highestScore >= 4) {
      const shortAns = lang === 'bn' ? bestMatch.shortAnswer.bn : bestMatch.shortAnswer.en;
      const detailAns = lang === 'bn' ? bestMatch.detailedAnswer.bn : bestMatch.detailedAnswer.en;
      const eg = lang === 'bn' ? bestMatch.example.bn : bestMatch.example.en;

      let responseText = `### **${bestMatch.topic}**\n\n${shortAns}\n\n**${
        lang === 'bn' ? 'বিস্তারিত ব্যাখ্যা:' : 'Detailed Explanation:'
      }**\n${detailAns}\n\n**${
        lang === 'bn' ? 'বাস্তব উদাহরণ (Real-world Example):' : 'Real-world Example:'
      }**\n💡 ${eg}`;

      if (isAskingHint) {
        responseText = `💡 **${lang === 'bn' ? 'ইঙ্গিত (Hint):' : 'Hint:'}** ${shortAns}\n\n*${
          lang === 'bn'
            ? 'টিপস: ডেটাসেটে আগে মিসিং ভ্যালু এবং ডুপ্লিকেট চেক করেছেন কি? ট্রেন/টেস্ট স্প্লিট করার পরই কেবল প্রিপ্রসেসর ফিট করুন।'
            : 'Tip: Did you check for missing values first? Always fit your scalers ONLY on the train split to prevent data leakage!'
        }*`;
      }

      return {
        text: responseText,
        isHint: isAskingHint,
        recommendedLesson: {
          id: bestMatch.recommendedLessonId,
          title: bestMatch.topic,
        },
        relatedTopics: bestMatch.relatedTopics,
      };
    }

    // Fallback response for unmatched query
    if (lang === 'bn') {
      return {
        text: `আপনার প্রশ্নটির জন্য আমি নির্দিষ্ট এন্ট্রি খুঁজছি। আপনি কি নিচের কোনো একটি বিষয় সম্পর্কে জানতে চাচ্ছেন?\n\n- **Supervised vs Unsupervised Learning**\n- **Overfitting & Underfitting**\n- **Linear Regression ও Loss Function**\n- **Confusion Matrix, Precision ও Recall**\n- **Neural Networks ও Gradient Descent**\n\nআপনার প্রশ্নটি একটু নির্দিষ্ট করে লিখলে আমি আরও নিখুঁতভাবে ব্যাখ্যা করতে পারব!`,
        relatedTopics: ['Linear Regression', 'Overfitting', 'Neural Networks', 'Confusion Matrix'],
      };
    } else {
      return {
        text: `I could not find an exact match for your specific phrasing in the local knowledge base. Would you like to explore one of these fundamental topics?\n\n- **Supervised vs Unsupervised Learning**\n- **Overfitting & Underfitting**\n- **Linear Regression & Loss Functions**\n- **Confusion Matrix, Precision & Recall**\n- **Neural Networks & Gradient Descent**\n\nFeel free to ask about any of these, or try phrasing your question with standard ML terms!`,
        relatedTopics: ['Linear Regression', 'Overfitting', 'Neural Networks', 'Confusion Matrix'],
      };
    }
  }

  /**
   * Get all knowledge base topics for search suggestions
   */
  public getTopics(): { id: string; topic: string; lessonId: string }[] {
    return this.knowledgeBase.map((k) => ({
      id: k.id,
      topic: k.topic,
      lessonId: k.recommendedLessonId,
    }));
  }
}

export const aiService = new AIService();

export const askAIMentor = async (
  query: string,
  lang: Language = 'bn',
  lessonId?: string
) => {
  const res = await aiService.askMentor(query, lang, lessonId);
  return {
    reply: res.text,
    relatedLessons: res.recommendedLesson?.id ? [res.recommendedLesson.id] : [],
    relatedTopics: res.relatedTopics,
  };
};

