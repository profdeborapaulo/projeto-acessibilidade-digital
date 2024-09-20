import React from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView, TouchableWithoutFeedback, Text } from 'react-native';


const ConvulsoesScreen = ({ navigation }) => {
  return (
    <View style = {styles.container}>
    <ScrollView>
       <Image source = {require('../assets/tituloscards/titulo_convulsoes.png')} style = {styles.titulo}/>

    <View style = {styles.texto}>
       <Text style = {styles.paragrafo}> 
       As convulsões podem ser definidas como crises epiléticas. Diversas coisas podem ocasionar esta crise, 
       como febre alta, abuso de drogas, emoções intensas, exercícios pesados, hipoglicemia, AVC, entre outros.
       </Text>
       <Text style = {styles.paragrafo}> 
       Durante uma crise epiléptica pode acontecer uma série de contrações musculares violentas, palidez, perda 
       da consciência e salivação. Lipa’s irá te mostrar a maneira correta de auxiliar alguém que estiver em uma 
       crise epiléptica.
       </Text>
       <Text style = {styles.lista}> 
       - Afaste objetos e móveis que podem causar risco a vítima.
       </Text>
       <Text style = {styles.lista}> 
       - Tente colocar ela deitada de lado para evitar engasgos;.
       </Text>
       <Text style = {styles.lista}> 
       - Não interfira nos movimentos, nem coloque objetos em sua boca.
       </Text>
       <Text style = {styles.paragrafo}> 
       Por fim, quando a crise passar, mantenha a vítima deitada até ela recuperar a consciência. Caso a crise 
       demore mais de 5 minutos, ligue para a emergência.
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
    width: 330,
    height: 100,
    marginTop: 150,
    marginLeft: 40,
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

export default ConvulsoesScreen;