"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const languages = [
  { code: 'FR', name: 'Français', flag: '🇫🇷' },
  { code: 'EN', name: 'English', flag: '🇬🇧' },
  { code: 'ES', name: 'Español', flag: '🇪🇸' },
  { code: 'ZH', name: '中文', flag: '🇨🇳' }
];

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('FR');

  useEffect(() => {
    const savedLang = localStorage.getItem('codorah_lang');
    if (savedLang && languages.find(l => l.code === savedLang)) {
      setLang(savedLang);
    } else {
      // Auto-detect browser language
      const browserLang = navigator.language.split('-')[0].toUpperCase();
      if (languages.find(l => l.code === browserLang)) {
        setLang(browserLang);
      }
    }
  }, []);

  const changeLanguage = (code) => {
    setLang(code);
    localStorage.setItem('codorah_lang', code);
  };

  return (
    <LanguageContext.Provider value={{ lang, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
