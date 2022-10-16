import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,  Image } from 'react-native';
import Texto from "./components/Texto/index";
import img from "./assets/viuva.jpg";
import Texto2 from "./components/Texto2/index"
import filme from "./assets/Filme.png"


export default function App() {
  return (
    <View style={styles.container}>
      <Texto/>
      <Image style={{height:200,width:200,}} source={img}/>
      <Texto2/>
      <Image style={{height:500,width:300,}} source={filme}/>
    </View>
    
      
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#530000",
    flex:1,
    alignItems:'center',
  
  },
});
