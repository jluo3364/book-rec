import React from "react";
// import Login from "./Login"; // Adjust the path according to your file structure
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { colors } from "./colors";
import { Platform } from "react-native";

import BookRow from "./BookRow";

export default function App() {
  const data = [
    require("./percy jackson.jpg"),
    require("./percy jackson.jpg"),
    require("./percy jackson.jpg"),
    require("./percy jackson.jpg"),
    require("./percy jackson.jpg"),
  ];
  return (
    <View style={styles.container}>
      <Text>Bookup</Text>
      <BookRow data={data} selectedBook={"./percy jackson.jpg"} />

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
  },
});
