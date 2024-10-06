import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  SafeAreaView,
  Button,
  Pressable,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";

export default function HomeScreen() {
  const [addNumber, setAddNumber] = useState(0);

  function addPlus() {
    setAddNumber(addNumber + 1);

    if (addNumber >= 20) {
      setAddNumber(0);
    }
  }

  function addMinus() {
    setAddNumber(addNumber - 1);
    if (addNumber <= 0) {
      setAddNumber(0);
    }
  }

  function resetButton() {
    setAddNumber(0);
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "gold" }}>
      <View
        style={{
          backgroundColor: "green",
          flex: 1,
          alignItems: "center",
          padding: 20,
          margin: 5,
        }}
      >
        <Text style={{ fontSize: 40, color: "gold" }}>{addNumber}</Text>

        <Button
          color={"silver"}
          title="Press here for plus"
          onPress={() => {
            addPlus();
          }}
        />

        <Button
          color={"silver"}
          title="Press here for minus"
          onPress={() => {
            addMinus();
          }}
        />

        {addNumber > 0 && (
          <Button
            color={"silver"}
            title="Press here for reset"
            onPress={() => {
              resetButton();
            }}
          />
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
