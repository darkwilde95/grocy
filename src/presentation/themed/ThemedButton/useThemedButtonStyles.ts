import { useTheme } from "@providers/Theme";
import { OnColor } from "@styles/types";
import { StyleSheet } from "react-native";
import { ButtonColor, ButtonType } from "./types";

export const useThemedButtonStyles = (
  styleType: ButtonType,
  color: ButtonColor,
) => {
  const { theme } = useTheme();
  const textKeyColor =
    `on${color.charAt(0).toUpperCase()}${color.slice(1)}` as OnColor<ButtonColor>;

  return StyleSheet.create({
    baseStyles: {
      borderRadius: theme.roundness,
      flexDirection: "row",
      gap: theme.spacing.xs,
      justifyContent: "center",
      alignItems: "center",
      width: "auto",
      padding: theme.spacing.sm,
      opacity: 1,
      transform: [{ scale: 1 }],
      borderWidth: 1,
      borderColor: theme.colors[color],
    },
    default: {
      backgroundColor: theme.colors[color],
    },
    outlined: {
      backgroundColor: "transparent",
    },
    baseText: {
      ...theme.typography.bodyLarge,
    },
    pressedStyle: {
      opacity: 0.8,
      transform: [{ scale: 0.97 }],
    },
    coloredText: {
      color: theme.colors[styleType === "default" ? textKeyColor : color],
    },
  });
};
