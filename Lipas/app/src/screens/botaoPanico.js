import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Text } from 'react-native';


const BotaoPanicoScreen = ({ navigation }) =>{
  return (
    <View style={styles.container}>
      <View style={styles.cabecalho}>
        <Image source={require('../assets/borboleta.png')} style={styles.borboleta} />
      </View>
      
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
        <Image source = {require('../assets/local.png')} style = {styles.local} />
      </TouchableWithoutFeedback>

      <Image source = {require('../assets/menu.png')} style = {styles.menu} />
      <View style={styles.menu2} />
      <TouchableWithoutFeedback onPress={() => navigation.navigate('BotaoPanico')}>
        <Image source = {require('../assets/botaoclaro.png')} style = {styles.botao} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('Home')}>
        <Image source = {require('../assets/local.png')} style = {styles.local} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback onPress={() => navigation.navigate('ManualDeDefesa')}>
        <Image source = {require('../assets/manual.png')} style = {styles.manual} />
      </TouchableWithoutFeedback>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#3C0609',
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
    width: 90,
    height: 90,
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
    width: 60,
    height: 60,
    marginLeft: 270,
    marginTop: 820,
    position: 'absolute',
  },
  espaco: {
    width: '100%',
    height: 100,
  },
});

export default BotaoPanicoScreen;

