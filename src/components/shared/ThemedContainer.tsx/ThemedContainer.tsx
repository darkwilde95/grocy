import React from "react";
import { ScrollView, View } from "react-native";
import useThemedContainerStles from "./useThemedContainerStyles";

const wrapperMap = {
  view: View,
  scroll: ScrollView,
};

type WrapperType = keyof typeof wrapperMap;

interface WrapperProps<T extends WrapperType> {
  as?: T;
}

type ThemedWrapperProps<T extends WrapperType> = WrapperProps<T> &
  React.ComponentPropsWithoutRef<(typeof wrapperMap)[T]>;

const ThemedScreenContainer = <T extends WrapperType = "view">({
  as = "view" as T,
  children,
  style,
  ...rest
}: ThemedWrapperProps<T>) => {
  const styles = useThemedContainerStles();

  const Wrapper = wrapperMap[as as WrapperType];

  return (
    <Wrapper style={[styles.screenContainer, style]} {...rest}>
      {children}
    </Wrapper>
  );
};

export default ThemedScreenContainer;
