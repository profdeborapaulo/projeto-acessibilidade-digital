import React from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView, TouchableWithoutFeedback, Text, TouchableOpacity } from 'react-native';
import { useTheme } from './ThemeContext'; 

const EncontroScreen = ({ navigation }) => {
  const { theme, switchTheme } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
    <ScrollView>
       <Image source = {require('../assets/cards/cardEncontro.png')} style = {styles.card}/>

    <View style = {styles.texto}>
       <Text style = {styles.paragrafo}>
       O avanço da internet abriu portas para se conectarmos com pessoas ao redor do mundo,
        mas esse avanço também nos traz algumas preocupações. Amizades e relacionamentos
        virtuais são algo comum nos dias atuais, mas é importante se questionar: Você realmente
        conhece essa pessoa?
       </Text>
       <Text style = {styles.paragrafo}>
       Além das fake news, a internet também apresenta outros riscos, como o de encontrar perfis
        falsos, um fenômeno conhecido como catfishing. Este fenômeno é uma prática enganosa de
        criar perfis falsos na internet, e ele pode ocorrer por diversos motivos, como obter
        informações pessoais, fotos íntimas, dinheiro ou simplesmente por manipulação. Você sabe
        quais são os sinais de alerta de um catfishing? Lipa’s está aqui para te alertar.
       </Text>
       <Text style = {styles.paragrafo}>
        - Poucas Informações: quando o perfil possui poucas informações, não tem fotos com
          amigos ou publicações, isso pode ser um sinal de alerta;
       </Text>
       <Text style = {styles.paragrafo}>
       - Perfil Novo: Perfis criados recentemente ou com poucos seguidores também podem ser
        suspeitos;
       </Text>
       <Text style = {styles.paragrafo}>
       - Indisponibilidade: Se a pessoa nunca está disponível para uma chamada de vídeo ou
       ligação, e não envia fotos ou áudios, isso também pode ser um sinal de alerta;
       </Text>
       <Text style = {styles.paragrafo}>
       O catfishing pode envolver diversas atitudes que também se encaixam como crime,
       exemplo:
       </Text>
       <Text style = {styles.paragrafo}> 
       • Estelionato (Art. 172);
       • Extorsão (Art. 158);
       • Falsidade Ideológica (Art. 299);
       • Falsa Identidade (Art. 307).
       </Text>
       <Text style = {styles.paragrafo}> 
       Mas o catfishing não é o único risco que você corre. Infelizmente, crimes cometidos através
        da internet vêm crescendo cada vez mais, mas aqui estão alguns cuidados que você deve
        ter ao se encontrar ou conversar com alguém que conheceu na internet:
       </Text>
       <Text style = {styles.lista}> 
       - Não passe suas informações pessoais (dados bancários, senhas e etc);
       - Se encontrem em lugares movimentados;
       - Não vá para a casa da pessoa;
       - Compartilhe sua localização com alguém;
       - Não fique sem internet ou sem sinal;
       - Se possível, leve alguém com você nem que seja para ficar de longe observando. 
       </Text>
       <Text style = {styles.paragrafo}> 
       Confie na sua intuição. Se você se sentir em perigo ou desconfortável, lembre-se de que
       pode acionar o botão de pânico no app da Lipas. Ele enviará mensagens automáticas para
       seus contatos de emergência e, se necessário, fará uma chamada para os serviços de
       emergência ou a polícia.
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

export default EncontroScreen;