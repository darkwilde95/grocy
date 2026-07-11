import { ThemedScreenContainer, ThemedText } from "@presentation/shared";

const Index = () => {
  return (
    <ThemedScreenContainer bounces={false} overScrollMode="never">
      <ThemedText as="screenTitle">Mis Tiendas</ThemedText>
    </ThemedScreenContainer>
  );
};

export default Index;
