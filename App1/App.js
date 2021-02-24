/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View,Text,StyleSheet,Button,ImageBackground,Alert} from 'react-native';
import LP from './componentes/Listaplana'

const img01 ='./assets/imagem/gamer.jpg'

/* posso adicinar <Imgbg> como um container   */
export default function App1(){
     return(
  <View>
    <ImageBackground
    source={require(img01)}
    style={estilos01.imagemFundo}
   >

     <View style={estilos01.alert1}>
     <Button
   title ="Mostrar Mensagem"
   onPress={()=>Alert.alert('React native')}
  />
  
     </View>
     </ImageBackground>
     <LP/>  
 </View>
  );
};


const estilos01=StyleSheet.create({
  imagemFundo:{
    flex:1,
    height:800,
     padding:10,
     resizeMode:'contain',
     width:365
    },
    alert1:{
      width:340,
      height:10,
      alignItems:'center'
    }

})
 
