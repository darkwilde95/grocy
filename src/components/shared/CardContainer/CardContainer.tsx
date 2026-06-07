import React from "react";
import {
  Pressable,
  PressableStateCallbackType,
  StyleProp,
  View,
  ViewStyle,
} from "react-native";
import useCardContainerStyles from "./useCardContainerStyles";

const wrapperMap = {
  default: View,
  pressable: Pressable,
};

type WrapperType = keyof typeof wrapperMap;

type CardContainerProps<T extends WrapperType> = {
  type?: T;
  children?: React.ReactNode;
} & React.ComponentPropsWithoutRef<(typeof wrapperMap)[T]>;

type StaticStyle = StyleProp<ViewStyle>;
type DynamicStyle = (state: PressableStateCallbackType) => StaticStyle;

const resolveStyles = (
  baseStyleFn: (pressed: boolean) => StaticStyle,
  userStyle: StaticStyle | DynamicStyle | undefined,
  isInteractiveComponent: boolean,
) => {
  if (isInteractiveComponent) {
    return (state: PressableStateCallbackType) => {
      const resolvedBase = baseStyleFn(state.pressed);
      const resolvedUser =
        typeof userStyle === "function" ? userStyle(state) : userStyle;
      return [resolvedBase, resolvedUser];
    };
  }

  const resolvedBase = baseStyleFn(false);
  return [resolvedBase, userStyle];
};

const CardContainer = <T extends WrapperType = "default">({
  type = "default" as T,
  style,
  children,
  ...rest
}: CardContainerProps<T>) => {
  const styles = useCardContainerStyles();
  const Wrapper = wrapperMap[type] as React.ElementType;

  const baseStyles = (pressed: boolean): StaticStyle => [
    styles.cardContainer,
    pressed && styles.pressedCard,
  ];

  return (
    <Wrapper
      style={resolveStyles(
        baseStyles,
        style as StaticStyle | DynamicStyle,
        type === "pressable",
      )}
      {...rest}
    >
      {children}
    </Wrapper>
  );
};

export default CardContainer;
