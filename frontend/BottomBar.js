import { Pressable, View, StyleSheet, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";

export default function BottomBar() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.bottomBar}>
        <Pressable
          style={styles.iconFrame}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Image
            source={require("./imgs/shelf_icon.png")}
            style={styles.icon}
            resizeMode="contain"
          />
        </Pressable>
        <Pressable
          onPress={() => {
            navigation.navigate("Camera");
          }}
        >
          <Image
            source={require("./imgs/upload_button.png")}
            style={styles.icon}
            resizeMode="contain"
          />
        </Pressable>
        <Pressable
          onPress={() => {
            /* replace with navigation */
          }}
        >
          <Image
            source={require("./imgs/user_button.png")}
            style={styles.icon}
            resizeMode="contain"
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center", // Adjust alignment as needed
    justifyContent: "flex-end", // Adjust alignment as needed
    paddingHorizontal: 30,
    marginStart: 30,
    flex: 0.8,
  },
  bottomBar: {
    // alignItems: "flex-start",
    justifyContent: "space-around",
    flexDirection: "row",
  },
  icon: {
    height: 50,
  },
  iconFrame: {
    borderRadius: 15,
  },
});
