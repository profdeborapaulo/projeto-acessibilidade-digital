import React, {useState} from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { Input }  from 'react-native-elements';


export default function EsqueceuSenhaScreen({ navigation }){

  const [email, setEmail] = useState(null);

  return (
    <View style={styles.container}>
      <Image source = {require('../assets/logo.png')} style = {styles.logo} />
      <Image source = {require('../assets/linha.png')} style={styles.linha} />
      <Image source = {require('../assets/cadeado.png')} style={styles.cadeado} />
      <Text style={styles.titulo}> Esqueceu a senha? </Text>
      <Text style={styles.texto}> Não se preocupe, vamos enviar uma mensagem para você redefinir sua senha. </Text>
      <View style = {styles.email}>
      <Input style={styles.input}  placeholder="E-mail"  placeholderTextColor="#49070A98"  leftIcon={{ type: 'font-awesome', color:'#49070A98'}} onChangeText={value => setEmail(value)}  keyboardType='email-address'  />
      </View>
      <TouchableOpacity style={styles.bottonentrar} >
       <Text style={styles.entrar}> Entrar </Text>
      </TouchableOpacity>
      <Image source = {require('../assets/ou.png')} style={styles.ou} />
      <Text onPress={() => navigation.navigate('Cadastro')} style={styles.cadastro}> Criar conta nova </Text>
      <Image source = {require('../assets/linha.png')} style={styles.linha2} />
      <Text onPress={() => navigation.navigate('Login')} style={styles.login}> Voltar ao Login </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#FFEDE3',
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  logo: {
    width: 160,
    height: 70,
    marginTop: 40,
  },
  linha:{
    width: '100%',
    height: 1.5,
    marginTop: 15,
  },
  cadeado: {
    width: 130,
    height: 130,
    marginTop: 80,
  },
  titulo:{
    fontSize: 22,    
    fontFamily: 'Inter_700Bold',
    color:'#49070A',
    marginTop: 10,
  },
  texto:{
    width: 350,
    fontSize: 18,    
    fontFamily: 'Inter_500Medium',
    color:'#49070A',
    marginTop: 10,
    textAlign: 'center',
  },
  input:{
    fontSize: 20,    
    fontFamily: 'Inter_500Medium',
  },
  email: {
    backgroundColor: '#FFFFFF',
    width: 350,
    height: 80,
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#49070A',
    borderRadius: 20,
    padding: 10,
  },
  bottonentrar:{
    marginTop: 30,
    width: 230,
    height: 60,
    marginTop: 25,
    color:'#FFEDE3',
    backgroundColor: '#49070A',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  entrar:{
    color:'#FFEDE3',
    textAlign: 'center',
    fontSize: 22,
    fontFamily: 'Inter_600SemiBold',
  },
  ou:{
    width: '100%',
    height: 20,
    marginTop: 40,
  },
  cadastro: {
    fontSize: 15,    
    fontFamily: 'Inter_700Bold',
    color:'#112947',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
  linha2:{
    width: '100%',
    height: 1.5,
    marginTop: 50,
  },
  login: {
    fontSize: 15,    
    fontFamily: 'Inter_700Bold',
    color:'#49070A',
    textDecorationLine: 'underline',
    marginTop: 20,
  },
});