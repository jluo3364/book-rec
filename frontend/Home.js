import BookRow from "./BookRow";
import { View, StyleSheet, Platform } from "react-native";
import { colors } from "./colors";

export default function Home() {
  const data = [
    require("./percy jackson.jpg"),
    require("./percy jackson.jpg"),
    require("./percy jackson.jpg"),
    require("./percy jackson.jpg"),
    require("./percy jackson.jpg"),
  ];
  return (
    //set width depending on platform web vs mobile
    //web: 50% of screen width
    //mobile: 100% of screen width

    <View
      style={[
        styles.cardsContainer,
        { width: Platform.OS === "web" ? "60%" : "90%" },
      ]}
    >
      <BookRow
        data={data}
        selectedBook={"./percy jackson.jpg"}
        sectionName={"Recent Books"}
      />
      <BookRow
        data={data}
        selectedBook={"./percy jackson.jpg"}
        sectionName={"Recommendedations"}
      />
      <BookRow
        data={data}
        selectedBook={"./percy jackson.jpg"}
        sectionName={"Bookmarked"}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  cardsContainer: {
    backgroundColor: colors.caramel,
    alignItems: "center", //horizontal center
    justifyContent: "center", //vertical center
    gap: 20,
    height: "70%",
    borderRadius: 22,
    padding: 10,
  },
});
