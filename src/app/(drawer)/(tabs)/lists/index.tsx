import { ThemedScreenContainer, ThemedText } from "@presentation/shared";

const Index = () => {
  return (
    <ThemedScreenContainer bounces={false} overScrollMode="never">
      <ThemedText as="screenTitle">Lists</ThemedText>
    </ThemedScreenContainer>
  );
};

export default Index;
