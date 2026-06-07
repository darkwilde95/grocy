import { View } from "react-native";
import useCardContainerStyles from "./useCardContainerStyles";

const CardContainer = ({
  style,
  children,
  ...rest
}: React.ComponentProps<typeof View>) => {
  const styles = useCardContainerStyles();

  return (
    <View style={[styles.cardContainer, style]} {...rest}>
      {children}
    </View>
  );
};

export default CardContainer;
