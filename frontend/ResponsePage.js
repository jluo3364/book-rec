import React from "react";
import { View, Text, ScrollView, StyleSheet, Platform } from "react-native";
import { colors } from "./colors";
import BottomBar from "./BottomBar";
import BookInfo from "./BookInfo";

export default ResponsePage = ({ route }) => {
  const { bookImg, info } = route.params;
  const prompts = ["Similar Books", "Same Author", "More in this Genre"];
  console.log("BookInfo: ", info);
  const similarBooks =
    "Here are some books similar to Harry Potter and the Sorcerer's Stone- \n\nThe Chronicles of Narnia by C.S. Lewis: This classic series follows the adventures of four siblings who discover a magical world called Narnia. Like Harry Potter, the Pevensie children must learn to use magic and fight against evil. \n\nThe Lord of the Rings by J.R.R. Tolkien: This epic fantasy novel tells the story of a group of hobbits who must destroy the One Ring in order to defeat the Dark Lord Sauron. Like Harry Potter, The Lord of the Rings features a group of friends who must work together to overcome great challenges. \n\n A Wizard of Earthsea by Ursula K. Le Guin: This fantasy novel follows the story of Ged, a young wizard who must learn to control his power and defeat a powerful shadow creature. Like Harry Potter, A Wizard of Earthsea explores themes of good versus evil and the importance of friendship. \n\nThe Magicians by Lev Grossman: This novel follows the story of Quentin Coldwater, a young man who discovers that magic is real and enrolls at a secret academy for magicians. Like Harry Potter, The Magicians explores the darker side of magic and the challenges of growing up. \n\n  Percy Jackson & the Olympians by Rick Riordan: This series follows the adventures of Percy Jackson, a young demigod who discovers that he is the son of Poseidon. Like Harry Potter, Percy Jackson must learn to use his powers and fight against evil forces. These are just a few examples of books that are similar to Harry Potter and the Sorcerer's Stone. If you enjoyed reading Harry Potter, I encourage you to check out some of these other great fantasy novels.";
  return (
    <View style={styles.container}>
      <View
        style={[
          styles.box,
          { width: Platform.OS === "web" ? "70%" : "90%" },
          { height: Platform.OS === "web" ? 560 : "85%" },
        ]}
      >
        <ScrollView
          style={styles.contentContainer}
          showsVerticalScrollIndicator={false}
        >
          <BookInfo img={bookImg} info={info} prompts={prompts} />
          <BookInfo img={null} info={similarBooks} />
        </ScrollView>
      </View>

      <BottomBar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: "center",
    backgroundColor: colors.dustyred,
  },
  box: {
    borderRadius: 22,
    padding: 10,
    backgroundColor: colors.caramel,
    // justifyContent: "flex-start",
  },
  contentContainer: {
    alignSelf: "center",
    paddingTop: 10,
    width: "95%",
    height: "95%",
  },
});
