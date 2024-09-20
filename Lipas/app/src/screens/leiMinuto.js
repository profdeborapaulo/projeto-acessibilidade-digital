import React from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView, TouchableWithoutFeedback, Text } from 'react-native';


const LeiMinutoScreen = ({ navigation }) => {
  return (
    <View style = {styles.container}>
    <ScrollView>
       <Image source = {require('../assets/tituloscards/titulo_leiminuto.png')} style = {styles.titulo}/>

    <View style = {styles.texto}>
       <Text style = {styles.paragrafo}> 
       Lei do minuto seguinte ou lei n° 12.845, foi aprovada em 1° de Agosto de 2013. Esta lei estabelece a obrigatoriedade de atendimento 
       imediato e integral às vítimas de violência sexual no Brasil. Ela assegura que a vítima deve ser tratada com prontidão, sem necessidade 
       de prova ou comunicação a polícia, respeitando a privacidade e direito da vítima.
       </Text>
       <Text style = {styles.paragrafo}> 
       Os principais pontos dessa lei incluem:
       </Text>
       <Text style = {styles.lista}> 
       - Atendimento emergencial às vítimas de violência sexual.
       </Text>
       <Text style = {styles.lista}> 
       - Direito ao tratamento integral, que inclui a profilaxia de doenças sexualmente transmissíveis, contracepção de emergência e acompanhamento 
       psicológico.
       </Text>
       <Text style = {styles.lista}> 
       - A não obrigatoriedade de boletim de ocorrência para a vítima ser atendida.
       </Text>
       <Text style = {styles.lista}> 
       - Confidencialidade sobre as informações da vítima.
       </Text>
       <Text style = {styles.paragrafo}> 
       A lei garante um atendimento humanizado, eficaz e rápido as vítimas de violência sexual, dessa forma tentando reduzir ao máximo o 
       trauma e oferecendo suporte.
       </Text>
       <Text style = {styles.paragrafo}> 
       Com essa lei, você pode buscar seus direitos sem medo de comprometer sua saúde ou privacidade. Cuide de si e exija o que é seu por 
       direito!
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
    width: 380,
    height: 70,
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

export default LeiMinutoScreen;