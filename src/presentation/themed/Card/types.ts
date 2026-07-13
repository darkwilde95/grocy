import { Pressable, View } from "react-native";

export type ViewProps = Omit<
  React.ComponentPropsWithoutRef<typeof View>,
  "children"
>;
export type PressableProps = Omit<
  React.ComponentPropsWithoutRef<typeof Pressable>,
  "children"
>;
