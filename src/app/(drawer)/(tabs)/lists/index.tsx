import ThemedScreenContainer from "@/components/shared/ThemedContainer.tsx/ThemedContainer";
import ThemedText from "@/components/shared/ThemedText/ThemedText";

const Index = () => {
  return (
    <ThemedScreenContainer as="scroll" bounces={false} overScrollMode="never">
      <ThemedText as="screenTitle">Lists</ThemedText>
    </ThemedScreenContainer>
  );
};

export default Index;
