import { Pressable, View, StyleSheet, Image } from "react-native";

export default function BottomBar() {
  return (
    <View style={styles.bottomBar}>
      <Pressable
        onPress={() => {
          /* replace with navigation */
        }}
      >
        <Image
          source={require("./shelf_icon.svg")} // Specify the image source
          style={[styles.icon]}
        />
      </Pressable>
      <Pressable
        onPress={() => {
          /* replace with navigation */
        }}
      >
        <Image
          source={require("./upload_button.svg")} // Specify the image source
          style={[styles.icon]}
        />
      </Pressable>
      <Pressable
        onPress={() => {
          /* replace with navigation */
        }}
      >
        <Image
          source={require("./user_button.svg")} // Specify the image source
          style={[styles.icon]}
        />
      </Pressable>
    </View>
  );
}

styles = StyleSheet.create({
  bottomBar: {
    height: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    gap: 10,
  },
  icon: {},
});
