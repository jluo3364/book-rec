import { Camera, CameraType } from 'expo-camera';
import { useState, useRef } from 'react'; // Import useRef
import { Button, StyleSheet, Text, Image, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const cameraRef = useRef(null);
  const [capturedPhotoUri, setCapturedPhotoUri] = useState(null);

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
  }

  const takePicture = async () => {
    if (cameraRef.current) {
      let photo = await cameraRef.current.takePictureAsync();
      setCapturedPhotoUri(photo.uri);

      const formData = new FormData();
      formData.append('photo', {
        uri: photo.uri,
        type: 'image/jpeg', // Adjust the type if needed
        name: 'photo.jpg', // You can use any name here
      });

      formData.append('photo', photo.uri);


      // Send the photo to the backend using Fetch API
      const response = await fetch('http://localhost:8083/upload', {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to upload photo');
      }
      console.log('Photo captured:', photo);

    } else {
      console.error('Camera reference is not available.');
    }
  };

   

  return (
    <View style={styles.container}>
      <Camera ref={cameraRef} style={styles.camera} type={type}>
        <View style={styles.buttonContainer}>
          <Button title="Flip Camera" onPress={toggleCameraType} style={styles.button} />
          <Button title="Take Picture" onPress={takePicture} />
        </View>
      </Camera>
      {capturedPhotoUri && (
        <View>
          <Text style={styles.text}>Captured photo:</Text>
          <TouchableOpacity onPress={() => setCapturedPhotoUri(null)}>
            <Text style={styles.text}>Close</Text>
          </TouchableOpacity>
          <Image source={{ uri: capturedPhotoUri }} style={{ width: 300, height: 300 }} />
        </View>
      )}
    </View>
  );

  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'black',
    marginTop: 10,
  },
});

