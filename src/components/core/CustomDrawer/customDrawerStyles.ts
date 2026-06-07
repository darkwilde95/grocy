import { AppTheme } from "@/styles/theme";
import { StyleSheet } from "react-native";

const createStyles = (theme: AppTheme, insetTop: number) =>
  StyleSheet.create({
    drawer: {
      backgroundColor: theme.colors.background,
    },
    drawerHeader: {
      flex: 1,
      backgroundColor: theme.colors.primaryFixed,
      alignItems: "flex-start",
      height: 200,
      marginTop: -12 - insetTop,
      marginLeft: -12,
      marginRight: -12,
      marginBottom: 12,
      padding: 12,
      paddingTop: 12 + insetTop,
    },
    profileImage: {
      width: 72,
      height: 72,
      borderRadius: 72,
    },
  });
export default createStyles;
