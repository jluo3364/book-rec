import BookRow from "./BookRow";
import { Text, View, StyleSheet, Platform } from "react-native";
import { colors } from "./colors";
import BottomBar from "./BottomBar";

export default function Home({ navigation }) {
  const data = [
    require("./percy jackson.jpg"),
    require("./imgs/book.png"),
    require("./imgs/book.png"),
    require("./imgs/book.png"),
    require("./imgs/book.png"),
  ];
  const placeholder = [
    require("./imgs/book.png"),
    require("./imgs/book.png"),
    require("./imgs/book.png"),
    require("./imgs/book.png"),
    require("./imgs/book.png"),
  ];
  return (
    //set width depending on platform web vs mobile
    //web: 50% of screen width
    //mobile: 100% of screen width

    <View style={styles.container}>
      <View
        style={[
          styles.cardsContainer,
          { width: Platform.OS === "web" ? "60%" : "90%" },
        ]}
      >
        {/* <Text style={styles.appName}>Bookup </Text> */}
        <BookRow
          data={data}
          selectedBook={"./percy jackson.jpg"}
          sectionName={"Recent Books"}
        />
        <BookRow
          data={placeholder}
          selectedBook={"./percy jackson.jpg"}
          sectionName={"Recommendations"}
        />
        <BookRow
          data={placeholder}
          selectedBook={"./percy jackson.jpg"}
          sectionName={"Bookmarked"}
        />
      </View>
      <BottomBar />
    </View>
  );
}
const styles = StyleSheet.create({
  cardsContainer: {
    backgroundColor: colors.caramel,
    alignItems: "center", //horizontal center
    justifyContent: "space-between", //vertical center
    paddingVertical: 20,
    height: "85%",
    borderRadius: 22,
    padding: 10,
    gap: 20,
  },
  appName: {
    fontFamily: "DMSerifDisplay",
    fontSize: 36,
    color: colors.white,
  },
  container: {
    flex: 1,
    backgroundColor: colors.dustyred,
    alignItems: "center", //horizontal center
    // justifyContent: "center",
    gap: 10,
    paddingTop: 40,
  },
});
