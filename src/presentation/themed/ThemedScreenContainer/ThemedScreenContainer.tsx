import {
  KeyboardAvoidingView,
  ScrollView,
  ScrollViewProps,
} from "react-native";
import { useThemedContainerStyles } from "./useThemedScreenContainerStyles";

interface ThemedScreenContainerProps extends ScrollViewProps {
  hasKeyboard?: boolean;
}

export const ThemedScreenContainer = ({
  hasKeyboard = false,
  children,
  style,
  ...rest
}: ThemedScreenContainerProps) => {
  const styles = useThemedContainerStyles();

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
