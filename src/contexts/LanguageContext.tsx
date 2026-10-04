import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type Language = 'en' | 'vi';
export type LocalizedText = Record<Language, string>;

interface LanguageContextValue {
  language: Language;
  setLanguage: (language: Language) => void;
  translate: (text: LocalizedText) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = window.localStorage.getItem('fcaj-language');
    return savedLanguage === 'vi' ? 'vi' : 'en';
  });

  useEffect(() => {
    window.localStorage.setItem('fcaj-language', language);
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      language,
      setLanguage,
      translate: (text) => text[language],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider');
  }
  return context;
}
