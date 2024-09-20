import React from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView, TouchableWithoutFeedback, Text } from 'react-native';


const LeiStalkingScreen = ({ navigation }) => {
  return (
    <View style = {styles.container}>
    <ScrollView>
       <Image source = {require('../assets/tituloscards/titulo_leistalking.png')} style = {styles.titulo}/>

    <View style = {styles.texto}>
       <Text style = {styles.paragrafo}> 
       A Lei do stalking adicionada ao código penal brasileiro como lei N° 14.132, foi sancionada em 31 de março de 2021. Esta lei estabelece como crime o ato de 
       perseguir alguém, ameaçando a integridade física e psicológica, restringindo o direito de locomoção ou, de qualquer forma, invadindo ou perturbando sua privacidade, 
       como crime de stalking.
       </Text>
       <Text style = {styles.paragrafo}> 
       A pena dessa lei é de  6 meses a 2 anos, com multa. Entretanto, sua pena pode ser aumentada em casos de:
       </Text>
       <Text style = {styles.lista}> 
       - Contra criança, adolescente ou idoso;
       </Text>
       <Text style = {styles.lista}> 
       - Contra mulher, por razões da condição do sexo feminino;
       </Text>
       <Text style = {styles.lista}> 
       - Com o concurso de duas ou mais pessoas;
       </Text>
       <Text style = {styles.lista}> 
       - Com uso de arma.
       </Text>
       <Text style = {styles.paragrafo}> 
       A lei visa proteger as pessoas de um comportamento obsessivo e persistente que possa causar qualquer forma 
       de sofrimento.
       </Text>
       <Text style = {styles.paragrafo}> 
       Se você tem um stalker, denuncie!
       </Text>

       <View style={styles.combo}>
          <Text style={styles.espaco}> </Text>
       </View>

    </View>

    </ScrollView>
 
    <TouchableWithoutFeedback onPress={() => navigation.navigate('Direito')}>
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
    width: 315,
    height: 75,
    marginTop: 150,
    marginLeft: 50,
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

export default LeiStalkingScreen;