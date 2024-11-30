import React from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView, TouchableWithoutFeedback, Text } from 'react-native';
import { useTheme } from './ThemeContext'; 

const LeiImportunacaoScreen = ({ navigation }) => {
  const { theme, switchTheme } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
    <ScrollView>
    <Text style={styles.Title}>Importunação</Text>
    <Text style={styles.Title2}>Sexual</Text>
    <Text style={styles.Titulo2}>Lei N°13.718/2018</Text>

    <View style = {styles.texto}>
       <Text style = {styles.paragrafo}> 
       O projeto de lei N° 13.718 ou lei da importunação sexual, entrou em vigor recentemente em 24 de setembro de 2018. Esta lei define 
       e criminaliza a importunação sexual como um ato de caráter libidinoso realizado contra alguém sem o seu consentimento, com a 
       finalidade de satisfazer própria lascívia ou a de terceiro, podendo levar de 1 a 5 anos de reclusão.
       </Text>
       <Text style = {styles.paragrafo}> 
       Esta lei foi uma resposta a diversos casos de assédio, principalmente em transportes públicos, que chamaram atenção da mídia, o que 
       gerou uma pressão para um posicionamento. 
       </Text>
       <Text style = {styles.paragrafo}> 
       Antes dessa lei, atos considerados “menos graves”, como assédio em locais públicos eram tratados como contravenção penal, uma infração 
       de menor potencial ofensivo. Com a aprovação da lei, a importunação sexual passou a ser crime, com uma pena de 1 a 5 anos de reclusão.
       </Text>
       <Text style = {styles.paragrafo}> 
       Atos que podem ser considerados atos libidinosos nesta lei são: apalpar, lamber, tocar, desnudar, se masturbar e ejacular em público, 
       entre outros.
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
  Title: {
    fontSize: 48,
    fontFamily: 'DMSerifDisplay_400Regular',
    color: '#631C1C',
    textAlign: 'center',
    paddingTop: 12,
    marginTop: 90,
  },
  Title2: {
    fontSize: 48,
    fontFamily: 'DMSerifDisplay_400Regular',
    color: '#631C1C',
    textAlign: 'center',
    marginTop: 1,
  },
  Titulo2: {
    fontSize: 24,
    fontFamily: "Inter_500Medium",
    color: '#631C1C',
    textAlign: 'center',
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

export default LeiImportunacaoScreen;