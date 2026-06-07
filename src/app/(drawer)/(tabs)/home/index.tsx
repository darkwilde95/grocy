import ThemedButton from "@/components/shared/ThemedButton/ThemedButton";
import ThemedScreenContainer from "@/components/shared/ThemedContainer.tsx/ThemedContainer";
import ThemedText from "@/components/shared/ThemedText/ThemedText";
import { View } from "react-native";

const Index = () => {
  return (
    <ThemedScreenContainer
      as="ScrollView"
      bounces={false}
      overScrollMode="never"
    >
      <ThemedText as="screenTitle">Home</ThemedText>
      <View style={{ flexDirection: "row", gap: 6, flexWrap: "wrap" }}>
        <ThemedButton label="Testing" color="primary" icon="home" />
        <ThemedButton
          as="default"
          label="Testing"
          color="success"
          icon="home"
        />
        <ThemedButton
          as="default"
          label="Testing"
          color="warning"
          icon="home"
        />
        <ThemedButton as="default" label="Testing" color="error" icon="home" />
        <ThemedButton
          as="outlined"
          label="Testing"
          color="primary"
          icon="home"
        />
        <ThemedButton
          as="outlined"
          label="Testing"
          color="success"
          icon="home"
        />
        <ThemedButton
          as="outlined"
          label="Testing"
          color="warning"
          icon="home"
        />
        <ThemedButton as="outlined" label="Testing" color="error" icon="home" />
      </View>
    </ThemedScreenContainer>
  );
};

export default Index;
