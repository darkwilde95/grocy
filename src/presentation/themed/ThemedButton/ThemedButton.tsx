import { MaterialCommunityIcons } from "@expo/vector-icons";
import { ComponentProps, ComponentPropsWithoutRef } from "react";
import { Pressable, Text, ViewStyle } from "react-native";
import { ButtonColor, ButtonType } from "./types";
import { useThemedButtonStyles } from "./useThemedButtonStyles";

type IconNameType = ComponentProps<typeof MaterialCommunityIcons>["name"];

type ConditionalContentType =
  | {
      label?: string;
      icon: IconNameType;
    }
  | {
      label: string;
      icon?: IconNameType;
    };

interface ButtonProps {
  styleType?: ButtonType;
  color: ButtonColor;
}

type ThemedButtonProps = ConditionalContentType &
  ButtonProps &
  Omit<ComponentPropsWithoutRef<typeof Pressable>, "children">;

export const ThemedButton = ({
  styleType = "default",
  color,
  label,
  icon,
  style,
  ...rest
}: ThemedButtonProps) => {
  const styles = useThemedButtonStyles(styleType, color);

  return (
    <Pressable
      style={({ pressed }) => [
        styles.baseStyles,
        pressed && styles.pressedStyle,
        styleType === "default" && styles.default,
        styleType === "outlined" && styles.outlined,
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
