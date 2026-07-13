import { ThemedScreenContainer, ThemedText } from "@themed/index";

const Index = () => {
  return (
    <ThemedScreenContainer bounces={false} overScrollMode="never">
      <ThemedText as="screenTitle">Mis Tiendas</ThemedText>
    </ThemedScreenContainer>
  );
};

export default Index;
