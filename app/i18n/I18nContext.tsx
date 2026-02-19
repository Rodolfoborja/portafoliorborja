'use client';

import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

type Locale = 'es' | 'en';

interface TranslationData {
  [key: string]: string | TranslationData | string[];
}

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string) => string | TranslationData;
  ts: (key: string) => string;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  // Always start with 'es' on both server and client
  const [locale, setLocaleState] = useState<Locale>('es');
  const [translations, setTranslations] = useState<TranslationData>({});
  const [isClient, setIsClient] = useState(false);

  // Initialize locale from localStorage only on client
  useEffect(() => {
    setIsClient(true);
    const savedLocale = localStorage.getItem('locale') as Locale;
    if (savedLocale && (savedLocale === 'es' || savedLocale === 'en')) {
      setLocaleState(savedLocale);
    }
  }, []);

  // Load translations
  useEffect(() => {
    fetch(`/locales/${locale}/common.json`)
      .then(res => res.json())
      .then(data => setTranslations(data))
      .catch(error => console.error('Error loading translations:', error));
  }, [locale]);

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('locale', newLocale);
  };

  const t = (key: string): string | TranslationData => {
    const keys = key.split('.');
    let value: string | TranslationData = translations;
    
    for (const k of keys) {
      if (value && typeof value === 'object') {
        value = value[k] as string | TranslationData;
      } else {
        return key;
      }
    }
    
    return value || key;
  };

  const ts = (key: string): string => {
    const result = t(key);
    return typeof result === 'string' ? result : key;
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, ts }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}
