import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, View } from 'react-native';
import ImageViewer from './components/ImageViewer';

const placeholderImage = require('./assets/images/background-image.png');

export default function App() {
  return (
    <View style={styles.container}>
      <ImageViewer imageSource={placeholderImage} />
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
