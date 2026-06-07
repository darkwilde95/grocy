import React, { Children } from "react";
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

export type ColorType =
  | "primary"
  | "primaryFixed"
  | "success"
  | "warning"
  | "error"
  | "surface"
  | "surfaceVariant";

type WrapperType = keyof typeof wrapperMap;

type CardContainerProps<T extends WrapperType> = {
  type?: T;
  children?: React.ReactNode;
  dividers?: boolean;
  horizontal?: boolean;
  backgroundColor?: ColorType;
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
  dividers = false,
  horizontal = false,
  backgroundColor = "surfaceVariant",
  ...rest
}: CardContainerProps<T>) => {
  const childCount = Children.count(children);
  const styles = useCardContainerStyles(horizontal, backgroundColor);
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
      {Children.map(children, (child, index) => (
        <>
          {child}
          {index < childCount - 1 && <View style={styles.divider} />}
        </>
      ))}
    </Wrapper>
  );
};

export default CardContainer;
