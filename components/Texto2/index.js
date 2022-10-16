import { Text, View } from "react-native";
import TextoEstilo from "../Texto2/estilo";


const Texto = () =>{
    return(
        <View style={TextoEstilo.contanier}>
                <Text style={TextoEstilo.TextStyle}>Sobre a Atriz</Text>

                <text style={{height:40,}}>Sua vida</text>

                <text  style={{height:80,}}>Scarlett Ingrid Johansson (Nova Iorque, 22 de novembro de 1984), mais conhecida como Scarlett Johansson, é uma atriz, cantora e modelo 
                americana de ascendência dinamarquesa e polonesa. Ela fez sua estréia no cinema em North (1994).</text>

                <text style={{height:80,}}> Melhor Atriz por sua atuação em Manny lamp, Lo (1996)</text>

              

        </View>
    );
}

export default Texto;