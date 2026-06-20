import MultiCardContainer from "@/components/shared/Card/MultiCardContainer";
import SimpleCardContainer from "@/components/shared/Card/SimpleCardContainer";
import ThemedButton from "@/components/shared/ThemedButton/ThemedButton";
import ThemedScreenContainer from "@/components/shared/ThemedScreenContainer.tsx/ThemedScreenContainer";

import ThemedText from "@/components/shared/ThemedText/ThemedText";
import ThemedTextInput from "@/components/shared/ThemedTextInput/ThemedTextInput";
import { View } from "react-native";

const Index = () => {
  return (
    <ThemedScreenContainer hasKeyboard>
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
