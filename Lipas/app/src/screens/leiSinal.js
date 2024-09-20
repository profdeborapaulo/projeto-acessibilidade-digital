import React from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView, TouchableWithoutFeedback, Text } from 'react-native';


const LeiSinalScreen = ({ navigation }) => {
  return (
    <View style = {styles.container}>
    <ScrollView>
       <Image source = {require('../assets/tituloscards/titulo_leisinal.png')} style = {styles.titulo}/>

    <View style = {styles.texto}>
       <Text style = {styles.paragrafo}> 
       Com o objetivo de combater a violência doméstica familiar contra as mulheres, a lei N° 14.245 foi sancionada em 28 de julho de 2021. 
       A lei Sinal Vermelho Contra a Violência Doméstica foi criada devido ao aumento de denúncias das vítimas de violência e feminicídios 
       durante o isolamento da pandemia em 2020. 
       </Text>
       <Text style = {styles.paragrafo}> 
       O “Sinal Vermelho” foi uma ideia que começou como uma campanha da Associação dos Magistrados Brasileiros (AMB) e do Conselho Nacional de 
       Justiça em 2020. Esta campanha teve uma grande repercussão e visibilidade, o que a fez se tornar uma lei mais tarde. 
       </Text>
       <Text style = {styles.subtitulo}> Como ela funciona? </Text>
       <Text style = {styles.lista}> 
       - O sinal de “X” é feito na palma da mão com batom vermelho (ou qualquer outro material) ou em um pedaço de papel, aquilo que for mais fácil, 
         isso fará com que a pessoa que está te atendendo reconheça o sinal e de forma discreta promova o acionamento da polícia militar.
       </Text>
       <Text style = {styles.lista}> 
       - Os atendentes recebem um tutorial mostrando como eles devem agir nesses casos, com as orientações necessárias para atender a vítima e o 
         acionamento da polícia militar, de acordo com o protocolo.
       </Text>
       <Text style = {styles.lista}> 
       - Assim que a vítima mostra o sinal, de maneira sutil o atendente irá coletar as informações da vítima (nome, endereço, entre outros) e logo em 
         seguida acionar a polícia. Se possível, o atendente deve conduzir a vítima para um lugar reservado, onde deverá aguardar pela polícia. Tudo ocorre 
         de forma sigilosa, e o atendente não será chamado para a delegacia como testemunha.
       </Text>
       <Text style = {styles.lista}> 
       - Em caso de flagrante, a polícia encaminha a vítima e o agressor para a delegacia. Caso contrário, a delegacia será informada por meio do próprio 
         sistema para dar entrada em um boletim de ocorrência e pedido de medida protetiva.
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
    width: 400,
    height: 140,
    marginTop: 150,
    marginLeft: 6,
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

export default LeiSinalScreen;