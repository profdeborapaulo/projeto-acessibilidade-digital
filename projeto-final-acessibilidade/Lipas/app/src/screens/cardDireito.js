import React from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView, TouchableWithoutFeedback, Text, TouchableOpacity } from 'react-native';
import { useTheme } from './ThemeContext'; 

const DireitoScreen = ({ navigation }) => {
  const { theme, switchTheme } = useTheme();
  return (
    <View style = {styles.container}>
    <ScrollView>
       <Image source = {require('../assets/cards/cardDireito.png')} style = {styles.card}/>

    <View style = {styles.texto}>
       <Text style = {styles.paragrafo}>
       Os direitos das mulheres são essenciais para promover a igualdade de gênero e garantir 
       que todas as mulheres possam viver com oportunidades iguais, dignidade e segurança. Os 
       direitos das mulheres abrangem áreas como saúde, educação, trabalho e proteção contra a 
       violência e discriminação. É de extrema importância que as mulheres tenham conhecimento e 
       compreendam seus direitos, para poderem reivindicá-los e se defenderem. 
       </Text>
       <Text style = {styles.paragrafo}>
       Pensando nisso, o Lipa’s está aqui e separou algumas leis e direitos da mulher que você precisa 
       saber!
       </Text>

       <Text style = {styles.titulo}> - As Leis: </Text>

       <Text style = {styles.lei1} onPress={() => navigation.navigate('LeiMaria')}> • Lei Maria da Penha – N° 11.340/2006 </Text>
      
       <Text style = {styles.leis} onPress={() => navigation.navigate('LeiCarolina')}> • Lei Carolina Dieckmann – N° 12.737/2012 </Text>

       <Text style = {styles.leis} onPress={() => navigation.navigate('LeiMinuto')}> • Lei do Minuto Seguinte – N° 12.845/2013 </Text>

       <Text style = {styles.leis} onPress={() => navigation.navigate('LeiJoanna')}> • Lei Joanna Maranhão – N° 12.650/2012 </Text>

       <Text style = {styles.leis} onPress={() => navigation.navigate('LeiFeminicidio')}> • Lei do Feminicídio – Nº 13.104/2015 </Text>

       <Text style = {styles.leis} onPress={() => navigation.navigate('LeiImportunacao')}> • Lei da Importunação Sexual – N° 13.718/2018 </Text>

       <Text style = {styles.leis} onPress={() => navigation.navigate('LeiSinal')}> • Lei Sinal Vermelho Contra a Violência Doméstica – N° 14.188/2021 </Text>

       <Text style = {styles.leis} onPress={() => navigation.navigate('LeiMariana')}> • Lei Mariana Ferrer – N° 14.245/2021 </Text>

       <Text style = {styles.leis} onPress={() => navigation.navigate('LeiStalking')}> • Lei do Stalking – N°14.132/2021 </Text>


       <View style={styles.combo}>
          <Text style={styles.espaco}> </Text>
       </View>

    </View>

    </ScrollView>
 
    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
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
  card: {
    width: '100%',
    height: 550,
    marginTop: 30,
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
  titulo: {
    fontSize: 28,
    fontFamily: "Inter_700Bold",
    color: '#49070A',
    marginLeft: 20,
    marginTop: 50,
  },
  lei1: {
    fontSize: 24,
    fontFamily: "Inter_600SemiBold",
    color: '#791227',
    marginLeft: 20,
    marginTop: 30,
    textDecorationLine: "underline",
  },
  leis: {
    fontSize: 24,
    fontFamily: "Inter_600SemiBold",
    color: '#791227',
    marginLeft: 20,
    marginTop: 20,
    textDecorationLine: "underline",
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

export default DireitoScreen;