import React from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView, TouchableWithoutFeedback, Text } from 'react-native';


const ChoqueScreen = ({ navigation }) => {
  return (
    <View style = {styles.container}>
    <ScrollView>
       <Image source = {require('../assets/tituloscards/titulo_choque.png')} style = {styles.titulo}/>

    <View style = {styles.texto}>
       <Text style = {styles.paragrafo}> 
       Acidentes com eletricidade podem causar danos diversos, desde queimaduras leves ou complexas, até uma 
       parada cardíaca. Mas mantenha a calma que Lipa’s está aqui para mostrar o que fazer neste caso.
       </Text>
       <Text style = {styles.lista}> 
       - Antes de agir, desligue a chave geral para que você não seja atingido pelo choque.
       </Text>
       <Text style = {styles.lista}> 
       - Deixe a vítima confortável, afrouxando suas roupas para facilitar a circulação do ar e de sangue.
       </Text>
       <Text style = {styles.lista}> 
       - Se a vítima não estiver respirando, inicie a massagem cardíaca e a respiração boca a boca. Se você não 
       souber como fazer, lipa’s deixará disponível um link para o tutorial, ou ligue para a emergência 192 que 
       durante a ligação enquanto mandam o socorro até vocês, irão passar as instruções através da ligação. 
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
    width: 375,
    height: 60,
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

export default ChoqueScreen;