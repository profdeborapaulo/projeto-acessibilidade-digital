import React from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView, TouchableWithoutFeedback, Text } from 'react-native';


const QueimadurasScreen = ({ navigation }) => {
  return (
    <View style = {styles.container}>
    <ScrollView>
       <Image source = {require('../assets/tituloscards/titulo_queimaduras.png')} style = {styles.titulo}/>

    <View style = {styles.texto}>
       <Text style = {styles.paragrafo}> 
       As queimaduras são classificadas através do tamanho do dano causado, sendo primeiro grau, segundo grau 
       e terceiro grau. 
       </Text>
       <Text style = {styles.lista}> 
       • Queimadura de primeiro grau: afeta somente a camada mais externa da pele (epiderme).
       </Text>
       <Text style = {styles.lista}> 
       • Queimadura de segundo grau: Afeta a derme e a epiderme.
       </Text>
       <Text style = {styles.lista}> 
       • Queimadura de terceiro grau: Afeta o tecido abaixo da pele.
       </Text>
       <Text style = {styles.subtitulo}> Como agir? </Text>
       <Text style = {styles.lista}> 
       - Em casos de danos leves, deve-se lavar o local com água gelada, fazer compressas com soro fisiológico 
       e secar o local com um pano limpo. Caso apareçam bolhas, elas nunca devem ser furadas.
       </Text>
       <Text style = {styles.lista}> 
       - Se for necessário um curativo, ele deve ser feito com gaze, para evitar atrito e contaminação.
       </Text>
       <Text style = {styles.lista}> 
       - Se a queimadura for mais grave, procure a emergência o mais rápido para receber o tratamento adequado.
       </Text>
      

       <View style={styles.combo}>
          <Text style={styles.espaco}> </Text>
       </View>

    </View>

    </ScrollView>
 
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Socorros')}>
        <Image source = {require('../assets/setacircurlar.png')} style = {styles.botao} />
    </TouchableWithoutFeedback>

    </View>
  );
};


const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFEDE3',
    width: '100%',
    height: '100%',
  },
  botao: {
    width: 51,
    height: 50,
    marginLeft: 20,
    marginTop: 50,
    position: 'absolute',
  },
  titulo: {
    width: 345,
    height: 48,
    marginTop: 150,
    marginLeft: 30,
    marginBottom: 30,
  },
  texto: {
    width: 400,
  },
  paragrafo: {
    fontSize: 24,
    fontFamily: "Inter_500Medium",
    color: '#49070A',
    marginLeft: 20,
    marginTop: 20,
  },
  lista: {
    fontSize: 24,
    fontFamily: "Inter_500Medium",
    color: '#49070A',
    marginLeft: 20,
    marginTop: 5,
  },
  subtitulo: {
    fontSize: 26,
    fontFamily: "Inter_700Bold",
    color: '#49070A',
    marginLeft: 20,
    marginTop: 20,
  },
  combo: {
    flexDirection: 'row', // Alinha os itens na horizontal
    justifyContent: 'space-between', // Espaça os itens uniformemente
    padding: 15,
  },
  espaco: {
    width: '100%',
    height: 50,
  },
});

export default QueimadurasScreen;