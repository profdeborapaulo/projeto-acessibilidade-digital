import { DrawerActions } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';

import MapView from 'react-native-maps';

const IndexScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
     <Image source = {require('../assets/carregamento.png')} style = {styles.carregamento}/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFEDE3',
    width: '100%',
    height: '100%',
  },
  home: {
    color: '#FFEDE3',
    fontSize: 40,
  },
  borboleta: {
    width: 50,
    height: 50,
    marginLeft: 'auto',
    marginRight: 5,
  },  
  map: {
    width: '100%',
    height: '100%',
  },
  container2: {
    backgroundColor: '#FFEDE3',
    width: '100%',
    height: 450,
    borderWidth: 2,
    borderColor: '#640F1480',
    marginTop: 420,
    borderRadius: 50,
    position: 'absolute',
  },
  menu: {
    width: 320,
    height: 120,
    marginLeft: 40,
    marginRight: 40,
    marginTop: 245,
    position: 'absolute',
  },
  menu2: {
    backgroundColor: '#49070A',
    width: 320,
    height: 120,
    marginLeft: 40,
    marginRight: 40,
    position: 'absolute',
    marginTop: 350,
  },
  botao: {
    width: 100,
    height: 93,
    marginLeft: 153,
    marginRight: 153,
    marginTop: 250,
    position: 'absolute',
  },
  menores:{
    flexDirection: 'row', // Alinha os itens na horizontal
    justifyContent: 'space-between', // Espaça os itens uniformemente
    padding: 15,
  },
  local: {
    width: 55,
    height: 68,
    marginLeft: 70,
    marginTop: 320,
    position: 'absolute',
    borderBottomWidth: 2,
    borderBottomColor: '#FFEDE3',
  },
  manual: {
    width: 60,
    height: 60,
    marginLeft: 270,
    marginTop: 320,
    position: 'absolute',
  },
  carregamento: {
    width: 100,
    height: 100,
    marginLeft: 160,
    marginTop: 320,
  },
});

export default IndexScreen;