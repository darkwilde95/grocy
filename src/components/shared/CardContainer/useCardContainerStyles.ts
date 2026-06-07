import { useTheme } from "@/styles/ThemeContext";
import { StyleSheet } from "react-native";
import { ColorType } from "./CardContainer";

const useCardContainerStyles = (
  horizontal: boolean,
  backgroundColor: ColorType,
) => {
  const { theme } = useTheme();

  return StyleSheet.create({
    cardContainer: {
      width: "100%",
      padding: theme.spacing.md,
      borderWidth: 1,
      borderColor: theme.colors.border,
      borderRadius: theme.roundness,
      flexDirection: horizontal ? "row" : "column",
      backgroundColor: theme.colors[backgroundColor],
    },
    pressedCard: { opacity: 0.8 },
    divider: {
      backgroundColor: theme.colors.border,
      height: horizontal ? "auto" : 1,
      width: horizontal ? 1 : "auto",
      marginHorizontal: horizontal ? theme.spacing.md : -theme.spacing.md,
      marginVertical: horizontal ? -theme.spacing.md : theme.spacing.md,
    },
  });
};

export default useCardContainerStyles;
