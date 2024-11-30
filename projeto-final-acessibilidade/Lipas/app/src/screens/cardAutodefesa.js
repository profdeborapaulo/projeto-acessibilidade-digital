import React from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView, TouchableWithoutFeedback, Text, TouchableOpacity } from 'react-native';
import { useTheme } from './ThemeContext'; 

const AutodefesaScreen = ({ navigation }) => {
  const { theme, switchTheme } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
    <ScrollView>
       <Image source = {require('../assets/cards/cardAutodefesa.png')} style = {styles.card}/>

    <View style = {styles.texto}>
       <Text style = {styles.paragrafo}>
       A importância da autodefesa para as mulheres é indiscutível, dada a frequente violência e assédio
       que enfrentam. Segundo dados da Organização Mundial da Saúde (OMS), lamentavelmente o Brasil ocupa 
       a 5º posição no ranking de maior número de feminicídio no mundo. Diante dessa situação alarmante, 
       fornecer informações e capacitar nossas mulheres com habilidades de autodefesa, não apenas irá ajudar 
       em possíveis situações de perigo, mas também irá fortalecer o emocional e psicológico, assim promovendo 
       a autoconfiança e empoderamento feminino.
       </Text>
       <Text style = {styles.paragrafo}>
       Além disso, o incentivo a mulheres praticarem a autodefesa quebra os estereótipos, desafiando a ideia 
       de que as mulheres de que mulheres são vulneráveis, fracas e manipuláveis. Ao contrário, demonstra que 
       nós mulheres somos capazes e autossuficientes, fortalecendo sua voz e presença na sociedade.
       </Text>
       <Text style = {styles.paragrafo}>
       Existem diversas opções acessíveis para aprender sobre a autodefesa, sendo elas presenciais ou online, 
       mas sempre ministradas por profissionais qualificados. Além disso, muitos municípios e ONGs oferecem 
       cursos gratuitos de lutas esportivas, como: capoeira, judô, karatê, boxe, entre outras, que também podem 
       ser úteis para a autodefesa.
       </Text>
       <Text style = {styles.paragrafo}>
       Existem diversas opções acessíveis para aprender sobre a autodefesa, sendo elas presenciais ou online, 
       mas sempre ministradas por profissionais qualificados. Além disso, muitos municípios e ONGs oferecem 
       cursos gratuitos de lutas esportivas, como: capoeira, judô, karatê, boxe, entre outras, que também podem 
       ser úteis para a autodefesa.
       </Text>
       <Text style = {styles.paragrafo}>
       É sempre altamente recomendável buscar a orientação de um profissional com certificado, qualificação e 
       garantir sua competência antes de se envolver nos treinamentos.
       </Text>
       <Text style = {styles.paragrafo}>
       A Lipa’s recomenda alguns recursos adicionais, como sites e blogs, que fornecem informações valiosas sobre 
       autodefesa:
       </Text>
       <Text style = {styles.lista}> 
       - Girlz On Guard: Oferece recursos e treinamentos de autodefesa especificamente voltados para mulheres.
       </Text>
       <Text style = {styles.lista}> 
       - Impact Personal Safety: Um programa de treinamento de autodefesa focado em capacitar mulheres a se 
       defenderem em situações de perigo.
       </Text>
       <Text style = {styles.lista}> 
       - Model Mugging: Oferece cursos de autodefesa e treinamento para mulheres em várias localidades.
       </Text>
       <Text style = {styles.lista}> 
       - Krav Maga Worldwide: Este site oferece informações sobre o Krav Maga, uma técnica de defesa pessoal 
       especialmente útil para mulheres.
       </Text>
       <Text style = {styles.lista}> 
       - Rape, Abuse & Incest National Network (RAINN): Embora não seja especificamente um site de autodefesa, 
       o RAINN fornece recursos valiosos para sobreviventes de violência sexual e abuso, incluindo informações 
       sobre como buscar ajuda e se proteger.
       </Text>
       <Text style = {styles.paragrafo}>
       Estes recursos oferecem uma ampla gama de informações, desde dicas práticas até treinamentos específicos, 
       para capacitar as mulheres a se defenderem em situações de perigo. É importante verificar a credibilidade 
       e a reputação de qualquer site ou programa antes de participar de treinamentos ou seguir seus conselhos.
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

export default AutodefesaScreen;