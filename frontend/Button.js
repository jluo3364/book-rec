import { Text, Pressable, StyleSheet } from "react-native";
import { colors } from "./colors";
import { useFonts } from "expo-font";
import { useState } from "react";
//button component for response page
//format for the prompt option buttons

export default function Button({ text, onPress }) {
  const [fontsLoaded] = useFonts({
    DMSerifDisplay: require("./DMSerifDisplay-Regular.ttf"),
  });
  const [pressed, setPressed] = useState(false);
  const similarBooks =
    "Here are some books similar to Harry Potter and the Sorcerer's Stone- \n\nThe Chronicles of Narnia by C.S. Lewis: This classic series follows the adventures of four siblings who discover a magical world called Narnia. Like Harry Potter, the Pevensie children must learn to use magic and fight against evil. \n\nThe Lord of the Rings by J.R.R. Tolkien: This epic fantasy novel tells the story of a group of hobbits who must destroy the One Ring in order to defeat the Dark Lord Sauron. Like Harry Potter, The Lord of the Rings features a group of friends who must work together to overcome great challenges. \n\n A Wizard of Earthsea by Ursula K. Le Guin: This fantasy novel follows the story of Ged, a young wizard who must learn to control his power and defeat a powerful shadow creature. Like Harry Potter, A Wizard of Earthsea explores themes of good versus evil and the importance of friendship. \n\nThe Magicians by Lev Grossman: This novel follows the story of Quentin Coldwater, a young man who discovers that magic is real and enrolls at a secret academy for magicians. Like Harry Potter, The Magicians explores the darker side of magic and the challenges of growing up. \n\n  Percy Jackson & the Olympians by Rick Riordan: This series follows the adventures of Percy Jackson, a young demigod who discovers that he is the son of Poseidon. Like Harry Potter, Percy Jackson must learn to use his powers and fight against evil forces. These are just a few examples of books that are similar to Harry Potter and the Sorcerer's Stone. If you enjoyed reading Harry Potter, I encourage you to check out some of these other great fantasy novels.";

  const handlePress = () => {
    setPressed(true);
    onPress();
    //reset the button to unpressed after 0.1 seconds
    setTimeout(() => {
      setPressed(false);
    }, 500);
  };
  return (
    <Pressable
      style={[
        styles.button,
        { width: text.length * 9 },
        pressed && styles.pressed,
      ]}
      onPress={handlePress}
    >
      <Text style={styles.buttonText}>{text}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  buttonText: {
    color: colors.dustyred,
    fontSize: 14,
    fontFamily: "DMSerifDisplay",
  },
  button: {
    backgroundColor: colors.tan,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    height: 30,
  },
  pressed: {
    borderWidth: 2,
    borderColor: colors.dustyred,
  },
});
