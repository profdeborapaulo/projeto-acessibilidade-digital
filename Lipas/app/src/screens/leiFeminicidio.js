import React from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView, TouchableWithoutFeedback, Text } from 'react-native';


const LeiFeminicidioScreen = ({ navigation }) => {
  return (
    <View style = {styles.container}>
    <ScrollView>
       <Image source = {require('../assets/tituloscards/titulo_leifeminicidio.png')} style = {styles.titulo}/>

    <View style = {styles.texto}>
       <Text style = {styles.paragrafo}> 
       Introduzida na legislação brasileira em 9 de março de 2015, a lei N° 13.104 aponta o assassinato de mulheres por razões de gênero como 
       um crime hediondo, dessa forma considerando feminicídio como homicídio qualificado. Além da emenda á constituição PEC75/19, que torna 
       imprescritíveis e inafiançáveis os crimes de feminicídio e estupro no Brasil, podendo ter a pena de 12 a 30 anos de prisão.
       </Text>
       <Text style = {styles.paragrafo}> 
       Esta lei trouxe mudanças para a nossa legislação brasileira, apresentando resultados positivos. Entretanto, o Brasil ainda enfrenta 
       problemas com violência a mulher, permanecendo em uma posição preocupante no cenário global, ocupando o 7° lugar num ranking de 84 países 
       com maiores números de feminicídio.
       </Text>
       <Text style = {styles.paragrafo}> 
       “Fonte: Secretarias de Segurança Pública e/ou Defesa Social; Fórum Brasileiro de Segurança Pública. 18 das 27 UF brasileiras apresentaram 
       taxa de feminicídio acima da média nacional, de 1,4 mortes para cada grupo de 100 mil mulheres.”
       </Text>
       <Text style = {styles.paragrafo}> 
       Lipa’s alerta: Não permita que a situação chegue a esse ponto. Ao menor sinal de abuso, denuncie imediatamente pelo número 180.
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
    width: 300,
    height: 85,
    marginTop: 150,
    marginLeft: 55,
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

export default LeiFeminicidioScreen;