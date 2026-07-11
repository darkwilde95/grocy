import React from "react";
import {
  KeyboardAvoidingView,
  ScrollView,
  ScrollViewProps,
} from "react-native";
import useThemedContainerStles from "./useThemedScreenContainerStyles";

interface ThemedScreenContainerProps extends ScrollViewProps {
  hasKeyboard?: boolean;
}

const ThemedScreenContainer = ({
  hasKeyboard = false,
  children,
  style,
  ...rest
}: ThemedScreenContainerProps) => {
  const styles = useThemedContainerStles();

  const baseRender = () => (
    <ScrollView
      style={[styles.scrollContainer, style]}
      contentContainerStyle={[styles.contentContainer]}
      {...rest}
    >
      {children}
    </ScrollView>
  );

  return !hasKeyboard ? (
    baseRender()
  ) : (
    <KeyboardAvoidingView
      behavior="padding"
      style={styles.keyboardAvoidingView}
      keyboardVerticalOffset={100}
    >
      {baseRender()}
    </KeyboardAvoidingView>
  );
};

export default ThemedScreenContainer;
