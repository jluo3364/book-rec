import React from "react";
import { View, Image, Text, StyleSheet, Dimensions } from "react-native";

import { useNavigation } from "@react-navigation/native";

const BookInfo = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View styl e={styles.box} />

      <View style={styles.imageContainer}>
        <Image source={require("./percy jackson.jpg")} style={styles.image} />
      </View>
    </View>
  );
};

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#654348",
  },
  box: {
    width: width * 0.9, // Adjust this percentage to change the box width
    height: height * 0.9, // Maintain aspect ratio by setting height based on width
    borderRadius: (width * 0.8) / 10, // Adjust the rounding based on box width
    backgroundColor: "#ECE2D0",
  },
  imageContainer: {
    position: "absolute",
    bottom: height * 0.05, // Adjust this percentage to change the distance from the bottom
    //alignItems: 'center',
    top: 0, // Adjust this value to position the box from the top
    left: height * 0.05,
  },
  image: {
    width: width * 0.4, // Adjust this percentage to change the image width
    height: height * 0.7, // Maintain aspect ratio by setting height based on width
    resizeMode: "contain", // Adjust this property as needed
  },
  similarBooks: {
    width: width * 0.9, // Adjust this percentage to change the box width
    height: height * 0.2, // Maintain aspect ratio by setting height based on width
    borderRadius: 0.2, // Adjust the rounding based on box width
    backgroundColor: "light-blue",
    top: 10,
    left: 10,
  },
  sameAuthor: {
    width: width * 0.9, // Adjust this percentage to change the box width
    height: height * 0.9, // Maintain aspect ratio by setting height based on width
    borderRadius: (width * 0.8) / 10, // Adjust the rounding based on box width
    backgroundColor: "black",
  },
  text: {
    color: "red",
    fontSize: 20,
    fontWeight: "bold",
  },
  container1: {},
  container2: {},
});

export default BookInfo;
