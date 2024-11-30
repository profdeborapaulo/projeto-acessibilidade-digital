import React from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView, TouchableWithoutFeedback, Text, TouchableOpacity } from 'react-native';
import { useTheme } from './ThemeContext'; 

const CyberScreen = ({ navigation }) => {
  const { theme, switchTheme } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
    <ScrollView>
       <Image source = {require('../assets/cards/cardCyber.png')} style = {styles.card}/>

    <View style = {styles.texto}>
       <Text style = {styles.paragrafo}>
       Terra sem lei? NÃO! Lipa’s está aqui para mostrar que a internet não é terra sem lei, e falar
        sobre um dos maiores vilões da atualidade, o cyberbullying.
       </Text>
       <Text style = {styles.paragrafo}>
        Todos nós conhecemos o bullying, que é uma forma física, verbal e psicológica de intimidar
         alguém. Com os avanços da tecnologia, conquistamos muitos benefícios, mas também
         enfrentamos algumas consequências disso, sendo uma delas o Cyberbullying. O
         cyberbullying também é uma prática de intimidação, mas feita virtualmente.
       </Text>
       <Text style = {styles.paragrafo}>
         Algumas pessoas chamam a internet de "terra sem lei", mas na realidade, não é assim que
          as coisas funcionam. O cyberbullying é apto para punição por meio do código penal, quando
          se encaixa como crime contra a honra (calúnia, difamação – Artigo 138), injúria racial
          (racismo – Artigo 140) e exposição de conteúdo íntimo ou pessoal (Artigo 218-C incluído
          pela Lei N° 13.718, de 2018).
       </Text>
       <Text style = {styles.paragrafo}>
        Segundo a pesquisa realizada pelo instituto IPSOS, O Brasil está em segundo lugar no
         ranking mundial como país com mais casos de Cyberbullying no mundo. Esse resultado é
         preocupante, mas para que possamos mudar essa realidade, Lipa’s vai te apresentar
         algumas maneiras de prevenir o cyberbullying:
       </Text>
       <Text style = {styles.paragrafo}>
        • Evitar exposição excessiva;
       </Text>
       <Text style = {styles.paragrafo}>
        • Quando sofrer um ataque, bloqueie o perfil da pessoa;
       </Text>
       <Text style = {styles.paragrafo}>
        • Não enviar ou postar fotos e vídeos íntimos;
       </Text>
       <Text style = {styles.paragrafo}>
        • Ter mais empatia e cuidado ao comentar na internet.
       </Text>
       <Text style = {styles.paragrafo}>
        Se você for vítima de um ataque online ou de vazamento de conteúdo íntimo, registre um
         boletim de ocorrência. Certifique-se de tirar prints e guardar todas as evidências como
         prova.
       </Text>
       

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

export default CyberScreen;