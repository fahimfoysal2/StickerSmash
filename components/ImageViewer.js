import { View, Image, StyleSheet } from "react-native";

export default function ImageViewer({imageSource}) {
    return (
        <View style={styles.imageContainer}>
            <Image source={imageSource} style={styles.background} />
        </View>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        marginVertical: 20,
    },
    background: {
        width: 320,
        height: 440,
        borderRadius: 10,
    },
});