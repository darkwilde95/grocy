import { AppTheme } from "@/styles/theme";
import { StyleSheet } from "react-native";

const createStyles = (theme: AppTheme) =>
  StyleSheet.create({
    cardContainer: {
      width: "100%",
      padding: theme.spacing.md,
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: theme.roundness,
    },
  });

export default createStyles;
