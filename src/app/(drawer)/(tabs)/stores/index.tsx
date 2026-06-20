import ThemedScreenContainer from "@/components/shared/ThemedScreenContainer.tsx/ThemedContainer";
import ThemedText from "@/components/shared/ThemedText/ThemedText";

const Index = () => {
  return (
    <ThemedScreenContainer bounces={false} overScrollMode="never">
      <ThemedText as="screenTitle">Mis Tiendas</ThemedText>
    </ThemedScreenContainer>
  );
};

export default Index;
