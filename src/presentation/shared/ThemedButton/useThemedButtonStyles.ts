import { TextThemedColorType } from "@/styles/theme";
import { useTheme } from "@styles/ThemeContext";
import { StyleSheet } from "react-native";
import { ButtonColor, ButtonType } from "./ThemedButton";

const useThemedButtonStyles = (as: ButtonType, color: ButtonColor) => {
  const { theme } = useTheme();
  const textKeyColor =
    `on${color.charAt(0).toUpperCase()}${color.slice(1)}` as TextThemedColorType<ButtonColor>;

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
      color: theme.colors[as === "default" ? textKeyColor : color],
    },
  });
};

export default useThemedButtonStyles;
