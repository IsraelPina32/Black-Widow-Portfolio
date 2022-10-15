import { Image, View } from "react-native";
import Viuva from "../assets/Atriz.jpg"
import estilos from "./estilo2"


const Imagem = () =>{
    <View style={estilos.contanier}>
        <Image style={estilos.Viuva}  souce={   Viuva }/>
    </View>
}