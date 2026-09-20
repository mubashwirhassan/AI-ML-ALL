import React, { useState, useRef, useEffect } from 'react';
import {
  Bot,
  X,
  Send,
  Sparkles,
  BookOpen,
  ChevronRight,
  RotateCcw,
  Zap,
  Info,
} from 'lucide-react';
import { Language, AIMessage } from '../types';
import { askAIMentor } from '../services/aiService';

interface ChatbotProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onSelectLesson: (lessonId: string) => void;
}

export const Chatbot: React.FC<ChatbotProps> = ({
  isOpen,
  onClose,
  currentLang,
  onSelectLesson,
}) => {
  const [messages, setMessages] = useState<AIMessage[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        currentLang === 'bn'
          ? 'স্বাগতম! আমি আপনার মেশিন লার্নিং শিক্ষক ও এআই মেন্টর। লিনিয়ার রিগ্রেশন, ব্যাকপ্রপাগেশন, গণিত বা কোনো কোড সম্পর্কে যেকোনো প্রশ্ন জিজ্ঞেস করতে পারেন!'
          : 'Welcome! I am your ML Path AI Mentor. Ask me any conceptual question about machine learning, formulas, algorithms, or code examples!',
      timestamp: Date.now(),
      relatedLessons: ['l0-ai-ml-diff', 'l4-linear-regression'],
    },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  if (!isOpen) return null;

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || input).trim();
    if (!query || isLoading) return;

    const userMessage: AIMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: query,
      timestamp: Date.now(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await askAIMentor(query, currentLang);
      const assistantMessage: AIMessage = {
        id: `assistant-${Date.now()}`,
        role: 'assistant',
        content: response.reply,
        timestamp: Date.now(),
        relatedLessons: response.relatedLessons,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          role: 'assistant',
          content:
            currentLang === 'bn'
              ? 'দুঃখিত, উত্তর পেতে কিছুটা সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।'
              : 'Sorry, I encountered an issue retrieving the answer. Please try again.',
          timestamp: Date.now(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setMessages([
      {
        id: 'welcome-reset',
        role: 'assistant',
        content:
          currentLang === 'bn'
            ? 'আলাপচারিতা রিসেট করা হয়েছে। আপনার নতুন প্রশ্নটি বলুন!'
            : 'Conversation cleared. What would you like to explore next?',
        timestamp: Date.now(),
      },
    ]);
  };

  const suggestedPrompts =
    currentLang === 'bn'
      ? [
          'সহজ ভাষায় ব্যাকপ্রপাগেশন কী?',
          'KNN অ্যালগরিদমে স্কেলিং কেন বাধ্যতামূলক?',
          'ইপক (Epoch) এবং ব্যাচ সাইজ (Batch Size) এর পার্থক্য কী?',
          'L1 এবং L2 রেগুলারাইজেশনের পার্থক্য কী?',
        ]
      : [
          'What is Backpropagation in simple words?',
          'Why does KNN strictly require feature scaling?',
          'What is the difference between Epoch and Batch size?',
          'How does L1 Lasso differ from L2 Ridge regularization?',
        ];

  return (
    <div className="fixed bottom-4 right-4 z-50 w-[95vw] sm:w-[440px] h-[600px] max-h-[85vh] rounded-2xl bg-slate-900 border border-slate-700/80 shadow-2xl flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-6 duration-200">
      {/* Chatbot Header */}
      <div className="px-4 py-3.5 bg-slate-950 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20">
            <Bot className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center space-x-1.5">
              <h3 className="font-bold text-sm text-slate-100">
                {currentLang === 'bn' ? 'ML Path AI শিক্ষক' : 'ML Path AI Mentor'}
              </h3>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-mono">
                Knowledge Base
              </span>
            </div>
            <p className="text-[10px] text-slate-400">
              {currentLang === 'bn' ? 'তাত্ক্ষণিক স্পষ্ট ব্যাখ্যা ও উদাহরণ' : 'Instant bilingual explanations'}
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-1">
          <button
            onClick={handleClear}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
            title="Clear Chat"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-800 transition-colors"
            title="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Mode Info Bar */}
      <div className="px-4 py-1.5 bg-slate-900/90 border-b border-slate-800/80 text-[11px] text-slate-400 flex items-center justify-between">
        <div className="flex items-center space-x-1.5 text-cyan-400">
          <Zap className="w-3.5 h-3.5" />
          <span>{currentLang === 'bn' ? '৩৫+ মেশিন লার্নিং টপিক সক্রিয়' : '35+ Core ML Topics Active'}</span>
        </div>
        <span className="text-[10px] text-slate-500 font-mono">Demo & AI Mode</span>
      </div>

      {/* Messages Scroll Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
        {messages.map((msg) => {
          const isAssistant = msg.role === 'assistant';
          return (
            <div
              key={msg.id}
              className={`flex ${isAssistant ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                  isAssistant
                    ? 'bg-slate-800/90 border border-slate-700/70 text-slate-200'
                    : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium shadow-md'
                }`}
              >
                <div className="whitespace-pre-line">{msg.content}</div>

                {/* Related Lessons Links */}
                {msg.relatedLessons && msg.relatedLessons.length > 0 && (
                  <div className="mt-3 pt-2.5 border-t border-slate-700/60">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-cyan-400 block mb-1.5">
                      {currentLang === 'bn' ? '📚 সম্পর্কিত পাঠসমূহ:' : '📚 Related Curriculum Lessons:'}
                    </span>
                    <div className="space-y-1">
                      {msg.relatedLessons.map((lessonId: string) => (
                        <button
                          key={lessonId}
                          type="button"
                          onClick={() => {
                            onSelectLesson(lessonId);
                            onClose();
                          }}
                          className="w-full text-left flex items-center justify-between p-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-900 text-cyan-300 text-xs transition-colors group"
                        >
                          <span className="truncate">Jump to Lesson: {lessonId}</span>
                          <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform shrink-0" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        })}

        {isLoading && (
          <div className="flex justify-start">
            <div className="rounded-2xl p-3.5 bg-slate-800 border border-slate-700 text-slate-400 text-xs flex items-center space-x-2">
              <Sparkles className="w-4 h-4 text-cyan-400 animate-spin" />
              <span>
                {currentLang === 'bn' ? 'এআই মেন্টর চিন্তা করছেন...' : 'AI Mentor is thinking...'}
              </span>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Suggested Prompts */}
      {messages.length <= 2 && (
        <div className="px-3 py-2 border-t border-slate-800/60 bg-slate-950/60">
          <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider block mb-1.5 px-1">
            {currentLang === 'bn' ? 'প্রস্তাবিত প্রশ্নাবলী:' : 'Suggested Questions:'}
          </span>
          <div className="flex flex-wrap gap-1.5">
            {suggestedPrompts.map((prompt, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSend(prompt)}
                className="text-[11px] px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700/80 text-slate-300 transition-colors text-left"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Input Form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSend();
        }}
        className="p-3 bg-slate-950 border-t border-slate-800 flex items-center space-x-2"
      >
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={
            currentLang === 'bn'
              ? 'মেশিন লার্নিং সম্পর্কে যেকোনো প্রশ্ন করুন...'
              : 'Ask any question about ML, math, or code...'
          }
          className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-700/80 text-slate-100 placeholder-slate-500 text-xs sm:text-sm outline-none focus:border-cyan-500 transition-colors"
        />
        <button
          type="submit"
          disabled={!input.trim() || isLoading}
          className={`p-2.5 rounded-xl transition-all ${
            input.trim() && !isLoading
              ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20 hover:scale-105 active:scale-95'
              : 'bg-slate-800 text-slate-500 cursor-not-allowed'
          }`}
        >
          <Send className="w-4 h-4" />
        </button>
      </form>
    </div>
  );
};
