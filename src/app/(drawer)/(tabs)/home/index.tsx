import CardContainer from "@/components/shared/CardContainer/CardContainer";
import ThemedButton from "@/components/shared/ThemedButton/ThemedButton";
import ThemedScreenContainer from "@/components/shared/ThemedContainer.tsx/ThemedContainer";
import ThemedText from "@/components/shared/ThemedText/ThemedText";
import { View } from "react-native";

const Index = () => {
  return (
    <ThemedScreenContainer as="scroll" bounces={false} overScrollMode="never">
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
      <View style={{ marginTop: 12 }}>
        <CardContainer type="default" style={{}}>
          <ThemedText>Test Default</ThemedText>
        </CardContainer>
        <CardContainer
          type="pressable"
          onPress={() => console.log("Pressed")}
          style={({ pressed }) => []}
        >
          <ThemedText>Test Pressed</ThemedText>
        </CardContainer>
      </View>
    </ThemedScreenContainer>
  );
};

export default Index;
