import React from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView, TouchableWithoutFeedback, Text } from 'react-native';


const HemorragiaScreen = ({ navigation }) => {
  return (
    <View style = {styles.container}>
    <ScrollView>
       <Image source = {require('../assets/tituloscards/titulo_hemorragia.png')} style = {styles.titulo}/>

    <View style = {styles.texto}>
       <Text style = {styles.paragrafo}> 
       O sangramento pelo nariz é ocasionado quando há uma ruptura de um vaso sanguíneo. Mas o que fazer nesse 
       caso?
       </Text>
       <Text style = {styles.lista}> 
       - Deixe a cabeça levemente inclinada para frente e respire pela boca, dessa forma evitando que o sangue 
       seja engolido.
       </Text>
       <Text style = {styles.lista}> 
       - Pressione as narinas por cerca de 10 minutos.
       </Text>
       <Text style = {styles.lista}> 
       - Faça compressas frias sobre o nariz.
       </Text>
       <Text style = {styles.lista}> 
       - Procure um médico para saber se a perda de sangue foi grande.
       </Text>
       <Text style = {styles.paragrafo}> 
       A equipe Lipa's está disponibilizando links confiáveis para que você possa acessar tutoriais e sites de alta 
       qualidade e confiança, para que você aprenda da melhor maneira.
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
    width: 380,
    height: 28,
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

export default HemorragiaScreen;