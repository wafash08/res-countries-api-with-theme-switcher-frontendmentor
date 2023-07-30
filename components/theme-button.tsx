"use client";
import {
  createContext,
  useState,
  useCallback,
  useMemo,
  useContext,
  useEffect,
} from "react";

export function ThemeButton({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => {
        setTheme(theme === "light" ? "dark" : "light");
      }}
      type='button'
      className='capitalize dark:text-white'
    >
      {children}
    </button>
  );
}

export interface UseThemeProps {
  /** List of all available theme names */
  // themes: string[];
  /** Forced theme name for the current page */
  // forcedTheme?: string;
  /** Update the theme */
  setTheme: (theme: string) => void;
  /** Active theme name */
  theme?: string;
  /** If `enableSystem` is true and the active theme is "system", this returns whether the system preference resolved to "dark" or "light". Otherwise, identical to `theme` */
  // resolvedTheme?: string;
  /** If enableSystem is true, returns the System theme preference ("dark" or "light"), regardless what the active theme is */
  // systemTheme?: "dark" | "light";
}

const ThemeContext = createContext<UseThemeProps | undefined>(undefined);

const STORAGE_KEY = "theme";
const DEFAULT_THEME = "dark";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState(() =>
    getTheme(STORAGE_KEY, DEFAULT_THEME)
  );

  const setTheme = useCallback((theme: string) => {
    setThemeState(theme);

    // Save to storage
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      // Unsupported
      console.error(e);
    }
  }, []);

  useEffect(() => {
    if (
      theme === "dark" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const providerValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme, setTheme]
  );

  return (
    <ThemeContext.Provider value={providerValue}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

function getTheme(key: string, fallback?: string) {
  let theme;

  try {
    theme = localStorage.getItem(key) || undefined;
  } catch (e) {
    // Unsupported
    console.error(e);
  }
  return theme || fallback;
}
