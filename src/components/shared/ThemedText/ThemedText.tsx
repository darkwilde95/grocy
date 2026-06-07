import { useTheme } from "@/styles/ThemeContext";
import { Text } from "react-native";
import createStyles from "./themedTextStyles";

type TextTypes = keyof ReturnType<typeof createStyles>;
interface TextProps<T extends TextTypes> {
  as?: T;
}

type ThemedTextProps<T extends TextTypes> = TextProps<T> &
  React.ComponentPropsWithoutRef<typeof Text>;

const ThemedText = <T extends TextTypes = "default">({
  as,
  children,
  style,
  ...rest
}: ThemedTextProps<T>) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <Text style={[styles[as as TextTypes], style]} {...rest}>
      {children}
    </Text>
  );
};

export default ThemedText;
