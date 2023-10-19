import { StyleSheet, Image } from "react-native";

export default function ImageViewer({ PlaceHolderImage, selectedImage }) {
    const imageSource = selectedImage ? {uri: selectedImage, headers: {'accept': "image/*"}} : PlaceHolderImage;
    // console.log(imageSource);
    return (
        <Image source={imageSource} style={styles.image} />
    );
};

const styles = StyleSheet.create({
    image: {
        width: 320,
        height: 480,
        borderRadius: 10,
    }
});