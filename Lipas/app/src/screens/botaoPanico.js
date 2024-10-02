import React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { Button, Icon } from "react-native-elements";

const BotaoPanicoScreen = ({ navigation }) =>{
  return (
    <View style={styles.container}>

       <Button icon={<Icon name="notifications" size={45} color="#49070A" />} title="Ligar para a polícia"   
       buttonStyle={{     
        width: 330,
        height: 85,
        backgroundColor: "#FFEDE3",
        borderRadius: 40,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 40,
        marginLeft: 'auto',
        marginRight: 'auto', }}
        titleStyle={{
          fontFamily: 'Inter_700Bold', 
          fontSize: 24, 
          color: '#49070A', 
          marginLeft: 5,
        }} />

      <View style={styles.aviso}>
        <Image source={require('../assets/aviso.png')} style={styles.iconaviso} />
        <Text style={styles.textaviso}> Se o agressor estiver com arma de fogo ou objetos que possam machucar, chame a polícia! </Text>
      </View>

      <View style={styles.container2}>
        <View style={styles.contato}>
          <Image source={require('../assets/contato.png')} style={styles.iconcontato} />
          <Text style={styles.textcontato}> Contato de emergência </Text>
        </View>
       <Text style={styles.texto}> Seus contatos de confiança para disparar pedidos de socorro. </Text>
       <TouchableOpacity style={styles.funciona} onPress={() => navigation.navigate('ExplicaContato1')}> 
        <Text style={styles.textfunciona}> Novo contato de emergência </Text>
       </TouchableOpacity>
      </View>

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
  aviso: {
    backgroundColor: '#49070A',
    width: '100%',
    height: 100,
    marginTop: 40,
    flexDirection: 'row',
    justifyContent: 'space-between', 
    padding: 15,
  },
  iconaviso: {
    width: 45,
    height: 45,
    marginLeft: 4,
    marginTop: 10,
  },
  textaviso: {
    width: 330,
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
    color: '#FFEDE3',
    marginLeft: 12,
    marginTop: 5,
  },
  container2: {
    backgroundColor: '#FFEDE3',
    width: 350,
    height: 150,
    borderRadius: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
  },
  contato: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
  },
  iconcontato: {
    width: 35,
    height: 35,
    marginLeft: 18,
    marginTop: 15,
  },
  textcontato: {
    fontSize: 22,
    fontFamily: 'Inter_700Bold',
    color: '#49070A',
    marginTop: 17,
    marginRight: 28,
  },
  texto: {
    width: 320,
    fontSize: 16,
    fontFamily: 'Inter_400Regular',
    color: '#49070A',
    marginLeft: 10,
    marginTop: 5,
  },
  funciona: {
    width: 300,
    height: 30,
    backgroundColor: "#49070A",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    marginLeft: 'auto',
    marginRight: 'auto', 
  },
  textfunciona: {
    fontFamily: 'Inter_700Bold', 
    fontSize: 15, 
    color: '#FFEDE3', 
  },
});

export default BotaoPanicoScreen;

