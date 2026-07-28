import { createContext, useContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const LangContext = createContext({ lang: 'en', setLang: () => {} });

// Map each route to its language counterpart
const ROUTE_MAP = {
  en: { '/': '/', '/atelier': '/atelier', '/projects': '/projects', '/contact': '/contact' },
  ar: { '/ar': '/ar', '/ar/atelier': '/ar/atelier', '/ar/projects': '/ar/projects', '/ar/contact': '/ar/contact' },
};

const EN_TO_AR = {
  '/': '/ar',
  '/atelier': '/ar/atelier',
  '/projects': '/ar/projects',
  '/contact': '/ar/contact',
};
const AR_TO_EN = {
  '/ar': '/',
  '/ar/atelier': '/atelier',
  '/ar/projects': '/projects',
  '/ar/contact': '/contact',
};

export function LangProvider({ children }) {
  const location = useLocation();
  const navigate = useNavigate();
  const isAr = location.pathname.startsWith('/ar');
  const [lang, setLangState] = useState(isAr ? 'ar' : 'en');

  useEffect(() => {
    const nowAr = location.pathname.startsWith('/ar');
    setLangState(nowAr ? 'ar' : 'en');
    document.documentElement.lang = nowAr ? 'ar' : 'en';
    document.documentElement.dir = nowAr ? 'rtl' : 'ltr';
  }, [location.pathname]);

  const setLang = (newLang) => {
    if (newLang === lang) return;
    const path = location.pathname;
    if (newLang === 'ar') {
      navigate(EN_TO_AR[path] || '/ar');
    } else {
      navigate(AR_TO_EN[path] || '/');
    }
  };

  return (
    <LangContext.Provider value={{ lang, setLang }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
