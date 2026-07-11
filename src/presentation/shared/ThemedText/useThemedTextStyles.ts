import { useTheme } from "@/styles/ThemeContext";
import { StyleSheet } from "react-native";
import { TextColorType } from "./ThemedText";

const useThemedTextStyles = (color?: TextColorType) => {
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

export type TextTypes = keyof ReturnType<typeof useThemedTextStyles>;

export default useThemedTextStyles;
