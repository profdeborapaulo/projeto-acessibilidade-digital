import { DrawerActions } from '@react-navigation/native';
import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Text, TouchableOpacity } from 'react-native';

import MapView from 'react-native-maps';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map} />
        <Image source={require('../assets/borboleta.png')} style={styles.borboleta} />
      <View style={styles.container2}>

      <Text style={styles.texto}> Você ainda não tem contatos de emergência Lipa’s! Convide pessoas de confiança usuários Lipa’s  </Text>
       <TouchableOpacity style={styles.convida} onPress={() => navigation.navigate('BotaoPanico')}> 
        <Text style={styles.textconvida}> Convidar </Text>
       </TouchableOpacity>

      </View>
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
  texto: {
    width: 320,
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
    color: '#49070A',
    marginLeft: 'auto',
    marginHorizontal: 'auto',
    marginTop: 100,
    textAlign: 'center',
  },
  convida: {
    width: 150,
    height: 30,
    borderWidth: 1.5,
    borderColor:"#49070A",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginLeft: 'auto',
    marginRight: 'auto', 
  },
  textconvida: {
    fontFamily: 'Inter_700Bold', 
    fontSize: 16, 
    color: '#49070A', 
  },
});

export default HomeScreen;



