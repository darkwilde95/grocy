import { useTheme } from "@providers/Theme";
import { StyleSheet } from "react-native";

export const useThemedContainerStyles = () => {
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
