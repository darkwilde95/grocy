import { useTheme } from "@styles/ThemeContext";
import { StyleSheet } from "react-native";

const useDrawerNavigationStyles = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    drawerContainer: {
      backgroundColor: theme.colors.surface,
    },
    headerContainer: {
      backgroundColor: theme.colors.surface,
    },
    headerTitle: {
      ...theme.typography.headlineLarge,
      color: theme.colors.primary,
    },
    headerIconColor: {
      color: theme.colors.onSurface,
    },
    itemContainer: {
      borderRadius: theme.roundness,
    },
    itemLabel: {
      ...theme.typography.headlineMedium,
    },
    itemIconColor: {
      color: theme.colors.primary,
    },
    itemInactive: {
      color: theme.colors.onSurface,
    },
    itemActive: {
      color: theme.colors.onSurfaceVariant,
      backgroundColor: theme.colors.surfaceVariant,
    },
  });
};

export default useDrawerNavigationStyles;
