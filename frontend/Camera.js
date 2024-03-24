import { Camera, CameraType } from "expo-camera";
import { useState, useRef } from "react"; // Import useRef
// import { useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  Pressable,
  View,
} from "react-native";
import { colors } from "./colors";
import { useNavigation } from "@react-navigation/native";

export default function App() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef(null);
  const [capturedPhotoUri, setCapturedPhotoUri] = useState(null);
  const [responseData, setResponseData] = useState(null);
  const navigation = useNavigation();

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      let photo = await cameraRef.current.takePictureAsync();
      setCapturedPhotoUri(photo.uri);

      const formData = new FormData();
      formData.append("photo", {
        uri: photo.uri,
        type: "image/jpeg", // Adjust the type if needed
        name: "photo.jpg", // You can use any name here
      });

      formData.append("photo", photo.uri);

      // Send the photo to the backend using Fetch API
      const response = await fetch("http://localhost:8081/upload", {
        method: "POST",
        body: formData,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (!response.ok) {
        throw new Error("Failed to upload photo");
      }
      console.log("Photo captured:", photo);

      // Get the response from the backend
      const getDataResponse = await fetch(
        "http://localhost:8081/generate-content"
      );
      if (!getDataResponse.ok) {
        throw new Error("Failed to get data from gemini api");
      }
      const data = await getDataResponse.json();
      setResponseData(data);
    } else {
      console.error("Camera reference is not available.");
    }
  };
  // useEffect(() => {
  //   console.log("api generated response:", responseData);
  // }, [responseData]);
  return (
    <View style={styles.container}>
      <Camera ref={cameraRef} style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <Button
            title="Flip Camera"
            onPress={toggleCameraType}
            style={styles.button}
          />
          <Button
            title="Take Picture"
            onPress={takePicture}
            style={styles.button}
          />
        </View>
      </Camera>
      {capturedPhotoUri && (
        <View style={{ marginVertical: 10 }}>
          <Text style={styles.normalText}>captured photo:</Text>
          <Pressable
            onPress={() =>
              navigation.navigate("ResponsePage", {
                bookImg: capturedPhotoUri,
                info: responseData,
              })
            }
            style={styles.closebutton}
          >
            <Text style={styles.text}>use this photo</Text>
          </Pressable>
          <Image
            source={{ uri: capturedPhotoUri }}
            style={{ width: 300, height: 300 }}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.dustyred,
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    flex: 0.8,
    width: "100%",
    // height:""
  },
  closebutton: {
    backgroundColor: colors.tan,
    borderRadius: 12,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  button: {
    flex: 1,
    alignSelf: "flex-end",
    alignItems: "center",
    backgroundColor: colors.tan,
  },
  text: {
    fontSize: 18,
    color: colors.dustyred,
    marginTop: 10,
  },
  normalText: {
    fontSize: 18,
    color: colors.tan,
    marginTop: 10,
  },
});
