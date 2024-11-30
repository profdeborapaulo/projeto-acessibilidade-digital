import React from 'react';
import { useState } from 'react';
import { View, Image, TouchableOpacity, Text, StyleSheet, ScrollView} from 'react-native';
import { Input }  from 'react-native-elements';
import { auth, db } from '../services/firebase/conf';
import { doc, setDoc } from 'firebase/firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';


export default function CadastroScreen({ navigation }){
  const [userName, setName] = useState('');
  const [userNumCel, setTel] = useState('');
  const [userEmail, setEmail] = useState('');
  const [userSenha, setSenha] = useState('');
  const [message, setMessage] = useState('');

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, userEmail, userSenha);
      const user = userCredential.user;
      const userData = { userEmail, userName, userNumCel, userSenha };

      await setDoc(doc(db, "Usuário", user.uid), userData);
      navigation.replace("Login")
      setMessage('Conta criada com sucesso');
    } catch (error) {
      if (error.code === 'auth/email-already-in-use') {
        setMessage('Endereço de email já existe');
      } else {
        setMessage('Não é possível criar usuário');
      }
      console.error("Error adding document: ", error);
    }
  };

  return (
    <View style={styles.container}>
    <Image source = {require('../assets/borboleta.png')} style = {styles.borboleta} />
    <View style={styles.container2}>
    
    <ScrollView>
     <View style={styles.scroll}>
       <Text style = {styles.Title}> Cadastro </Text>
        <Text style={styles.subtitulo}> Crie a sua conta </Text>
    <View style = {styles.nome}>
      <Input type="name" style={styles.input}  placeholder="Nome"  placeholderTextColor="#49070A98"  leftIcon={{ type: 'font-awesome', name: 'user', color:'#49070A98'}} onChangeText={value => setName(value)} />
    </View>
    <View style = {styles.celular}>
      <Input type="tel" style={styles.input} placeholder="Celular"  placeholderTextColor="#49070A98"   leftIcon={{ type: 'font-awesome', name: 'phone', color:'#49070A98'}}  onChangeText={value => setTel(value)}  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"/>
    </View>
    <View style = {styles.email}>
      <Input style={styles.input}  placeholder="E-mail"  placeholderTextColor="#49070A98"  leftIcon={{ type: 'font-awesome', name: 'envelope', color:'#49070A98'}} onChangeText={value => setEmail(value)}  keyboardType='email-address'  />
    </View>
    <View style={styles.senha}>
      <Input style={styles.input} placeholder="Senha" placeholderTextColor="#49070A98" leftIcon={{ type: "font-awesome", name: "lock", color: "#49070A98" }} onChangeText={(value) => setSenha(value)} secureTextEntry={true} />
    </View>
    <Image source = {require('../assets/linha.png')} style={styles.linha} />
    <View>
      <Text style={styles.termos}> Ao me cadastrar, eu declaro que li e concordo com os <Text style={styles.underline} onPress={() => navigation.navigate("Termos")}>Termos e Condições.</Text> </Text>
    </View>
      <TouchableOpacity  style={styles.bottoncadastrar} onPress={handleSignUp}>
       <Text style={styles.cadastrar}> Cadastrar </Text>
      </TouchableOpacity>
      {message ? <Text>{message}</Text> : null}
      <Text onPress={() => navigation.navigate("Login")} style={styles.entrar}> Já tem uma conta? Entrar </Text>
      </View>
    </ScrollView>
    
    <View style={styles.espaco}></View>
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
  },
  Title: {
    fontSize: 65,
    fontFamily: 'DMSerifDisplay_400Regular',
    color: '#631C1C',
    textAlign: 'center',
    paddingTop: 12,
  },
  subtitulo:{
    fontSize: 18,    
    fontFamily: 'Inter_500Medium',
    color:'#49070A',
  },
  scroll:{
    width: '100%',
    height: 900,
    backgroundColor: '#FFEDE3',
    borderRadius: 30,
    alignItems: 'center',
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
  senha: {
    backgroundColor: "#FFFFFF",
    width: 350,
    height: 80,
    marginTop: 30,
    borderWidth: 1,
    borderColor: "#49070A",
    borderRadius: 20,
    padding: 10,
  },
  linha:{
    width: 335,
    height: 1.5,
    marginTop: 20,
  },
  termos: {
    fontSize: 14,
    color: '#49070A',
    fontFamily: 'Inter_400Regular',
    width: 360,
    marginTop: 5,
  },
  underline: {
    textDecorationLine: 'underline',
    fontFamily: 'Inter_600SemiBold',
    color: '#112947',
  },
  bottoncadastrar:{
    marginTop: 30,
    width: 250,
    height: 70,
    color:'#FFEDE3',
    backgroundColor: '#49070A',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cadastrar:{
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
  espaco: {
    width: '100%',
    height: 250,
  },
});