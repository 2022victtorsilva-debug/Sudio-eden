import React, { createContext, useContext, useLayoutEffect, useRef, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  isDark: boolean;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const transitionTimeout = useRef<number | undefined>(undefined);
  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem('studio_theme');
    return (saved === 'dark' || saved === 'light') ? saved : 'light';
  });

  const isDark = theme === 'dark';

  useLayoutEffect(() => {
    localStorage.setItem('studio_theme', theme);
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.style.colorScheme = theme;
  }, [theme]);

  useLayoutEffect(() => {
    return () => window.clearTimeout(transitionTimeout.current);
  }, []);

  const changeTheme = (newTheme: Theme) => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    window.clearTimeout(transitionTimeout.current);
    root.classList.remove('theme-transition');

    if (!reduceMotion) {
      root.classList.add('theme-transition');
      // Establish the old colors with transitions enabled before changing the theme.
      void document.body.offsetWidth;
    }

    root.classList.toggle('dark', newTheme === 'dark');
    root.style.colorScheme = newTheme;
    setThemeState(newTheme);

    transitionTimeout.current = window.setTimeout(() => {
      root.classList.remove('theme-transition');
    }, 360);
  };

  const toggleTheme = () => {
    changeTheme(isDark ? 'light' : 'dark');
  };

  const setTheme = (newTheme: Theme) => {
    changeTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, isDark, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
