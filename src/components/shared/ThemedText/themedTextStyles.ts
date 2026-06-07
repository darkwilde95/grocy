import { AppTheme } from "@/styles/theme";
import { StyleSheet } from "react-native";

const createStyles = (theme: AppTheme) =>
  StyleSheet.create({
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

export default createStyles;
