import { useTheme } from "@providers/Theme";
import {
  SimpleCardContainer,
  ThemedScreenContainer,
  ThemedText,
} from "@themed/index";

const Index = () => {
  const { theme } = useTheme();

  return (
    <ThemedScreenContainer bounces={false} overScrollMode="never">
      <ThemedText as="screenTitle">Ajustes</ThemedText>
      <ThemedText>
        Gestiona tu cuenta y preferencias de la aplicación.
      </ThemedText>

      {/** PERFIL Y CUENTA */}
      <ThemedText as="sectionTitle" style={{ marginTop: theme.spacing.lg }}>
        PERFIL Y CUENTA
      </ThemedText>
      <SimpleCardContainer>
        <ThemedText>Test</ThemedText>
      </SimpleCardContainer>

      {/** NOTIFICACIONES */}
      <ThemedText as="sectionTitle" style={{ marginTop: theme.spacing.lg }}>
        NOTIFICACIONES
      </ThemedText>
      <SimpleCardContainer>
        <ThemedText>Test</ThemedText>
      </SimpleCardContainer>

      {/** GENERAL */}
      <ThemedText as="sectionTitle" style={{ marginTop: theme.spacing.lg }}>
        GENERAL
      </ThemedText>
      <SimpleCardContainer>
        <ThemedText>Test</ThemedText>
      </SimpleCardContainer>
    </ThemedScreenContainer>
  );
};

export default Index;
