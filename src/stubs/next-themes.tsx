import * as React from "react";

type Theme = string;

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme?: Theme;
  themes?: Theme[];
};

const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined);

export type ThemeProviderProps = {
  children?: React.ReactNode;
  attribute?: "class" | "data-theme";
  defaultTheme?: Theme;
  storageKey?: string;
};

function applyTheme(attribute: string, theme: Theme) {
  const root = document.documentElement;
  if (attribute === "class") {
    root.classList.remove("light", "dark");
    if (theme) {
      root.classList.add(theme);
    }
  } else {
    root.setAttribute(attribute, theme);
  }
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  attribute = "class",
  defaultTheme = "system",
  storageKey = "theme",
}) => {
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme);
  const [resolvedTheme, setResolvedTheme] = React.useState<Theme>("light");

  const applyTheme = React.useCallback((theme: Theme) => {
    const root = document.documentElement;
    if (attribute === "class") {
      root.classList.remove("light", "dark");
      if (theme === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        root.classList.add(systemTheme);
        setResolvedTheme(systemTheme);
      } else {
        root.classList.add(theme);
        setResolvedTheme(theme);
      }
    } else {
      if (theme === "system") {
        const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        root.setAttribute(attribute, systemTheme);
        setResolvedTheme(systemTheme);
      } else {
        root.setAttribute(attribute, theme);
        setResolvedTheme(theme);
      }
    }
  }, [attribute]);

  React.useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored) {
        setThemeState(stored);
        applyTheme(stored);
        return;
      }
    } catch {
      // ignore storage errors
    }
    setThemeState(defaultTheme);
    applyTheme(defaultTheme);
  }, [attribute, defaultTheme, storageKey, applyTheme]);

  React.useEffect(() => {
    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      const handleChange = () => applyTheme("system");
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }
  }, [theme, applyTheme]);

  const setTheme = React.useCallback(
    (nextTheme: Theme) => {
      setThemeState(nextTheme);
      try {
        window.localStorage.setItem(storageKey, nextTheme);
      } catch {
        // ignore storage errors
      }
      applyTheme(nextTheme);
    },
    [attribute, storageKey, applyTheme],
  );

  const value = React.useMemo<ThemeContextValue>(() => ({
    theme,
    setTheme,
    resolvedTheme,
    themes: ["light", "dark", "system"]
  }), [theme, setTheme, resolvedTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

