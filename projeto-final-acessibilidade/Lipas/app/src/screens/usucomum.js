import React, { useState, useEffect } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image, ScrollView } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from './ThemeContext'; 
import { db, auth } from '../services/firebase/conf';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, query, where, getDocs, addDoc, doc, getDoc } from 'firebase/firestore';

const ContatoComum = ({ navigation }) => {
  const [nomeContato, setNomeContato] = useState('');
  const [emailContato, setEmailContato] = useState('');
  const [celularContato, setCelularContato] = useState('');
  const [outroCelular, setOutroCelular] = useState('');
  const [userEmail, setEmail] = useState('');
  const { theme, switchTheme } = useTheme();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "Usuário", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setEmail(docSnap.data().userEmail);
        } else {
          console.log("No such document!");
        }
      }
    });

    return () => unsubscribe();
  }, []);

  const handleSubmit = async () => {
    if (!nomeContato || !emailContato || !celularContato) {
      Alert.alert("Campos Obrigatórios", "Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    try {
      // Verificar número de contatos
      const contactsRef = collection(db, 'Contato de Emergência');
      const q = query(contactsRef, where('user', '==', userEmail));
      const snapshot = await getDocs(q);

      if (snapshot.size >= 3) {
        Alert.alert("Limite de Contatos", "Você pode adicionar no máximo três contatos de emergência.");
        return;
      }

      // Adiciona o contato no Firebase
      await addDoc(contactsRef, {
        user: userEmail,  
        nomeContato,
        emailContato,
        celularContato,
        outroCelular,
        type: 'comum',
      });

      Alert.alert('Obrigado', 'Contato cadastrado!');
      navigation.navigate('Emergência');
    } catch (error) {
      console.error("Erro ao adicionar contato:", error);
      Alert.alert('Erro', 'Não foi possível cadastrar o contato.');
    }
  };
  
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={styles.navbar}>
        <View style={styles.alinhamento}>
        <TouchableOpacity onPress={() => navigation.navigate('Contato')}>
          <MaterialIcons name="arrow-back-ios" size={30} color="#FFEDE3" />
        </TouchableOpacity>
        <Text style={styles.title}>Contato</Text>
        <Image source={require('../assets/borboleta.png')} style={styles.borboleta} />
        </View>
      </View>

      <ScrollView>
      <Text style={styles.subheader}>
        Cadastre uma pessoa próxima e de confiança para ser seu contato de emergência.
      </Text>

      <View style={styles.inputContainer}>
        <FontAwesome name="user-o" size={24} color="#641919" />
        <TextInput
          style={styles.input}
          placeholder="Nome*"
          value={nomeContato}
          onChangeText={setNomeContato}
        />
      </View>

      <View style={styles.inputContainer}>
        <MaterialCommunityIcons name="email-outline" size={24} color="#641919" />
        <TextInput
          style={styles.input}
          placeholder="Email*"
          keyboardType="email-address"
          value={emailContato}
          onChangeText={setEmailContato}
        />
      </View>

      <View style={styles.inputContainer}>
        <SimpleLineIcons name="phone" size={24} color="#641919" />
        <TextInput
          style={styles.input}
          placeholder="Celular com DDD*"
          keyboardType="phone-pad"
          value={celularContato}
          onChangeText={setCelularContato}
        />
      </View>

      <View style={styles.inputContainer}>
        <SimpleLineIcons name="phone" size={24} color="#641919" />
        <TextInput
          style={styles.input}
          placeholder="Outro Celular"
          keyboardType="phone-pad"
          value={outroCelular}
          onChangeText={setOutroCelular}
        />
      </View>

      <View style={styles.instructionsContainer}>
        <Text style={styles.instructions}>
          • No número do celular, por favor coloque "55" mais o DDD, pois o Lipa's utiliza do WhatsApp para mandar as mensagens de socorro
        </Text>
        <Text style={styles.instructions}>
          • Lembre-se de conversar com a pessoa antes de cadastrá-la. É importante que ela esteja ciente que receberá pedidos de socorro.
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
      </ScrollView>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAE9E4',
  },
  navbar: {
    width: '100%', // Faz a navbar ocupar toda a largura
    height: 110, // Ajuste a altura se necessário
    backgroundColor: '#49070A',
    paddingHorizontal: 8,
  },
  alinhamento:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 40,
    marginLeft: 10,
  },
  title: {
    fontSize: 36,
    color: '#FFEDE3',
    fontFamily: 'DMSerifDisplay_400Regular', // Certifique-se de carregar a fonte correta
  },
  subheader: {
    fontSize: 20,
    color: '#641919',
    marginBottom: 3,
    fontFamily: 'Inter_400Regular',
    marginStart: 32,
    marginVertical: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderRadius: 20,
    padding: 15,
    marginBottom: 10,
    borderColor: '#641919',
    borderWidth: 1,
    padding: 20,
    marginTop: 15,
    marginHorizontal: 23,
  },
  input: {
    flex: 1,
    marginHorizontal: 6,
    fontFamily: 'Inter_400Regular',
    fontSize: 20,
    color: '#49070A',
  },
  instructionsContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  instructions: {
    fontSize: 16,
    color: '#641919',
    marginBottom: 2,
    fontFamily: 'Inter_500Medium',
    marginStart: 35,
    marginVertical: 5,
    marginEnd: 28,
  },
  button: {
    backgroundColor: '#49070A',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
    marginHorizontal: 90,
    marginBottom: 50,
  },
  buttonText: {
    color: '#FFEDE3',
    fontSize: 20,
    fontFamily: 'Inter_700Bold',
  },
  borboleta: {
    width: 55,
    height: 55,
    marginStart: 175,
    marginVertical: 2,
  },
});

export default ContatoComum;