"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Language = "vi" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
}

const LanguageContext = createContext<LanguageContextType>({
  language: "vi",
  setLanguage: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("vi");

  // Read ?lang=en or ?lang=vi from URL on client mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      const paramLang = new URLSearchParams(window.location.search).get("lang");
      if (paramLang === "en" || paramLang === "vi") {
        setLanguage(paramLang);
      }
    }
  }, []);

  // Sync <html lang="..."> attribute with active language state
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = language;
    }
  }, [language]);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    if (typeof window !== "undefined") {
      const url = new URL(window.location.href);
      if (url.searchParams.has("lang")) {
        url.searchParams.set("lang", lang);
        window.history.replaceState({}, "", url.toString());
      }
    }
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
