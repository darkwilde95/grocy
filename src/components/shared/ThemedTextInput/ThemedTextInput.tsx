import { TextInput } from "react-native";
import useThemedTextInputStyles from "./useThemedTextInputStyles";

const ThemedTextInput = ({
  style,
  ...rest
}: React.ComponentPropsWithoutRef<typeof TextInput>) => {
  const styles = useThemedTextInputStyles();
  return (
    <TextInput
      style={[styles.input, style]}
      placeholderTextColor={styles.placeholder.color}
      {...rest}
    />
  );
};

export default ThemedTextInput;
