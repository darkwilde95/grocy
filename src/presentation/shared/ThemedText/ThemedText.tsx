import { Text } from "react-native";
import {
  TextTypes,
  default as useThemedTextStyles,
} from "./useThemedTextStyles";

export type TextColorType =
  | "primary"
  | "onPrimary"
  | "primaryFixed"
  | "success"
  | "onSuccess"
  | "warning"
  | "onWarning"
  | "error"
  | "onError"
  | "surface"
  | "onSurface"
  | "surfaceVariant"
  | "onSurfaceVariant"
  | "surfaceDisabled"
  | "onSurfaceDisabled";

interface TextProps {
  as?: TextTypes;
  color?: TextColorType;
}

type ThemedTextProps = TextProps & React.ComponentPropsWithoutRef<typeof Text>;

export const ThemedText = ({
  as = "default",
  children,
  style,
  color,
  ...rest
}: ThemedTextProps) => {
  const styles = useThemedTextStyles(color);

  return (
    <Text style={[styles[as as TextTypes], style]} {...rest}>
      {children}
    </Text>
  );
};
