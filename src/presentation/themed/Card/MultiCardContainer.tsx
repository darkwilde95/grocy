import { Color } from "@styles/types";
import { Children, Fragment, ReactNode } from "react";
import { GestureResponderEvent, Pressable, View } from "react-native";
import { SimpleCardContainer } from "./SimpleCardContainer";
import { ViewProps } from "./types";
import { useCardContainerStyles } from "./useCardContainerStyles";

type MultiStatic = ViewProps & {
  pressable?: false;
  color?: Color;
  children: ReactNode;
};

type MultiPressable = ViewProps & {
  pressable: true;
  color?: Color;
  children: ReactNode;
  onItemPress: (index: number, e: GestureResponderEvent) => void;
};

type MultiCardContainerProps<P extends boolean | undefined> = (P extends true
  ? MultiPressable
  : MultiStatic) & { pressable?: P };

export const MultiCardContainer = <P extends boolean | undefined = undefined>(
  props: MultiCardContainerProps<P>,
) => {
  const internalProps = props as MultiStatic | MultiPressable;
  const internalColor = internalProps.color ?? "surfaceVariant";
  const styles = useCardContainerStyles(internalColor);
  const childrenSize = Children.count(props.children);

  const wrapperItem = (content: ReactNode, index: number) => {
    if (internalProps.pressable === true) {
      return (
        <Pressable
          style={({ pressed }) => [styles.item, pressed && styles.pressed]}
          onPress={(e) => internalProps.onItemPress(index, e)}
        >
          {content}
        </Pressable>
      );
    } else {
      return <View style={styles.item}>{content}</View>;
    }
  };

  return (
    <SimpleCardContainer
      color={internalColor}
      pressable={false}
      style={[{ padding: 0 }, internalProps.style]}
    >
      {internalProps.children &&
        Children.map(internalProps.children, (child, index) => (
          <Fragment key={index}>
            {wrapperItem(child, index)}
            {index < childrenSize - 1 && <View style={styles.divider} />}
          </Fragment>
        ))}
    </SimpleCardContainer>
  );
};
