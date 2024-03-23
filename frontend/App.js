<<<<<<< HEAD
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Login from './Login'; // Adjust the path according to your file structure

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
=======
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { colors } from "./colors";
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Bookup</Text>
      <StatusBar style="auto" />
>>>>>>> 61c34ccaf1c1fbf007158bfd19f35ed50085a21b
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
