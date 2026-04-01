import React, { createContext, useContext, useState, useEffect } from 'react';

export type AccentColor = 'blue' | 'indigo' | 'purple' | 'teal' | 'rose' | 'amber' | 'green';

// Full Tailwind-matching palettes for each accent color
const accentPalettes: Record<AccentColor, Record<number, string>> = {
  blue: {
    50: '#eff6ff', 100: '#dbeafe', 200: '#bfdbfe', 300: '#93c5fd',
    400: '#60a5fa', 500: '#3b82f6', 600: '#2563eb', 700: '#1d4ed8',
    800: '#1e40af', 900: '#1e3a8f',
  },
  indigo: {
    50: '#eef2ff', 100: '#e0e7ff', 200: '#c7d2fe', 300: '#a5b4fc',
    400: '#818cf8', 500: '#6366f1', 600: '#4f46e5', 700: '#4338ca',
    800: '#3730a3', 900: '#312e81',
  },
  purple: {
    50: '#faf5ff', 100: '#f3e8ff', 200: '#e9d5ff', 300: '#d8b4fe',
    400: '#c084fc', 500: '#a855f7', 600: '#9333ea', 700: '#7e22ce',
    800: '#6b21a8', 900: '#581c87',
  },
  teal: {
    50: '#f0fdfa', 100: '#ccfbf1', 200: '#99f6e4', 300: '#5eead4',
    400: '#2dd4bf', 500: '#14b8a6', 600: '#0d9488', 700: '#0f766e',
    800: '#115e59', 900: '#134e4a',
  },
  rose: {
    50: '#fff1f2', 100: '#ffe4e6', 200: '#fecdd3', 300: '#fda4af',
    400: '#fb7185', 500: '#f43f5e', 600: '#e11d48', 700: '#be123c',
    800: '#9f1239', 900: '#881337',
  },
  amber: {
    50: '#fffbeb', 100: '#fef3c7', 200: '#fde68a', 300: '#fcd34d',
    400: '#fbbf24', 500: '#f59e0b', 600: '#d97706', 700: '#b45309',
    800: '#92400e', 900: '#78350f',
  },
  green: {
    50: '#f0fdf4', 100: '#dcfce7', 200: '#bbf7d0', 300: '#86efac',
    400: '#4ade80', 500: '#22c55e', 600: '#16a34a', 700: '#15803d',
    800: '#166534', 900: '#14532d',
  },
};

const SHADES = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

/**
 * Overrides Tailwind v4's CSS color variables on :root so every blue/indigo
 * utility class (bg-blue-*, text-blue-*, from-blue-*, to-indigo-*, etc.)
 * instantly switches to the chosen accent palette — no per-component changes needed.
 */
function applyAccentColors(color: AccentColor) {
  const root = document.documentElement;

  if (color === 'blue') {
    // 'blue' is the default — remove any overrides so Tailwind's built-in values take over
    SHADES.forEach(shade => {
      root.style.removeProperty(`--color-blue-${shade}`);
      root.style.removeProperty(`--color-indigo-${shade}`);
    });
  } else {
    const palette = accentPalettes[color];
    SHADES.forEach(shade => {
      // Override blue utilities
      root.style.setProperty(`--color-blue-${shade}`, palette[shade]);
      // Override indigo utilities (used in gradient ends like `to-indigo-600`)
      root.style.setProperty(`--color-indigo-${shade}`, palette[shade]);
    });
  }
}

interface ThemeContextType {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  setDarkMode: (value: boolean) => void;
  accentColor: AccentColor;
  setAccentColor: (color: AccentColor) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      // If the user previously chose 'system', always mirror the OS preference
      const savedMode = localStorage.getItem('themeMode');
      if (savedMode === 'system') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
      }
      const saved = localStorage.getItem('theme');
      if (saved !== null) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [accentColor, setAccentColorState] = useState<AccentColor>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('accentColor') as AccentColor | null;
      if (saved && saved in accentPalettes) return saved;
    }
    return 'blue';
  });

  // Apply dark mode class — only persist 'theme' key when not in system mode
  // (system mode manages itself via the OS media-query listener in Settings)
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    const savedMode = localStorage.getItem('themeMode');
    if (savedMode !== 'system') {
      localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    }
  }, [isDarkMode]);

  // Apply accent color CSS variables whenever it changes
  useEffect(() => {
    applyAccentColors(accentColor);
  }, [accentColor]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);
  const setDarkMode = (value: boolean) => setIsDarkMode(value);

  const setAccentColor = (color: AccentColor) => {
    setAccentColorState(color);
    localStorage.setItem('accentColor', color);
    applyAccentColors(color);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, setDarkMode, accentColor, setAccentColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);

  if (context === undefined) {
    // Safe fallback: handles HMR stale-module references, Figma inspector
    // isolation, and any render that happens before the provider mounts.
    // Reads live state directly from the DOM / localStorage so values are accurate.
    const savedAccent =
      typeof window !== 'undefined'
        ? ((localStorage.getItem('accentColor') as AccentColor) || 'blue')
        : 'blue';
    const darkFromDOM =
      typeof window !== 'undefined'
        ? document.documentElement.classList.contains('dark')
        : false;

    return {
      isDarkMode: darkFromDOM,
      toggleDarkMode: () => {
        document.documentElement.classList.toggle('dark');
      },
      setDarkMode: (value: boolean) => {
        document.documentElement.classList.toggle('dark', value);
      },
      accentColor: savedAccent,
      setAccentColor: () => {},
    };
  }

  return context;
}