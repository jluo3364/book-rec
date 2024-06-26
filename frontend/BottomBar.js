import { Pressable, View, StyleSheet, Image } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Platform } from "react-native";

export default function BottomBar() {
  const navigation = useNavigation();
  return (
    <View
      style={[
        Platform.OS === "web" ? styles.webContainer : styles.mobileContainer,
      ]}
    >
      <View
        style={[
          {
            justifyContent:
              Platform.OS === "web" ? "space-between" : "space-around",
          },
          ,
          styles.bottomBar,
        ]}
      >
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
  webContainer: {
    justifyContent: "flex-end", // Adjust alignment as needed
    flex: 0.8,
    width: "60%",
  },
  mobileContainer: {
    // alignItems: "center", // Adjust alignment as needed
    justifyContent: "flex-end", // Adjust alignment as needed
    flex: 0.8,
    width: "80%",
  },
  bottomBar: {
    // alignItems: "flex-start",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  icon: {
    height: 50,
  },
});
