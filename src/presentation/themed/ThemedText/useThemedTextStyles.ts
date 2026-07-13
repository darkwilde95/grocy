import { useTheme } from "@providers/Theme";
import { Color } from "@styles/types";
import { StyleSheet } from "react-native";

export const useThemedTextStyles = (color?: Color) => {
  const { theme } = useTheme();

  return StyleSheet.create({
    default: {
      ...theme.typography.bodyMedium,
      color: theme.colors[color ?? "onSurface"],
    },
    screenTitle: {
      ...theme.typography.displayLarge,
      color: theme.colors[color ?? "onSurface"],
      marginBottom: theme.spacing.sm,
    },
    sectionTitle: {
      ...theme.typography.titleMedium,
      marginBottom: theme.spacing.sm,
      color: theme.colors[color ?? "primary"],
    },
    inputLabel: {
      ...theme.typography.labelMedium,
      marginBottom: theme.spacing.sm,
      color: theme.colors[color ?? "primary"],
    },
  });
};
