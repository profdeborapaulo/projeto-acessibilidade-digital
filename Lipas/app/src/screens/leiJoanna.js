import React from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView, TouchableWithoutFeedback, Text } from 'react-native';


const LeiJoannaScreen = ({ navigation }) => {
  return (
    <View style = {styles.container}>
    <ScrollView>
       <Image source = {require('../assets/tituloscards/titulo_leijoanna.png')} style = {styles.titulo}/>

    <View style = {styles.texto}>
       <Text style = {styles.paragrafo}> 
       Conhecida como Lei Joanna Maranhão, a lei nº 12.650 representa um marco na luta contra o abuso sexual infantil. Aprovada em 17 de 
       maio de 2012, esta lei alterou o código penal, dessa forma estendendo o prazo de prescrição para crimes sexuais cometidos contra 
       crianças e adolescentes. Antes dessa lei, o prazo de prescrição contava a partir do momento em que o crime era cometido, e isso muitas 
       das vezes impediam que os agressores fossem responsabilizados, por conta da dificuldade das vítimas em denunciar o abuso de forma imediata. 
       </Text>
       <Text style = {styles.paragrafo}> 
       A lei recebeu este nome em homenagem ao ato de coragem e força da nadadora Joanna Maranhão, que aos 20 anos revelou ter sido vítima 
       de abuso sexual por seu treinador quando tinha apenas nove anos. Sua atitude fez com que acontecesse uma mobilização social e política, 
       que resultou na aprovação da lei. 
       </Text>
       <Text style = {styles.paragrafo}> 
       É válido lembrar que esta lei não serve somente para mulheres, e que independente do seu gênero você não precisa ter medo de fazer a 
       denúncia e nem se apressar para isso. Respeite seu tempo de cura, você é forte! 
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
    height: 75,
    marginTop: 150,
    marginLeft: 18,
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

export default LeiJoannaScreen;