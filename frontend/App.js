import React from "react";
import Login from "./Login"; // Adjust the path according to your file structure
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { colors } from "./colors";
import { useFonts } from "expo-font";
import Home from "./Home";
import Camera from "./Camera";
import BookInfo from "./BookInfo";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({
    DMSerifDisplay: require("./DMSerifDisplay-Regular.ttf"),
  });

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen name="BookInfo" component={BookInfo} />
      </Stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dustyred,
    alignItems: "center", //horizontal center
    // justifyContent: "center",
    gap: 10,
    paddingTop: 40,
  },
});
