import React from "react";
import { ScrollView, View } from "react-native";
import useThemedContainerStles from "./useThemedContainerStyles";

const componentMap = {
  View,
  ScrollView,
};

type BaseView = keyof typeof componentMap;

interface ContainerProps<T extends BaseView> {
  as?: T;
}

type ThemedContainerProps<T extends BaseView> = ContainerProps<T> &
  React.ComponentPropsWithoutRef<(typeof componentMap)[T]>;

const ThemedScreenContainer = <T extends BaseView = "View">({
  as = "View" as T,
  children,
  style,
  ...rest
}: ThemedContainerProps<T>) => {
  const styles = useThemedContainerStles();

  const Component = componentMap[as as BaseView];

  return (
    <Component style={[styles.screenContainer, style]} {...rest}>
      {children}
    </Component>
  );
};

export default ThemedScreenContainer;
