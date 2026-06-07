import { useTheme } from "@/styles/ThemeContext";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Pressable, Text, View } from "react-native";
import createStyle from "./customTabBarStyles";

const CustomTabBar = ({
  state,
  descriptors,
  insets,
  navigation,
}: BottomTabBarProps) => {
  const { theme } = useTheme();
  const styles = createStyle(theme, insets.bottom);

  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel;
        const icon = options.tabBarIcon;
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };
        return (
          <Pressable
            key={route.name}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.tab, isFocused && styles.activeTab]}
          >
            {icon!({
              focused: isFocused,
              color: isFocused
                ? theme.colors.onPrimary
                : theme.colors.onSurfaceVariant,
              size: 24,
            })}
            <Text style={[styles.label, isFocused && styles.activeLabel]}>
              {label as string}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default CustomTabBar;
