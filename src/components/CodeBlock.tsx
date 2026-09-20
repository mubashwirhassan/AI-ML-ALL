import React, { useState } from 'react';
import { Copy, Check, Play, Terminal, ChevronDown, ChevronUp } from 'lucide-react';
import { Language } from '../types';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  expectedOutput?: string;
  explanation?: {
    en: string[];
    bn: string[];
  };
  currentLang: Language;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'python',
  title,
  expectedOutput,
  explanation,
  currentLang,
}) => {
  const [copied, setCopied] = useState(false);
  const [showOutput, setShowOutput] = useState(true);
  const [showExplanation, setShowExplanation] = useState(true);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const explanations = explanation ? explanation[currentLang] || explanation.en : [];

  return (
    <div className="my-6 rounded-xl border border-slate-700/80 bg-slate-900/90 shadow-xl overflow-hidden font-sans">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-slate-800/90 border-b border-slate-700/70 text-xs text-slate-400">
        <div className="flex items-center space-x-2">
          <div className="flex space-x-1.5">
            <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="font-mono uppercase font-semibold text-cyan-400 pl-2">
            {language}
          </span>
          {title && <span className="text-slate-300 font-medium truncate max-w-xs">| {title}</span>}
        </div>

        <div className="flex items-center space-x-2">
          {expectedOutput && (
            <button
              onClick={() => setShowOutput(!showOutput)}
              className="flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-700/60 hover:bg-slate-700 text-slate-300 transition-colors"
              title={currentLang === 'bn' ? 'আউটপুট দেখুন' : 'Toggle Output'}
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>{currentLang === 'bn' ? 'আউটপুট' : 'Output'}</span>
            </button>
          )}

          <button
            onClick={handleCopy}
            className="flex items-center space-x-1 px-2.5 py-1 rounded bg-slate-700/60 hover:bg-slate-700 text-slate-300 transition-colors"
            title={currentLang === 'bn' ? 'কোড কপি করুন' : 'Copy code'}
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-400">{currentLang === 'bn' ? 'কপি হয়েছে' : 'Copied'}</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>{currentLang === 'bn' ? 'কপি' : 'Copy'}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Area */}
      <div className="p-4 overflow-x-auto bg-slate-950 font-mono text-sm leading-relaxed text-slate-200">
        <pre className="selection:bg-cyan-900 selection:text-cyan-100">
          <code>{code}</code>
        </pre>
      </div>

      {/* Expected Output Drawer */}
      {expectedOutput && showOutput && (
        <div className="border-t border-slate-800 bg-black/70 p-3.5 font-mono text-xs text-slate-300">
          <div className="flex items-center space-x-1.5 text-emerald-400 mb-1.5 font-semibold">
            <Play className="w-3 h-3 fill-current" />
            <span>{currentLang === 'bn' ? 'প্রত্যাশিত ফলাফল (Output):' : 'Expected Output:'}</span>
          </div>
          <pre className="bg-slate-900/90 rounded p-2.5 text-emerald-300/90 overflow-x-auto whitespace-pre-wrap">
            {expectedOutput}
          </pre>
        </div>
      )}

      {/* Code Explanation points */}
      {explanations.length > 0 && (
        <div className="border-t border-slate-800/80 bg-slate-900/50 p-3.5 text-xs text-slate-300">
          <button
            onClick={() => setShowExplanation(!showExplanation)}
            className="flex items-center justify-between w-full text-slate-400 hover:text-slate-200 transition-colors"
          >
            <span className="font-semibold text-cyan-400 uppercase tracking-wider text-[11px]">
              {currentLang === 'bn' ? '🔍 কোড ব্যাখ্যা' : '🔍 Code Explanation'}
            </span>
            {showExplanation ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
          </button>
          {showExplanation && (
            <ul className="mt-2 space-y-1.5 list-disc list-inside text-slate-300">
              {explanations.map((point, index) => (
                <li key={index} className="leading-normal">
                  {point}
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};
