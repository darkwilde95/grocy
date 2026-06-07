import { Text } from "react-native";
import {
  TextTypes,
  default as useThemedTextStyles,
} from "./useThemedTextStyles";

interface TextProps {
  as?: TextTypes;
}

type ThemedTextProps = TextProps & React.ComponentPropsWithoutRef<typeof Text>;

const ThemedText = ({
  as = "default",
  children,
  style,
  ...rest
}: ThemedTextProps) => {
  const styles = useThemedTextStyles();

  return (
    <Text style={[styles[as as TextTypes], style]} {...rest}>
      {children}
    </Text>
  );
};

export default ThemedText;
