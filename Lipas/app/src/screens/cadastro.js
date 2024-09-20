import React from 'react';
import { useState } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet} from 'react-native';
import { Input, CheckBox }  from 'react-native-elements';

export default function CadastroScreen({ navigation }){

  const [text, setName] = useState(null);
  const [tel, setTel] = useState(null);
  const [email, setEmail] = useState(null);

  const [checked, setChecked] = useState(false);

  const continuar = () => {
    navigation.navigate('')
  };

  return (
    <View style={styles.container}>
    <Image source = {require('../assets/borboleta.png')} style = {styles.borboleta} />
    <View style={styles.container2}>
        <Image source = {require('../assets/titulo_cadastro.png')} style = {styles.titulo} />
        <Text style={styles.subtitulo}> Crie a sua conta </Text>
    <View style = {styles.nome}>
      <Input type="text" style={styles.input}  placeholder="Nome"  placeholderTextColor="#49070A98"  leftIcon={{ type: 'font-awesome', name: 'user', color:'#49070A98'}} onChangeText={value => setName(value)} />
    </View>
    <View style = {styles.celular}>
      <Input type="tel" style={styles.input} placeholder="Celular"  placeholderTextColor="#49070A98"   leftIcon={{ type: 'font-awesome', name: 'phone', color:'#49070A98'}}  onChangeText={value => setTel(value)}  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
    </View>
    <View style = {styles.email}>
      <Input style={styles.input}  placeholder="E-mail"  placeholderTextColor="#49070A98"  leftIcon={{ type: 'font-awesome', name: 'envelope', color:'#49070A98'}} onChangeText={value => setEmail(value)}  keyboardType='email-address'  />
    </View>
    <Image source = {require('../assets/linha.png')} style={styles.linha} />
    <View>
      <CheckBox title='Declaro que li e concordo com os Termos e Condições.' checked={checked} onPress={() => setChecked(!checked)} containerStyle={styles.checkboxContainer} textStyle={styles.checkboxText}  checkedColor='#49070A' uncheckedColor='#49070A80'/>
    </View>
      <TouchableOpacity onPress={continuar}  style={styles.bottoncontinuar} >
       <Text style={styles.continuar}> Continuar </Text>
      </TouchableOpacity>
      <Text onPress={() => navigation.navigate('Login')} style={styles.entrar}> Já tem uma conta? Entrar </Text>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#49070A',
    width: '100%',
    height: '100%',
  },
  borboleta: {
    width: 140,
    height: 140,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 50,
  },
  container2: {
    position: 'absolute',
    top: 210,
    width: '100%',
    height: 900,
    backgroundColor: '#FFEDE3',
    borderRadius: 30,
    alignItems: 'center',
  },
  titulo: {
   marginTop: 30,
   width: 255,
   height: 35,
  },
  subtitulo:{
    fontSize: 18,    
    fontFamily: 'Inter_500Medium',
    color:'#49070A',
    marginTop: 10,
  },
  input:{
    fontSize: 20,    
    fontFamily: 'Inter_500Medium',
  },
  nome: {
    backgroundColor: '#FFFFFF',
    width: 350,
    height: 80,
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#49070A',
    borderRadius: 20,
    padding: 10,
  },
  celular: {
    backgroundColor: '#FFFFFF',
    width: 350,
    height: 80,
    marginTop: 30,
    borderWidth: 1,
    borderColor: '#49070A',
    borderRadius: 20,
    padding: 10,
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
  linha:{
    width: 335,
    height: 1.5,
    marginTop: 20,
  },
  checkboxContainer: {
    backgroundColor: '#FFEDE3',
    borderWidth: 0,
    width: 340,
    marginRight: 20,
  },
  checkboxText: {
    fontSize: 16,
    color: '#49070A80',
    fontFamily: 'Inter_400Regular',
  },
  bottoncontinuar:{
    marginTop: 10,
    width: 250,
    height: 70,
    color:'#FFEDE3',
    backgroundColor: '#49070A',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  continuar:{
    color:'#FFEDE3',
    textAlign: 'center',
    fontSize: 25,
    fontFamily: 'Inter_600SemiBold',
  },
  entrar: {
    fontSize: 15,    
    fontFamily: 'Inter_700Bold',
    color:'#112947',
    textDecorationLine: 'underline',
    marginTop: 8,
  },
});