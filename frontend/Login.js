import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  TextInput,
  Pressable,
  Text,
  StyleSheet,
  Image,
} from "react-native";
import { colors } from "./colors";

function Login() {
  const navigation = useNavigation();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSignup = async () => {
    try {
      const response = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data === "Login success") {
          console.log("login success");
          navigation.navigate("Home");
        } else {
          setErrorMessage(data.error || "An error occurred while signing up");
        }
      } else {
        setErrorMessage("An error occurred while signing up");
      }
    } catch (error) {
      console.error("Error signing up:", error);
      setErrorMessage("An error occurred while signing up");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentFrame}>
        <Image
          source={require("./imgs/icon.png")}
          style={{
            width: 130,
            height: 130,
            borderRadius: 30,
          }}
          resizeMode="contain"
        />
        <Text style={styles.appName}>BookUp</Text>
        <TextInput
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
        <TextInput
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={styles.input}
        />
        <Pressable onPress={handleSignup}>
          <Image
            source={require("./imgs/login_button.png")}
            style={styles.button}
            resizeMode="contain"
          />
        </Pressable>
        {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    padding: 20,
    backgroundColor: colors.dustyred,
    flex: 1,
  },
  input: {
    height: 40,
    width: 300,
    placeholderTextColor: colors.dustyred,
    fontFamily: "DMSerifDisplay",
    marginBottom: 12,
    padding: 10,
    borderRadius: 10,
    backgroundColor: colors.tan,
  },
  error: {
    color: colors.warning,
    fontFamily: "DMSerifDisplay",
  },
  button: {
    borderRadius: 12, // Border radius
    height: 50,
  },
  contentFrame: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  appName: {
    fontFamily: "DMSerifDisplay",
    fontSize: 36,
    color: colors.white,
    marginBottom: 20,
  },
});

export default Login;
