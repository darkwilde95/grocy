import CardContainer from "@/components/shared/CardContainer/CardContainer";
import ThemedScreenContainer from "@/components/shared/ThemedContainer.tsx/ThemedContainer";
import ThemedText from "@/components/shared/ThemedText/ThemedText";
import { useTheme } from "@/styles/ThemeContext";

const Index = () => {
  const { theme } = useTheme();

  return (
    <ThemedScreenContainer as="scroll" bounces={false} overScrollMode="never">
      <ThemedText as="screenTitle">Ajustes</ThemedText>
      <ThemedText>
        Gestiona tu cuenta y preferencias de la aplicación.
      </ThemedText>

      {/** PERFIL Y CUENTA */}
      <ThemedText as="sectionTitle" style={{ marginTop: theme.spacing.lg }}>
        PERFIL Y CUENTA
      </ThemedText>
      <CardContainer>
        <ThemedText>Test</ThemedText>
      </CardContainer>

      {/** NOTIFICACIONES */}
      <ThemedText as="sectionTitle" style={{ marginTop: theme.spacing.lg }}>
        NOTIFICACIONES
      </ThemedText>
      <CardContainer>
        <ThemedText>Test</ThemedText>
      </CardContainer>

      {/** GENERAL */}
      <ThemedText as="sectionTitle" style={{ marginTop: theme.spacing.lg }}>
        GENERAL
      </ThemedText>
      <CardContainer>
        <ThemedText>Test</ThemedText>
      </CardContainer>
    </ThemedScreenContainer>
  );
};

export default Index;
