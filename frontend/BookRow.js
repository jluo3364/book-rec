import {
  View,
  StyleSheet,
  Platform,
  Pressable,
  Text,
  Image,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { colors } from "./colors.js";
import { useFonts } from "expo-font";

export default function BookRow({ data, selectedBook, sectionName }) {
  const [fontsLoaded] = useFonts({
    DMSerifDisplay: require("./DMSerifDisplay-Regular.ttf"),
  });

  const Book = ({ book, onPress }) => {
    const outline = book === selectedItem ? styles.buttonOutline : {};
    return (
      <Pressable onPress={onPress} style={({ pressed }) => [styles.pressed]}>
        <Image
          source={book} // Specify the image source
          style={[outline, styles.image]}
        />
      </Pressable>
    );
  };
  const [selectedItem, setSelectedItem] = useState(selectedBook);
  const renderBooks = () => {
    return data.map((item, index) => (
      <Book key={index} book={item} onPress={() => setSelectedItem(item)} />
    ));
  };

  return (
    <View style={[styles.rowContainer, { width: "95%" }]}>
      <Text style={styles.sectionName}>{sectionName}</Text>
      {/* <View style={styles.scrollViewFrame}> */}
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.listContainer}
      >
        {renderBooks()}
      </ScrollView>
      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    backgroundColor: colors.tan,
    height: 170,
    borderRadius: 15,
    gap: 7,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  listContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 7,
  },
  pressed: {},
  buttonOutline: {
    borderWidth: 2, // Set the border width
    borderRadius: 14,
    borderColor: colors.caramel, // Set the border color
  },
  image: {
    width: 76,
    height: 119,
    borderRadius: 14,
  },
  sectionName: {
    fontFamily: "DMSerifDisplay",
    fontSize: 18,
    color: colors.dustyred,
  },
  scrollViewFrame: {
    height: 119,
    width: 310,
    alignItems: "center",
    justifyContent: "center",
  },
});
