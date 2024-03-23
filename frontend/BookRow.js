import {
  View,
  StyleSheet,
  FlatList,
  Pressable,
  Text,
  Image,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { colors } from "./colors.js";

export default function BookRow({ data, selectedBook }) {
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
    <View style={styles.rowContainer}>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.listContainer}
      >
        {renderBooks()}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    backgroundColor: colors.tan,
    height: 163,
    width: 290,
    borderRadius: 15,
  },
  listContainer: {
    height: 119,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  locationBar: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
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
    marginHorizontal: 5,
  },
});
