import CustomTabBar from "@/components/core/CustomTabBar/CustomTabBar";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const TabsLayout = () => {
  const { bottom } = useSafeAreaInsets();

  return (
    <Tabs
      initialRouteName="home/index"
      safeAreaInsets={{ bottom: bottom }}
      tabBar={(props) => <CustomTabBar {...props} />}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: "Inicio",
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="view-dashboard-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="lists/index"
        options={{
          title: "Comprar",
          tabBarLabel: "Comprar",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cart-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="stores/index"
        options={{
          title: "Mis Tiendas",
          tabBarLabel: "Mis Tiendas",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="storefront-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings/index"
        options={{
          title: "Ajustes",
          tabBarLabel: "Ajustes",
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="cog-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
