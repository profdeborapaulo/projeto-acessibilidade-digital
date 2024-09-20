import React from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView, TouchableWithoutFeedback, Text } from 'react-native';


const LeiMariaScreen = ({ navigation }) => {
  return (
    <View style = {styles.container}>
    <ScrollView>
       <Image source = {require('../assets/tituloscards/titulo_leimaria.png')} style = {styles.titulo}/>

    <View style = {styles.texto}>
       <Text style = {styles.paragrafo}>
       Criada em 7 de Agosto de 2006 como lei n° 11.340, ganhou esse nome devido à luta da farmacêutica, 
       Maria da Penha, para ver seu agressor condenado. Esta lei foi criada com o objetivo de proteger a 
       mulher da violência doméstica e familiar no Brasil.
       </Text>
       <Text style = {styles.paragrafo}>
       A lei Maria da Penha está estruturada em 46 artigos (com diversas leis complementares) distribuídos 
       em sete títulos que estabelecem:
       </Text>
       <Text style = {styles.lista}>
       - A quem se destina;
       </Text>
       <Text style = {styles.lista}>
       - Os tipos de violência;
       </Text>
       <Text style = {styles.lista}>
       - Medidas de prevenção e assistência;
       </Text>
       <Text style = {styles.lista}>
       - Medidas protetivas de urgência;
       </Text>
       <Text style = {styles.lista}>
       - Criação de equipamentos públicos, como casas de acolhimento e delegacias especializadas, entre outras medidas.
       </Text>
       <Text style = {styles.paragrafo}>
       É importante destacar que esta lei inclui todas as pessoas que se identificam com o gênero feminino, 
       independente da sua orientação sexual, isso inclui as mulheres transexuais.
       </Text>
       <Text style = {styles.paragrafo}>
       A lei maria da penha não funciona apenas em casos de agressão física. Também é incluída a agressão 
       psicológica, como ofensas, manipulação, difamação, calúnia, destruição de documentos e objetos e 
       afastamento de amigos e/ou familiares.
       </Text>
       <Text style = {styles.paragrafo}>
       Esta lei define e categoriza tipos de violência contra a mulher da seguinte maneira:
       </Text>
       <Text style = {styles.lista}>
       - Violência Física: lesões, tortura, ferimentos, sufocamento, atirar objetos, espancamento, etc;
       </Text>
       <Text style = {styles.lista}>
       - Violência psicológica: ameaça, constrangimento, manipulação, humilhação, etc;
       </Text>
       <Text style = {styles.lista}>
       - Violência Sexual: estupro, forçar a mulher a abortar, impedir o uso de contraceptivos, etc;
       </Text>
       <Text style = {styles.lista}>
       - Violência Moral: difamação, expor a vítima, emitir juízos morais sobre sua conduta, etc;
       </Text>
       <Text style = {styles.lista}>
       - Violência Patrimonial: privar bens ou recursos econômicos, destruir documentos, controlar dinheiro, etc.
       </Text>
       <Text style = {styles.paragrafo}>
       Se você se encontra numa situação de violência ou conhece alguém nessa situação, Lipa’s diz que você é forte 
       e encoraja você a denunciar. Disque 180.
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
    height: 80,
    marginTop: 150,
    marginLeft: 8,
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

export default LeiMariaScreen;