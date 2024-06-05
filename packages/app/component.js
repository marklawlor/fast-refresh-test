import { StatusBar } from "expo-status-bar";
import { useState } from "react"
import { StyleSheet, Text, View } from "react-native";

export default function Component() {
  const [state, setState] = useState(0);
  console.log("component")
  return (
    <View style={styles.container}>
      <Text testID="test" onPress={() => setState(state => state + 1)}>{`Clicked ${state} 4`}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
