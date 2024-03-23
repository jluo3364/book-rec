import React from 'react';
import Login from './Login'; // Adjust the path according to your file structure
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "./colors";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bookup</Text>
      <Login />
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
