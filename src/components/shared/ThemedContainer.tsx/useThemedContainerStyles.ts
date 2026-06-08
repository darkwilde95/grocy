import { useTheme } from "@/styles/ThemeContext";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const useThemeContainerStyles = () => {
  const { theme } = useTheme();
  const { bottom } = useSafeAreaInsets();

  return StyleSheet.create({
    scrollContainer: {
      backgroundColor: theme.colors.surface,
    },
    contentContainer: {
      padding: theme.spacing.md,
    },
  });
};

export default useThemeContainerStyles;
