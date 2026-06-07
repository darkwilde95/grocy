import { useTheme } from "@/styles/ThemeContext";
import { StyleSheet } from "react-native";

const useThemeContainerStyles = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    screenContainer: {
      flex: 1,
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.md,
    },
  });
};

export default useThemeContainerStyles;
