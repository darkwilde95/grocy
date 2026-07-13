import { useTheme } from "@providers/Theme";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export const useCustomTabBarStyles = () => {
  const { theme } = useTheme();
  const { bottom } = useSafeAreaInsets();
  return StyleSheet.create({
    container: {
      flexDirection: "row",
      width: "100%",
      justifyContent: "center",
      backgroundColor: theme.colors.surface,
      borderTopColor: theme.colors.border,
      borderTopWidth: 1,
      paddingVertical: theme.spacing.xs,
      paddingBottom: theme.spacing.xs + bottom,
    },
    tab: {
      width: "20%",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: theme.roundness,
      marginHorizontal: theme.spacing.xs,
      padding: theme.spacing.xs,
    },
    activeTab: {
      backgroundColor: theme.colors.primaryFixed,
    },
    label: {
      color: theme.colors.onSurfaceVariant,
      ...theme.typography.labelLarge,
    },
    activeLabel: {
      color: theme.colors.onPrimary,
    },
    iconColor: {
      color: theme.colors.onSurfaceVariant,
    },
    iconColorFocused: {
      color: theme.colors.onPrimary,
    },
  });
};
