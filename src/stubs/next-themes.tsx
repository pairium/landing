import * as React from "react";

type Theme = string;

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
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
  defaultTheme = "light",
  storageKey = "theme",
}) => {
  const [theme, setThemeState] = React.useState<Theme>(defaultTheme);

  React.useEffect(() => {
    try {
      const stored = window.localStorage.getItem(storageKey);
      if (stored) {
        setThemeState(stored);
        applyTheme(attribute, stored);
        return;
      }
    } catch {
      // ignore storage errors
    }
    applyTheme(attribute, defaultTheme);
  }, [attribute, defaultTheme, storageKey]);

  const setTheme = React.useCallback(
    (nextTheme: Theme) => {
      setThemeState(nextTheme);
      try {
        window.localStorage.setItem(storageKey, nextTheme);
      } catch {
        // ignore storage errors
      }
      applyTheme(attribute, nextTheme);
    },
    [attribute, storageKey],
  );

  const value = React.useMemo<ThemeContextValue>(() => ({ theme, setTheme }), [theme, setTheme]);

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};

export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}

