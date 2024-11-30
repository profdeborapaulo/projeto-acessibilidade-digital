import React from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView, TouchableWithoutFeedback, Text, TouchableOpacity } from 'react-native';
import { useTheme } from './ThemeContext'; 

const DigitalScreen = ({ navigation }) => {
  const { theme, switchTheme } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
    <ScrollView>
    <Image source = {require('../assets/cards/cardDigital.png')} style = {styles.card}/>

    <View style = {styles.texto}>
       <Text style = {styles.paragrafo}>
       Já não é novidade que a cada dia que passa a internet está avançando mais e ficando cada
        vez mais implantada em nossas vidas. Você sabe como se proteger na internet? A Lipa's
        está aqui para ajudar você a cuidar da sua segurança digital! Especialmente para você,
        mulher, que enfrenta riscos específicos no ambiente online. Aqui você vai encontrar alguns
        tópicos de como se proteger no mundo digital.
       </Text>
       <Text style = {styles.paragrafo}>
       É fundamental a privacidade e segurança dos nossos dados pessoais. Nós como usuárias
        devemos cumprir com alguns requisitos para que nossa privacidade e segurança sejam
        reforçadas, alguns desses requisitos são:

       </Text>
       <Text style = {styles.paragrafo}>
       - Senhas: É necessário o uso de senhas fortes, usando letras maiúsculas, caracteres especiais e números;
         Não utilize datas ou nomes como senhas, pois isso pode facilitar o acesso de invasores;
         Evite usar as mesmas senhas várias vezes em diferentes contas;
         Não passe sua senha para várias pessoas.
       </Text>
       <Text style = {styles.paragrafo}>
       - Termos de Privacidades e Cookies: Não aceite qualquer termo sem verificar! Certifiquese de que o site ou aplicativo é seguro, leia os termos com atenção e entenda o propósito de
         cada um deles.
       </Text>
       <Text style = {styles.paragrafo}>
       - Atualização: A internet está em constante evolução, por isso é importante se manter
         atualizada sobre as novidades e garantir que seus aplicativos também estejam atualizados.
         Manter-se desatualizada aumenta o risco de ter seus dados invadidos.
       </Text>
       <Text style = {styles.paragrafo}>
       - Fake News: Não acredite em tudo que você vê na internet! Procure verificar em fontes
         seguras antes de passar qualquer tipo de informação.
       </Text>
       <Text style = {styles.paragrafo}> 
       - Localização e Mídia: Tenha cuidado com os sites e aplicativos que você concede acesso
         à sua localização, câmera, galeria ou áudio. Permitir esses acessos sem garantir a
         segurança é uma porta aberta para invasões de privacidade.

       </Text>
       <Text style = {styles.paragrafo}> 
        - Comentários: A internet não é uma terra sem lei! Tenha cuidado com o que você posta ou
          comenta, pois, suas palavras podem impactar a vida de outro usuário de forma positiva ou
          negativa.
       </Text>
       <Text style = {styles.lista}> 
        Esses são os principais cuidados que devemos ter na internet. Não se esqueça: proteja-se e
         previna-se contra possíveis problemas. Vale destacar que o Lipa's é um app seguro, e suas
         informações estão protegidas conosco.

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

export default DigitalScreen;