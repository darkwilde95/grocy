import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, Text, ViewStyle } from "react-native";
import useThemedButtonStyles from "./themedButtonStyles";

const coloredOptions = ["default", "outlined"] as const;
const buttonColors = ["primary", "success", "warning", "error"] as const;

export interface ButtonProps {
  as: (typeof coloredOptions)[number];
  color: (typeof buttonColors)[number];
  label?: string;
  icon?: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
}

type ThemedButtonProps = ButtonProps &
  Omit<React.ComponentPropsWithoutRef<typeof Pressable>, "children">;

const ThemedButton = ({
  as,
  color,
  label,
  icon,
  style,
  ...rest
}: ThemedButtonProps) => {
  const styles = useThemedButtonStyles(as, color);

  return (
    <Pressable
      style={({ pressed }) => [
        styles.baseStyles,
        pressed && styles.pressedStyle,
        as === "default" && styles.default,
        as === "outlined" && styles.outlined,
        style as ViewStyle,
      ]}
      {...rest}
    >
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          color={styles.coloredText.color}
          size={styles.baseText.fontSize}
        />
      )}
      {label && (
        <Text style={[styles.baseText, styles.coloredText]}>{label}</Text>
      )}
    </Pressable>
  );
};

export default ThemedButton;
