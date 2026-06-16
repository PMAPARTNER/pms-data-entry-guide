'use client';

import { useState } from 'react';
import { Language, languages } from '@/lib/languages';
import { Globe } from 'lucide-react';

export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState<Language>('tr');
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    setIsOpen(false);
    // Store in localStorage for persistence
    if (typeof window !== 'undefined') {
      localStorage.setItem('pms-guide-lang', lang);
    }
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition text-sm font-medium text-gray-700"
        aria-label="Change language"
      >
        <Globe className="w-4 h-4" />
        <span>{languages[currentLang].flag}</span>
        <span className="hidden sm:inline">{languages[currentLang].nativeName}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          {Object.entries(languages).map(([key, lang]) => (
            <button
              key={key}
              onClick={() => handleLanguageChange(key as Language)}
              className={`w-full text-left px-4 py-2 hover:bg-gray-50 transition flex items-center gap-3 ${
                currentLang === key ? 'bg-indigo-50 text-indigo-600' : 'text-gray-700'
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
              <div>
                <div className="font-medium">{lang.nativeName}</div>
                <div className="text-xs text-gray-500">{lang.name}</div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
