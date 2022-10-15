import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Texto from "./Texto/index";
import Imagem from "./Imagem/index2"

export default function App() {
  return (
    <View style={styles.container}>
      <Texto/>
      <Imagem/>
      <Text>Open up App.js to start working on your app!</Text>
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  
  },
});
