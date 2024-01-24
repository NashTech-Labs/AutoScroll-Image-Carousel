import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EventBanner from './Components/EventBanner/EventBanner';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Auto Scroll Image Carousel</Text>
      <EventBanner/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  heading:{
    fontSize: 24,
    fontWeight:700,
    textAlign: 'center',
    marginBottom: 10,
    marginTop: 10
  }
});
