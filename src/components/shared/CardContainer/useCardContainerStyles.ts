import { useTheme } from "@/styles/ThemeContext";
import { StyleSheet } from "react-native";

const useCardContainerStyles = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    cardContainer: {
      width: "100%",
      padding: theme.spacing.md,
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: theme.roundness,
    },
  });
};

export default useCardContainerStyles;
