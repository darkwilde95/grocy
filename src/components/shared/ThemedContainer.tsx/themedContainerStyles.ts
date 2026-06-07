import { AppTheme } from "@/styles/theme";
import { StyleSheet } from "react-native";

const createStyles = (theme: AppTheme) =>
  StyleSheet.create({
    screenContainer: {
      flex: 1,
      backgroundColor: theme.colors.surface,
      padding: theme.spacing.md,
    },
  });

export default createStyles;
