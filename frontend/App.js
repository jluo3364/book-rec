import React from "react";
import Login from "./Login"; // Adjust the path according to your file structure
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { useFonts } from "expo-font";
import Home from "./Home";
import Camera from "./Camera";
import ResponsePage from "./ResponsePage";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { colors } from "./colors";

const Stack = createStackNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({
    DMSerifDisplay: require("./DMSerifDisplay-Regular.ttf"),
  });
  const blankCover = require("./imgs/book.png");
  const placeholderCover = require("./imgs/hp cover.jpg");
  const placeholderSummary =
    "The book is 'Harry Potter and the Sorcerer's Stone' by J.K. Rowling.\nIt is the first book in the Harry Potter series and tells the story of Harry Potter, an orphaned boy who discovers on his 11th birthday that he is a wizard and has been accepted to Hogwarts School of Witchcraft and Wizardry. Harry meets his best friends, Ron Weasley and Hermione Granger, and together they face many challenges, including learning magic, making new friends, and battling the evil Lord Voldemort.";
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ResponsePage">
        <Stack.Screen
          name="Login"
          component={Login}
          screenOptions={{
            title: "Home",
            headerTintColor: "white",
            headerStyle: { backgroundColor: "black" },
          }}
        />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Camera" component={Camera} />
        <Stack.Screen
          name="ResponsePage"
          component={ResponsePage}
          initialParams={{
            bookImg: placeholderCover,
            info: placeholderSummary,
          }}
        />
      </Stack.Navigator>

      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({});
