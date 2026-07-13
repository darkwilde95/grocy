import { useTheme } from "@providers/Theme";
import { StyleSheet } from "react-native";

export const useThemedTextInputStyles = () => {
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
