import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle({
  theme: propsTheme,
  toggleTheme: propsToggleTheme,
  showLabel = false,
  className = '',
}) {
  const [internalTheme, setInternalTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'dark';
    }
    return 'dark';
  });

  const currentTheme = propsTheme !== undefined ? propsTheme : internalTheme;

  const handleToggle = () => {
    if (propsToggleTheme) {
      propsToggleTheme();
    } else {
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      setInternalTheme(nextTheme);
      if (typeof window !== 'undefined') {
        const root = document.documentElement;
        localStorage.setItem('theme', nextTheme);
        if (nextTheme === 'light') {
          root.classList.remove('dark');
          root.classList.add('light');
        } else {
          root.classList.remove('light');
          root.classList.add('dark');
        }
      }
    }
  };

  useEffect(() => {
    if (propsTheme === undefined && typeof window !== 'undefined') {
      const root = document.documentElement;
      localStorage.setItem('theme', internalTheme);
      if (internalTheme === 'light') {
        root.classList.remove('dark');
        root.classList.add('light');
      } else {
        root.classList.remove('light');
        root.classList.add('dark');
      }
    }
  }, [internalTheme, propsTheme]);

  if (showLabel) {
    return (
      <button
        type="button"
        onClick={handleToggle}
        className={`flex items-center gap-2.5 px-3 py-2 rounded-xl bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-white/10 transition-colors text-xs font-semibold cursor-pointer ${className}`}
        aria-label={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {currentTheme === 'dark' ? (
          <>
            <Sun size={16} className="text-amber-400 shrink-0" />
            <span>Light Mode</span>
          </>
        ) : (
          <>
            <Moon size={16} className="text-slate-700 shrink-0" />
            <span>Dark Mode</span>
          </>
        )}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={`relative grid h-9 w-9 place-items-center rounded-full text-slate-600 dark:text-slate-300 transition-all duration-200 hover:bg-slate-200/70 dark:hover:bg-white/10 hover:text-teal-600 dark:hover:text-teal-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 border border-slate-200/80 dark:border-white/10 bg-white/80 dark:bg-transparent shadow-sm cursor-pointer ${className}`}
      aria-label={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
      title={`Switch to ${currentTheme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {currentTheme === 'dark' ? (
        <Sun size={17} className="text-amber-400 transition-transform hover:rotate-45" />
      ) : (
        <Moon size={17} className="text-slate-700 transition-transform hover:-rotate-12" />
      )}
    </button>
  );
}
