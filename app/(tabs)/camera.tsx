import Ionicons from "@expo/vector-icons/Ionicons";
import {
  StyleSheet,
  Image,
  Platform,
  View,
  Text,
  TouchableOpacity,
  ImageProps,
  Dimensions,
} from "react-native";

import { Camera, CameraView } from "expo-camera";
import { useEffect, useState } from "react";
import { CameraType } from "expo-camera/build/legacy/Camera.types";
import React from "react";
import BottomTabNavigator from "@/components/BottomTabNavigator";
import { navigation } from "@/utils/navigation";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { contentHeight, contentWidth } from "@/constants/Responsive";

type HomeScreenProps = {
  navigation: NativeStackNavigationProp<{
    Home: undefined; 
  }>;
};

export default function CameraComponent({navigation}:HomeScreenProps) {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState(CameraType.back);
  const [camera, setCamera] = useState<CameraView | null>(null);
  const [preview, setPreview] = useState<string | undefined>(undefined);
  const takePicture = async () => {
    if (camera) {
      const image = await camera.takePictureAsync();
      setPreview(image?.uri);
    }
  };


  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return (
      <View>
      <Text>No access to camera</Text>;
      <TouchableOpacity onPress={()=> navigation.navigate("Home")} >
        <Ionicons name="home" size={24}/>
      </TouchableOpacity>
      </View>
      )
  }
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.topButtonContainer}>
      <TouchableOpacity onPress={()=> navigation.navigate("Home")} style={{right:contentWidth*1.75}}>
        <Ionicons name="home" size={24}/>
      </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setType(
              type === CameraType.back ? CameraType.front : CameraType.back
            );
          }}
        >
          <Ionicons name="camera-reverse" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <CameraView
        style={styles.camera}
        ref={(ref) => {
          setCamera(ref);
        }}
      />
      <View style={styles.bottomButtonContainer}>
        {preview ? (
          <Image source={{ uri: preview }} style={styles.preview} />
        ) : (
          <Text style={styles.preview}>No preview</Text>
        )}
        <TouchableOpacity
          style={styles.flashButton}
          onPress={takePicture}
        ></TouchableOpacity>
      </View>
      
    </View>
  );
}
const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
  text: {
    color: "blue",
  },
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  camera: {
    flex: 0.98,
    width: "90%",
    height: "70%",
    alignSelf: "center",
  },
  topButtonContainer: {
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "7%",
  },
  bottomButtonContainer: {
    backgroundColor: "transparent",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "10%",
  },
  button: {
    alignItems: "center",
  },
  flashButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    borderWidth: 5,
    borderColor: "black",
  },
  preview: {
    width: "15%",
    height: "80%",
    position: "absolute",
    left: 20,
    overflow: "hidden",
    marginTop: 10,
  },
});
