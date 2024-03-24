import React, { useState } from "react";
import { Text, Image, Pressable, StyleSheet, View } from "react-native"; // Added View for container
import { colors } from "./colors"; // Assuming colors are defined in a separate file
import { useFonts } from "expo-font";
import { ScrollView } from "react-native-gesture-handler";
import Button from "./Button";

export default function BookInfo({ img, info, prompts }) {
  const [fontsLoaded] = useFonts({
    DMSerifDisplay: require("./DMSerifDisplay-Regular.ttf"),
  });
  const [bookmarked, setBookmarked] = useState(false);

  return (
    <View>
      {img != null && (
        <View style={styles.book_bookmark}>
          <Image source={img} style={styles.image} resizeMode="center" />
          <Pressable onPress={() => setBookmarked(!bookmarked)}>
            <Image
              source={
                bookmarked
                  ? require("./imgs/selected_bookmark.png")
                  : require("./imgs/unselected_bookmark.png")
              }
              style={styles.bookmark}
              resizeMode="contain"
            />
          </Pressable>
        </View>
      )}
      <Text style={styles.text}>{info}</Text>
      {prompts && prompts.length > 0 && (
        <View style={styles.buttons}>
          {prompts.map((prompt, index) => (
            <Button key={index} text={prompt} onPress={() => {}} />
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  book_bookmark: {
    justifyContent: "flex-start",
    alignItems: "center", // Center vertically
    flexDirection: "row",
  },
  bookmark: {
    height: 50,
  },
  image: {
    width: 130,
    height: 190,
    borderRadius: 20,
  },

  similarBooks: {
    width: "90%",
    height: "20%",
    borderRadius: 0.2,
    backgroundColor: "lightblue",
    top: 10,
    left: 10,
  },
  sameAuthor: {
    width: "90%",
    height: "90%",
    borderRadius: 10,
    backgroundColor: "black",
  },
  text: {
    color: colors.white,
    fontSize: 14,
    fontFamily: "DMSerifDisplay",
    flex: 1,
    flexShrink: 1,
    flexWrap: "wrap",
    marginVertical: 10,
  },
  buttonText: {
    color: colors.dustyred,
    fontSize: 14,
    fontFamily: "DMSerifDisplay",
  },
  contentContainer: {
    alignSelf: "center",
    paddingTop: 10,
    width: "95%",
    height: "95%",
  },
  button: {
    backgroundColor: colors.tan,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: 30,
  },
  buttons: {
    flexDirection: "row",
    gap: 10,
    flexWrap: "wrap",
  },
});
