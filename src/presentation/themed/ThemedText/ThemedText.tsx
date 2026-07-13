import { Color } from "@styles/types";
import { ComponentPropsWithoutRef } from "react";
import { Text } from "react-native";
import { useThemedTextStyles } from "./useThemedTextStyles";

type TextTypes = keyof ReturnType<typeof useThemedTextStyles>;

interface TextProps {
  as?: TextTypes;
  color?: Color;
}

type ThemedTextProps = TextProps & ComponentPropsWithoutRef<typeof Text>;

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
