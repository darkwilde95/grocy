import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";

import CustomDrawer from "@/components/core/CustomDrawer/CustomDrawer";
import { StatusBar } from "react-native";
import useDrawerNavigationStyles from "./useDrawerNavigationStyles";

const DrawerNavigation = () => {
  const styles = useDrawerNavigationStyles();

  return (
    <>
      <StatusBar hidden={false} />
      <Drawer
        initialRouteName="(tabs)"
        drawerContent={CustomDrawer}
        screenOptions={{
          drawerStyle: styles.drawerContainer,
          drawerActiveTintColor: styles.itemActive.color,
          drawerActiveBackgroundColor: styles.itemActive.backgroundColor,
          drawerInactiveTintColor: styles.itemInactive.color,
          drawerItemStyle: styles.itemContainer,
          drawerLabelStyle: styles.itemLabel,
          title: "Grocy",
          headerStyle: styles.headerContainer,
          headerTitleStyle: styles.headerTitle,
          headerTintColor: styles.headerIconColor.color,
        }}
      >
        <Drawer.Screen
          name="(tabs)"
          options={{
            headerShown: true,
            drawerLabel: "Inicio",
            drawerIcon: ({ size }) => (
              <MaterialCommunityIcons
                name="home-outline"
                size={size}
                color={styles.itemIconColor.color}
              />
            ),
          }}
        />
        <Drawer.Screen
          name="shoppingLists/index"
          options={{
            headerShown: true,
            drawerLabel: "Historial de compras",
            drawerIcon: ({ size }) => (
              <MaterialCommunityIcons
                name="receipt-text-outline"
                size={size}
                color={styles.itemIconColor.color}
              />
            ),
          }}
        />
      </Drawer>
    </>
  );
};

export default DrawerNavigation;
