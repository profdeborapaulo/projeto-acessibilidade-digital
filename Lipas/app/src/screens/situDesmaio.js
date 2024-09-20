import React from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView, TouchableWithoutFeedback, Text } from 'react-native';


const DesmaioScreen = ({ navigation }) => {
  return (
    <View style = {styles.container}>
    <ScrollView>
       <Image source = {require('../assets/tituloscards/titulo_desmaio.png')} style = {styles.titulo}/>

    <View style = {styles.texto}>
       <Text style = {styles.paragrafo}> 
       O desmaio é caracterizado pela perda de consciência que pode ocorrer por diversos motivos. Como ajudar?
       </Text>
       <Text style = {styles.lista}> 
       - Deixei a pessoa confortável, afrouxando suas roupas e deitando ela, colocando suas pernas levemente 
       inclinadas para cima. Fazer isso vai ajudar na respiração e circulação sanguínea.
       </Text>
       <Text style = {styles.lista}> 
       - Em casos de vômitos, coloque a pessoa de lado ou de bruços, pois dessa forma o líquido não irá bloquear 
       os pulmões.
       </Text>
       <Text style = {styles.lista}> 
       - Não dê nenhum tipo de bebida para uma pessoa desmaiada! Como a pessoa está inconsciente, o líquido pode 
       acabar indo para os pulmões, por causa da perca de sentidos e não conseguir engolir.
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
    width: 230,
    height: 38,
    marginTop: 150,
    marginLeft: 90,
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

export default DesmaioScreen;