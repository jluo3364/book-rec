import React from "react";
import Login from "./Login"; // Adjust the path according to your file structure
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { colors } from "./colors";
import { useFonts } from "expo-font";
import Home from "./Home";
import BottomBar from "./BottomBar";

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSerifDisplay: require("./DMSerifDisplay-Regular.ttf"),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.appName}>Bookup</Text>
      <Home />
      <BottomBar />
      {/* <Login /> */}
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
    gap: 10,
  },
  appName: {
    fontFamily: "DMSerifDisplay",
    fontSize: 36,
    color: colors.white,
  },
});
