import { useTheme } from "@/styles/ThemeContext";
import { StyleSheet } from "react-native";

const useThemedTextInputStyles = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    input: {
      borderWidth: 1,
      borderRadius: theme.roundness,
      backgroundColor: theme.colors.surfaceVariant,
      color: theme.colors.onSurfaceVariant,
      paddingHorizontal: theme.spacing.md,
      borderColor: theme.colors.border,
      ...theme.typography.bodyMedium,
    },
    placeholder: {
      color: theme.colors.textMuted,
    },
  });
};

export default useThemedTextInputStyles;
