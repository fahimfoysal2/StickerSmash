import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View } from 'react-native';
import ImageViewer from './components/ImageViewer';
import Button from './components/Button';

const placeholderImage = require('./assets/images/background-image.png');

export default function App() {
  return (
    <View style={styles.container}>
      <ImageViewer imageSource={placeholderImage} />
      <Button label={"Pick image from gallery"} type={"imagePicker"}/>
      <Button label={"Use this image"}/>
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
});
