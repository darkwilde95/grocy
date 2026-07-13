import {
  MultiCardContainer,
  SimpleCardContainer,
  ThemedButton,
  ThemedScreenContainer,
  ThemedText,
  ThemedTextInput,
} from "@themed/index";
import { View } from "react-native";

const Index = () => {
  return (
    <ThemedScreenContainer hasKeyboard>
      <ThemedText as="screenTitle">Home</ThemedText>
      <View style={{ flexDirection: "row", gap: 6, flexWrap: "wrap" }}>
        <ThemedButton label="Testing" color="primary" icon="home" />
        <ThemedButton
          styleType="default"
          label="Testing"
          color="success"
          icon="home"
        />
        <ThemedButton
          styleType="default"
          label="Testing"
          color="warning"
          icon="home"
        />
        <ThemedButton
          styleType="default"
          label="Testing"
          color="error"
          icon="home"
        />
        <ThemedButton
          styleType="outlined"
          label="Testing"
          color="primary"
          icon="home"
        />
        <ThemedButton
          styleType="outlined"
          label="Testing"
          color="success"
          icon="home"
        />
        <ThemedButton
          styleType="outlined"
          label="Testing"
          color="warning"
          icon="home"
        />
        <ThemedButton
          styleType="outlined"
          label="Testing"
          color="error"
          icon="home"
        />
      </View>
      <View style={{ marginTop: 12 }}>
        <SimpleCardContainer>
          <ThemedText>Test Text</ThemedText>
          <ThemedText>Test Text</ThemedText>
          <ThemedText>Test Text</ThemedText>
          <ThemedText>Test Text</ThemedText>
        </SimpleCardContainer>
        <SimpleCardContainer pressable onPress={() => console.log("pressed")}>
          <ThemedText>Test Text</ThemedText>
          <ThemedText>Test Text</ThemedText>
          <ThemedText>Test Text</ThemedText>
          <ThemedText>Test Text</ThemedText>
        </SimpleCardContainer>
        <MultiCardContainer>
          <ThemedText>Test Text</ThemedText>
          <ThemedText>Test Text</ThemedText>
          <ThemedText>Test Text</ThemedText>
          <ThemedText>Test Text</ThemedText>
        </MultiCardContainer>
        <MultiCardContainer
          pressable
          onItemPress={(index) => console.log(index)}
        >
          <ThemedText>Test Text</ThemedText>
          <ThemedText>Test Text</ThemedText>
          <ThemedText>Test Text</ThemedText>
          <ThemedText>Test Text</ThemedText>
        </MultiCardContainer>
      </View>
      <ThemedTextInput />
    </ThemedScreenContainer>
  );
};

export default Index;
