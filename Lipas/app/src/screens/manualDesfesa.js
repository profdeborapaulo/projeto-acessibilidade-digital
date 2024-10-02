import React from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView, TouchableWithoutFeedback, TouchableOpacity, Text } from 'react-native';


const ManualDefesaScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
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
  espaco: {
    width: '100%',
    height: 100,
  },
});

export default ManualDefesaScreen;