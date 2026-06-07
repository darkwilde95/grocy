import { useTheme } from "@/styles/ThemeContext";
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { Image, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import createStyles from "./customDrawerStyles";

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const { theme } = useTheme();
  const { top } = useSafeAreaInsets();
  const styles = createStyles(theme, top);

  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      style={styles.drawer}
    >
      <View style={styles.drawerHeader}>
        <Image
          source={{
            uri: "https://lh3.googleusercontent.com/aida-public/AB6AXuARToV6UPANyujvWG0rxe_5AqFLI62C6HFI0fhRafC6-5axTVhQz2z9ysDQzZZPEPj_QspkWms6jZBProlg6Dy5u25nnI7c01pFkVRpr2erEZ22ZtmWukfHRiLEQw6lPXdRSxbGEjzLE7enkFpYiPmN6TdHi7KmK7-jkrQEs8-WkQRwDFFNpJI8gAEhU3kctnSXcLJn3_aCXb06yU6vZ0J4cwksXYswW5FHw-qX85OHCBAWs_YqFmO7Igu26JrE3hVzo55A53gmEMI",
          }}
          style={styles.profileImage}
        />
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;
