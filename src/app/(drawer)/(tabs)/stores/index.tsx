import ThemedScreenContainer from "@/components/shared/ThemedContainer.tsx/ThemedContainer";
import ThemedText from "@/components/shared/ThemedText/ThemedText";

const Index = () => {
  return (
    <ThemedScreenContainer
      as="ScrollView"
      bounces={false}
      overScrollMode="never"
    >
      <ThemedText as="screenTitle">Mis Tiendas</ThemedText>
    </ThemedScreenContainer>
  );
};

export default Index;
