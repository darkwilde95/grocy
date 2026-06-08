import { useTheme } from "@/styles/ThemeContext";
import { StyleSheet } from "react-native";
import { ColorType } from "./cardTypes";

const useCardContainerStyles = (color: ColorType) => {
  const { theme } = useTheme();
  return StyleSheet.create({
    container: {
      padding: theme.spacing.md,
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: theme.roundness,
      backgroundColor: theme.colors[color],
    },
    item: {
      padding: theme.spacing.md,
    },
    pressed: {
      opacity: 0.7,
    },
    divider: {
      height: 1,
      backgroundColor: theme.colors.border,
      width: "100%",
    },
  });
};

export default useCardContainerStyles;
