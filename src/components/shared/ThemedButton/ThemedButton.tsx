import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, Text, ViewStyle } from "react-native";
import useThemedButtonStyles from "./useThemedButtonStyles";

const buttonTypes = ["default", "outlined"] as const;
const buttonColors = ["primary", "success", "warning", "error"] as const;

type ButtonType = (typeof buttonTypes)[number];
type ButtonColor = (typeof buttonColors)[number];
type IconNameType = React.ComponentProps<typeof MaterialCommunityIcons>["name"];

type ConditionalContentType =
  | {
      label?: string;
      icon: IconNameType;
    }
  | {
      label: string;
      icon?: IconNameType;
    };

export interface ButtonProps {
  as?: ButtonType;
  color: ButtonColor;
}

type ThemedButtonProps = ConditionalContentType &
  ButtonProps &
  Omit<React.ComponentPropsWithoutRef<typeof Pressable>, "children">;

const ThemedButton = ({
  as = "default",
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
