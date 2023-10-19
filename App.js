import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import * as ImagePicker from "expo-image-picker";

import ImageViewer from './components/ImageViewer';
import Button from './components/Button';

const PlaceHolderImage = require("./assets/images/background-image.png");

export default function App() {
  const [showAppoptions, setShowAppOptions] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const pickImageAsync = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        setSelectedImage(result.assets[0].uri);
        // console.log(selectedImage);
        setShowAppOptions(true);
      } else {
        alert("you did not select any Image");
      }
    } catch (err) {
      console.error(err);
    }

  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer
          PlaceHolderImage={PlaceHolderImage}
          selectedImage={selectedImage}
        />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a Photo" theme='primary' onPress={pickImageAsync} />
        <Button label="Use this photo" onPress={() => setShowAppOptions(true)} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 60,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: 'center',
  }
});
