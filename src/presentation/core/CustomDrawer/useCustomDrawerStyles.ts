import { useTheme } from "@styles/ThemeContext";
import { StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const useCustomDrawerStyles = () => {
  const { theme } = useTheme();
  const { top } = useSafeAreaInsets();

  return StyleSheet.create({
    drawer: {
      backgroundColor: theme.colors.background,
    },
    drawerHeader: {
      flex: 1,
      backgroundColor: theme.colors.primaryFixed,
      alignItems: "flex-start",
      height: 200,
      marginTop: -12 - top,
      marginLeft: -12,
      marginRight: -12,
      marginBottom: 12,
      padding: 12,
      paddingTop: 12 + top,
    },
    profileImage: {
      width: 72,
      height: 72,
      borderRadius: 72,
    },
  });
};
export default useCustomDrawerStyles;
