import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "./colors";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bookup</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dustyred,
    alignItems: "center",
    justifyContent: "center",
  },
});
