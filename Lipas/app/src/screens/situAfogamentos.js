import React from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView, TouchableWithoutFeedback, Text } from 'react-native';


const AfogamentosScreen = ({ navigation }) => {
  return (
    <View style = {styles.container}>
    <ScrollView>
       <Image source = {require('../assets/tituloscards/titulo_afogamentos.png')} style = {styles.titulo}/>

    <View style = {styles.texto}>
       <Text style = {styles.paragrafo}> 
       Quando uma pessoa se afoga, suas vias aéreas ficam inundadas, causando a perda da respiração. 
       </Text>
       <Text style = {styles.paragrafo}> 
       Se você estiver na praia, procure o salva-vidas mais próximo para ajudar, mas caso você não 
       encontre ou não tenha um por perto, lipa’s irá te aconselhar de como agir nessa situação.
       </Text>
       <Text style = {styles.paragrafo}> 
       Se a vítima ainda estiver na água, leve consigo algo em que ela possa se segurar, evitando que 
       ela se puxe para baixo. Fora da água, mantenha a vítima deitada de lado para que a água possa sair, 
       enquanto isso ligue para a emergência. Caso a ajuda demore, durante a ligação irão passar as instruções 
       sobre o que fazer.
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
    width: 365,
    height: 36,
    marginTop: 150,
    marginLeft: 20,
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

export default AfogamentosScreen;