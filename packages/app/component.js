import { useState } from "react"
import { StyleSheet, Text, View } from "react-native";

export default function MyComponent() {
  const [state, setState] = useState(0);
  return (
    <View style={styles.container}>
      <Text testID="test" onPress={() => {
        setState(state => state + 1)
      }}>{
        `Component ${state}`
      }</Text>
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
