import { Text, View } from "react-native";
import TextEstilo from './estilo';


const texto = () =>{
    return(
        <View style={TextEstilo.contanier}>
              <Text style={TextEstilo.TextStyle}>Atriz Famosa </Text>
        </View>
      
    );
}

export default texto;