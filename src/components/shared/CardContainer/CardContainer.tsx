import { useTheme } from "@/styles/ThemeContext";
import { View } from "react-native";
import createStyles from "./cardContainerStyles";

const CardContainer = ({
  style,
  children,
  ...rest
}: React.ComponentProps<typeof View>) => {
  const { theme } = useTheme();
  const styles = createStyles(theme);

  return (
    <View style={[styles.cardContainer, style]} {...rest}>
      {children}
    </View>
  );
};

export default CardContainer;
