import { Color } from "@styles/types";
import { ReactNode } from "react";
import {
  Pressable,
  PressableStateCallbackType,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";
import { PressableProps, ViewProps } from "./types";
import { useCardContainerStyles } from "./useCardContainerStyles";

type StaticCard = ViewProps & {
  pressable?: false;
  color?: Color;
  children: ReactNode;
};
type PressableCard = PressableProps & {
  pressable: true;
  color?: Color;
  children: ReactNode;
};
type SimpleCardContainerProps<P extends boolean | undefined> = (P extends true
  ? PressableCard
  : StaticCard) & { pressable?: P };

export const SimpleCardContainer = <P extends boolean | undefined = undefined>({
  pressable,
  style,
  color = "surfaceVariant",
  ...rest
}: SimpleCardContainerProps<P>) => {
  const styles = useCardContainerStyles(color);
  if (pressable) {
    const stylesResolver = (state: PressableStateCallbackType) => [
      styles.container,
      state.pressed && styles.pressed,
      typeof style === "function" ? style(state) : style,
    ];
    return <Pressable style={stylesResolver} {...rest} />;
  } else if (!pressable) {
    return (
      <View
        style={[styles.container, style as StyleProp<ViewStyle>]}
        {...rest}
      />
    );
  }
};
