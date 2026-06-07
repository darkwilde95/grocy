import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { useColorScheme } from "react-native";
import { AppTheme, themes } from "./theme";

type ThemeMode = "light" | "dark" | "system";

interface ThemeContextType {
  theme: AppTheme;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: PropsWithChildren) {
  const systemColorScheme = useColorScheme();

  const [mode, setMode] = useState<ThemeMode>("system");
  const [currentTheme, setCurrentTheme] = useState<AppTheme>(
    systemColorScheme === "dark" ? themes.dark : themes.light,
  );

  useEffect(() => {
    if (mode === "system") {
      setCurrentTheme(
        systemColorScheme === "dark" ? themes.dark : themes.light,
      );
    } else {
      setCurrentTheme(themes[mode]);
    }
  }, [mode, systemColorScheme]);

  const isDark = currentTheme.dark;

  return (
    <ThemeContext.Provider
      value={{ theme: currentTheme, mode, setMode, isDark }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme debe ser utilizado dentro de un ThemeProvider");
  }
  return context;
}
