import React from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView, TouchableWithoutFeedback, Text } from 'react-native';


const LeiMarianaScreen = ({ navigation }) => {
  return (
    <View style = {styles.container}>
    <ScrollView>
       <Image source = {require('../assets/tituloscards/titulo_leimariana.png')} style = {styles.titulo}/>

    <View style = {styles.texto}>
       <Text style = {styles.paragrafo}> 
       Criada por causa do caso ocorrido em 2020 com a modelo Mariana Ferrer, a lei N° 14.245 entrou em vigor em outubro de 2021. Esta lei visa proteger a 
       dignidade das vítimas em processos judiciais, especialmente em casos de crimes sexuais. Ela proíbe o uso de linguagem, informação ou materiais que possam 
       ferir a dignidade dessas vítimas durante a audiência. Além disso, ela estabelece que o juiz e as demais partes envolvidas, devem preservar pela integridade 
       física e psicológica das vítimas, sob responsabilização civil, penal e administrativa.
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
    width: 380,
    height: 70,
    marginTop: 150,
    marginLeft: 15,
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

export default LeiMarianaScreen;