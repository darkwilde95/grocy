import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Drawer } from "expo-router/drawer";

import CustomDrawer from "@/components/core/CustomDrawer/CustomDrawer";
import { useTheme } from "@/styles/ThemeContext";
import { StatusBar } from "react-native";

const DrawerNavigation = () => {
  const { theme } = useTheme();

  return (
    <>
      <StatusBar hidden={false} />
      <Drawer
        initialRouteName="(tabs)"
        drawerContent={CustomDrawer}
        screenOptions={{
          drawerActiveTintColor: theme.colors.onSurfaceVariant,
          drawerActiveBackgroundColor: theme.colors.surfaceVariant,
          drawerInactiveTintColor: theme.colors.onSurface,
          drawerItemStyle: {
            borderRadius: theme.roundness,
          },
          drawerLabelStyle: {
            ...theme.typography.headlineMedium,
          },
          title: "Grocy",
          headerStyle: {
            backgroundColor: theme.colors.surface,
          },
          drawerStyle: {
            backgroundColor: theme.colors.surface,
          },
          headerTitleStyle: {
            ...theme.typography.headlineLarge,
            color: theme.colors.primary,
          },
          headerTintColor: theme.colors.onSurface,
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
                color={theme.colors.primary}
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
                color={theme.colors.primary}
              />
            ),
          }}
        />
      </Drawer>
    </>
  );
};

export default DrawerNavigation;
