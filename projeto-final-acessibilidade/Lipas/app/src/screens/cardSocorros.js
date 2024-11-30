import React from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView, TouchableWithoutFeedback, Text, TouchableOpacity } from 'react-native';
import { useTheme } from './ThemeContext'; 

const SocorrosScreen = ({ navigation }) => {
  const { theme, switchTheme } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
    <ScrollView>
       <Image source = {require('../assets/cards/cardSocorros.png')} style = {styles.card}/>

    <View style = {styles.texto}>
       <Text style = {styles.paragrafo}>
       Os primeiros socorros são cuidados básicos e essenciais que são aplicados em casos de emergência, quando 
       alguém passa mal ou se machuca.
       </Text>
       <Text style = {styles.paragrafo}>
       Esses cuidados são de grande importância, pois podem salvar vidas em situações de emergência. É fundamental 
       que todos saibam dessas técnicas, pois saber como agir corretamente em momentos de pressão como o de alguém 
       estar passando mal, faz toda a diferença em momentos críticos. E a Lipa’s está aqui! Para fornecer o conhecimento 
       necessário e ajudar você a estar preparado para enfrentar essas situações com sabedoria e confiança.
       </Text>
       <Text style = {styles.paragrafo}>
       É bom lembrar que, segundo o artigo 135 do Código Penal Brasileiro, é crime deixar de prestar assistência a 
       uma pessoa que se encontra em um caso de emergência, quando for possível fazê-lo sem risco pessoal.
       </Text>
       <Text style = {styles.paragrafo}>
       “Artigo 135 - Omissão de Socorro: "Deixar de prestar assistência, quando possível fazê-lo sem risco pessoal, 
       à criança abandonada ou extraviada, ou à pessoa inválida ou ferida ao desamparo, ou em grave e iminente perigo; 
       ou não pedir, nesses casos, o socorro da autoridade pública: Pena - detenção, de um a seis meses, ou multa."
       </Text>
       <Text style = {styles.paragrafo}>
       Aqui estão alguns tópicos sobre como agir em diferentes situações de emergência:
       </Text>
       
       <Text style = {styles.situacoes} onPress={() => navigation.navigate('Desmaio')}> • Desmaio </Text>
      
       <Text style = {styles.situacoes}  onPress={() => navigation.navigate('Queimaduras')}> • Queimaduras  </Text>

       <Text style = {styles.situacoes}  onPress={() => navigation.navigate('Fraturas')}> • Fraturas </Text>

       <Text style = {styles.situacoes}  onPress={() => navigation.navigate('ChoqueEletrico')}> • Choque Elétrico </Text>

       <Text style = {styles.situacoes}  onPress={() => navigation.navigate('Convulsoes')}> • Convulsões </Text>

       <Text style = {styles.situacoes}  onPress={() => navigation.navigate('Afogamentos')}> • Afogamentos </Text>

       <Text style = {styles.situacoes}  onPress={() => navigation.navigate('HemorragiaNasal')}> • Hemorragia Nasal </Text>


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
  situacoes: {
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

export default SocorrosScreen;