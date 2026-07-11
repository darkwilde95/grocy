import { useTheme } from "@/styles/ThemeContext";
import { StyleSheet } from "react-native";

const useThemeContainerStyles = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    scrollContainer: {
      backgroundColor: theme.colors.surface,
    },
    contentContainer: {
      padding: theme.spacing.md,
    },
    keyboardAvoidingView: {
      backgroundColor: theme.colors.surface,
    },
  });
};

export default useThemeContainerStyles;
