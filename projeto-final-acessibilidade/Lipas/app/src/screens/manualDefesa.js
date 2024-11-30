import React from 'react';
import { View, StyleSheet, Image, Dimensions, ScrollView, TouchableHighlight, TouchableOpacity, Text } from 'react-native';
import { useTheme } from './ThemeContext'; 
import { Feather } from '@expo/vector-icons';


const ManualDefesaScreen = ({ navigation }) => {
  const { theme, switchTheme } = useTheme();
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={styles.Title}>Manuais Lipa´s</Text>
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
        <TouchableOpacity onPress={() => navigation.navigate('Digital')}>
        <Image source = {require('../assets/cards/digital.png')} style={styles.image2} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Encontro')}>
        <Image source = {require('../assets/cards/encontro.png')} style={styles.image2} />
        </TouchableOpacity>
        </View>

        <View style={styles.combo}>
        <TouchableOpacity onPress={() => navigation.navigate('Cyber')}>
        <Image source = {require('../assets/cards/cyber.png')} style={styles.image2} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Furto')}>
        <Image source = {require('../assets/cards/furto.png')} style={styles.image2} />
        </TouchableOpacity>
        </View>

        <View style={styles.combo}>
          <Text style={styles.espaco}> </Text>
        </View>

      </ScrollView>

      <TouchableHighlight style={styles.botaoPanico} onPress={() => navigation.navigate('Emergência')} > 
           <Feather name='volume-1' size={50} color={"#FFEDE3"} />
      </TouchableHighlight>
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
  botaoPanico:{
    position: 'absolute',
    backgroundColor: '#3C0609',
    borderRadius: 50,
    marginLeft: 360,
    marginTop: 300,
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
   },
  titulo: {
    marginTop: height * 0.04,
    width: width * 0.8,
    height: width * 0.06,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  linha:{
    marginTop: height * 0.01,
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
  Title: {
    fontSize: 48,
    fontFamily: 'DMSerifDisplay_400Regular',
    color: '#631C1C',
    textAlign: 'center',
    paddingTop: 12,
  },
});

export default ManualDefesaScreen;