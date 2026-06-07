import { useTheme } from "@/styles/ThemeContext";
import { StyleSheet } from "react-native";

const useThemedTextStyles = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    default: {
      ...theme.typography.bodyMedium,
      color: theme.colors.onSurface,
    },
    screenTitle: {
      ...theme.typography.displayLarge,
      color: theme.colors.onSurface,
      marginBottom: theme.spacing.sm,
    },
    sectionTitle: {
      ...theme.typography.titleMedium,
      color: theme.colors.primary,
      marginBottom: theme.spacing.sm,
    },
    inputLabel: {
      ...theme.typography.labelMedium,
      color: theme.colors.primary,
      marginBottom: theme.spacing.sm,
    },
  });
};

export type TextTypes = keyof ReturnType<typeof useThemedTextStyles>;

export default useThemedTextStyles;
