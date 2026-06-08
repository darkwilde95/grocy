import React from "react";
import { ScrollView } from "react-native";
import useThemedContainerStles from "./useThemedContainerStyles";

type ThemedWrapperProps = React.ComponentPropsWithoutRef<typeof ScrollView>;

const ThemedScreenContainer = ({
  children,
  style,
  ...rest
}: ThemedWrapperProps) => {
  const styles = useThemedContainerStles();

  return (
    <ScrollView
      style={[styles.scrollContainer, style]}
      contentContainerStyle={[styles.contentContainer]}
      {...rest}
    >
      {children}
    </ScrollView>
  );
};

export default ThemedScreenContainer;
