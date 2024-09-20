import React from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Text } from 'react-native';


const ManualDefesaScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Image source={require('../assets/borboleta.png')} style={styles.borboleta} />
      </View>
      <Image source = {require('../assets/titulo_manual.png')} style = {styles.titulo} />
      <Image source = {require('../assets/linha.png')} style={styles.linha} />

      <ScrollView>
        <View style={styles.combo}>
        <TouchableOpacity onPress={() => navigation.navigate('Direito')}>
          <Image source = {require('../assets/cards/direito.png')} style={styles.image1} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Autodefesa')}>
          <Image source = {require('../assets/cards/autodefesa.png')} style={styles.image1} />
        </TouchableOpacity>
        </View>

        <View style={styles.combo}>
        <TouchableOpacity onPress={() => navigation.navigate('Socorros')}>
        <Image source = {require('../assets/cards/socorros.png')} style={styles.image2} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Numeros')}>
        <Image source = {require('../assets/cards/numero.png')} style={styles.image2} />
        </TouchableOpacity>
        </View>

        <View style={styles.combo}>
        <TouchableOpacity>
        <Image source = {require('../assets/cards/digital.png')} style={styles.image2} />
        </TouchableOpacity>
        <TouchableOpacity>
        <Image source = {require('../assets/cards/encontro.png')} style={styles.image2} />
        </TouchableOpacity>
        </View>

        <View style={styles.combo}>
        <TouchableOpacity>
        <Image source = {require('../assets/cards/cyber.png')} style={styles.image2} />
        </TouchableOpacity>
        </View>

        <View style={styles.combo}>
          <Text style={styles.espaco}> </Text>
        </View>

      </ScrollView>

      <Image source = {require('../assets/menu.png')} style = {styles.menu} />
      <View style={styles.menu2} />
      <TouchableWithoutFeedback onPress={() => navigation.navigate('BotaoPanico')}>
        <Image source = {require('../assets/botao.png')} style = {styles.botao} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
        <Image source = {require('../assets/local.png')} style = {styles.local} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('ManualDeDefesa')}>
        <Image source = {require('../assets/manuallinha.png')} style = {styles.manual} />
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
  cabecalho: {
    backgroundColor: '#49070A',
    width: '100%',
    height: 100,
    alignItems: 'flex-end',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  borboleta: {
    width: 60,
    height: 60,
  },
  titulo: {
    marginTop: height * 0.04,
    width: width * 0.8,
    height: width * 0.06,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  linha:{
    marginTop: height * 0.035,
  },
  combo: {
    flexDirection: 'row', // Alinha os itens na horizontal
    justifyContent: 'space-between', // Espaça os itens uniformemente
    padding: 15,
  },
  image1:{
    width: width * 0.43,
    height: width * 0.585,
    marginTop: height * 0.035,
    marginLeft: height * 0.001,
  },
  image2:{
    width: width * 0.43,
    height: width * 0.585,
    marginLeft: height * 0.001,
  },
  menu: {
    width: 320,
    height: 120,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 745,
    position: 'absolute',
  },
  menu2: {
    backgroundColor: '#49070A',
    width: 320,
    height: 120,
    marginLeft: 40,
    marginRight: 40,
    position: 'absolute',
    marginTop: 850,
  },
  botao: {
    width: 100,
    height: 93,
    marginLeft: 153,
    marginRight: 153,
    marginTop: 750,
    position: 'absolute',
  },
  local: {
    width: 60,
    height: 60,
    marginLeft: 70,
    marginTop: 820,
    position: 'absolute',
  },
  manual: {
    width: 55,
    height: 68,
    marginLeft: 270,
    marginTop: 820,
    position: 'absolute',
  },
  espaco: {
    width: '100%',
    height: 100,
  },
});

export default ManualDefesaScreen;