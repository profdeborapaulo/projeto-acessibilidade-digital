import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, Modal, ScrollView, Alert, Linking, AppState, TouchableHighlight } from 'react-native';
import { Button, Icon } from "react-native-elements";
import { db, auth } from '../services/firebase/conf';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, query, where, onSnapshot, doc, getDoc, deleteDoc } from 'firebase/firestore';
import { Audio } from 'expo-av';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import { Feather } from '@expo/vector-icons';

import KeyEvent from 'react-native-keyevent';

const ligarPolicia = () => {
  Linking.openURL('tel:190');
};

const BotaoPanicoScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [contacts, setContacts] = useState([]);
  const [userEmail, setEmail] = useState('');
  const [appState, setAppState] = useState(AppState.currentState);
  const [somAlarme, setSomAlarme] = useState();
  const [alarmPlaying, setAlarmPlaying] = useState(false); 
  const [pressCount, setPressCount] = useState(0);
  useEffect(() => {
    KeyEvent.onKeyDownListener((keyEvent) => {
      if (keyEvent.keyCode === KeyEvent.KEYCODE_POWER) {
        setPressCount((prev) => prev + 1);
      }
    });

    return () => {
      KeyEvent.removeKeyDownListener();
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setPressCount(0), 1000);

    if (pressCount === 3) {
      tocarAlarme();
      setPressCount(0);
    }

    return () => clearTimeout(timer);
  }, [pressCount]);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", nextAppState => {
      setAppState(nextAppState);
    });
    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "Usuário", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const fetchedUserEmail = docSnap.data().userEmail;
          setEmail(fetchedUserEmail);
        }
      }
    });

    return () => unsubscribeAuth();
  }, []);

  useEffect(() => {
    if (userEmail) {
      const contactsRef = collection(db, 'Contato de Emergência');
      const q = query(contactsRef, where('user', '==', userEmail));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const contactsData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContacts(contactsData);
      });

      return () => unsubscribe();
    }
  }, [userEmail]);

  const enviarMensagemWhatsApp = (numeroContato) => {
    const mensagem = encodeURIComponent('Socorro! Preciso de ajuda imediatamente.'); // Mensagem padrão
    const numeroFormatado = numeroContato.replace(/\D/g, ''); // Remove caracteres não numéricos

    const url = `whatsapp://send?phone=${numeroFormatado}&text=${mensagem}`;

    Linking.canOpenURL(url)
      .then((supported) => {
        if (supported) {
          Linking.openURL(url);
        } else {
          Alert.alert('Erro', 'WhatsApp não está instalado.');
        }
      })
      .catch((err) => console.error('Erro ao abrir o WhatsApp:', err));
  };

  const removeContact = async (contactId) => {
    try {
      // Confirmação antes de excluir
      Alert.alert(
        "Excluir Contato",
        "Tem certeza que deseja excluir este contato?",
        [
          { text: "Cancelar", style: "cancel" },
          {
            text: "Excluir",
            onPress: async () => {
              await deleteDoc(doc(db, "Contato de Emergência", contactId));
              Alert.alert("Sucesso", "Contato excluído com sucesso.");
            },
          },
        ]
      );
    } catch (error) {
      console.error("Erro ao excluir contato:", error);
      Alert.alert("Erro", "Não foi possível excluir o contato.");
    }
  };
  

  const tocarAlarme = async () => {
    try {
      const { sound } = await Audio.Sound.createAsync(require('../assets/alerta.mp3'));
      setSomAlarme(sound);
      await sound.playAsync();
      setAlarmPlaying(true);
      
      // Envia mensagens para todos os contatos com um intervalo entre elas
      contacts.forEach((contact, index) => {
        if (contact.celularContato) {
          setTimeout(() => {
            console.log(`Enviando mensagem para: ${contact.nomeContato} (${contact.celularContato})`);
            enviarMensagemWhatsApp(contact.celularContato);
          }, index * 3000);  // Intervalo de 3 segundos entre as mensagens
        }
      });
    } catch (error) {
      console.error("Erro ao tocar o som:", error);
      Alert.alert('Erro ao tocar o som.');
    }
  };
  
  

  const pararAlarme = async () => {
    if (somAlarme) {
      await somAlarme.stopAsync();
      await somAlarme.unloadAsync(); 
      setSomAlarme(null); 
      setAlarmPlaying(false);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView>
      {alarmPlaying && (
        <TouchableHighlight style={styles.botaoParar} onPress={pararAlarme}>
          <Text style={styles.textBotaoParar}>Parar Alarme</Text>
        </TouchableHighlight>
      )}

      <Button icon={<Icon name="notifications" size={45} color="#49070A" />} title="Ligar para a polícia"  onPress={ligarPolicia}
        buttonStyle={{     
          width: 330,
          height: 85,
          backgroundColor: "#FFEDE3",
          borderRadius: 40,
          alignItems: "center",
          justifyContent: "center",
          marginTop: 40,
          marginLeft: 'auto',
          marginRight: 'auto', 
        }}
        titleStyle={{
          fontFamily: 'Inter_700Bold', 
          fontSize: 24, 
          color: '#49070A', 
          marginLeft: 5,
        }} 
      />

      <View style={styles.aviso}>
        <Image source={require('../assets/aviso.png')} style={styles.iconaviso} />
        <Text style={styles.textaviso}> Se o agressor estiver com arma de fogo ou objetos que possam machucar, chame a polícia! </Text>
      </View>

      <View style={styles.container2}>
        <View style={styles.contato}>
          <Image source={require('../assets/contato.png')} style={styles.iconcontato} />
          <Text style={styles.textcontato}> Contato de emergência </Text>
        </View>
       <Text style={styles.texto}> O aplicativo Lipa’s oferece um recurso para contatos de emergência, garantindo a segurança dos usuários em situações críticas. </Text>

      <TouchableOpacity style={styles.funciona} onPress={() => setModalVisible(true)}>
        <Text style={styles.textfunciona}> Como funciona? </Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.container3}>
          <View style={styles.popUp}>
            <ScrollView>
            <Text style={styles.titulo}>Explicação das Funcionalidades</Text>
            <Text style={styles.subtitulo}>1. Contatos:</Text>
            <Text style={styles.text}> - Quando um usuário adiciona for adicionar um contato de emergência, ele terá dois tipos, o usuário comum e o usuário Lipa's. </Text>
            <Text style={styles.text}> <Text style={styles.negrito}> - Usuário Comum: </Text> O usuário comum é o tipo de contato que só vai receber a mensagem de socorro pois não tem uma conta em nosso aplicativo. </Text>
            <Text style={styles.text}> <Text style={styles.negrito}> - Usuário Lipa's: </Text> Já o usuário Lipa's é o tipo de conato que tem conta em nosso aplicativo, sendo assim, além de receber a mensagem de socorro, com ele também vai ter o compartilhamento da localização, tanto a dele quanto a sua. </Text>

            <Text style={styles.subtitulo2}>2. Botão de Pânico: </Text>
            <Text style={styles.text}> O aplicativo possui um botão de pânico de fácil acesso. Ele pode ser pode ser ativado de duas maneiras adicionais:  </Text>
            <Text style={styles.text}> <Text style={styles.negrito}> - Dois Cliques no Botão de Desligar: </Text> O usuário pode pressionar rapidamente o botão de desligar do celular duas vezes para ativar o botão de pânico. </Text>
            <Text style={styles.text}> <Text style={styles.negrito}> - Dois Toques no Ícone de Som (Quando estiver em outra tela): </Text> Tocar duas vezes no ícone de som que está no meio da tela no canto direito também ativa o botão de pânico. Caso você ja esteja na tela de emergência, é só dar um clique que ja o aciona.  </Text>
            <Text style={styles.text}> Quando o usuário o aciona, é enviado imediatamente uma mensagem de alerta para o contato de emergência e emite um som de alerta.  </Text>
            <Text style={styles.text}> Para parar o som, vai aparecer um botão no início da tela escrito "Parar Alarme". </Text>

            <Text style={styles.obs}> Até três contatos de Emergência! </Text>
            </ScrollView>
            <TouchableOpacity style={styles.fechar} onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textFechar}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

       <TouchableOpacity style={styles.novoContato} onPress={() => navigation.navigate('usucomum')}> 
        <Text style={styles.textnovoContato}> Novo contato de Emergência </Text>
       </TouchableOpacity>
      </View>

      {contacts.map(contact => (
          <View key={contact.id} style={styles.contactContainer}>
            <View style={styles.alinhamento}>
              <FontAwesome name="user-circle-o" size={30} color="#3C0609" />
              <Text style={styles.contactName}>{contact.nomeContato || 'Nome não disponível'}</Text>
              {contact.type === 'lipas' && (
              <Image source={require('../assets/borbo.png')} style={styles.iconButterfly} />
            )}
            </View>
            <View style={styles.alinhamento2}>
              <MaterialCommunityIcons name="email-outline" size={22} color="#3C060999" />
              <Text style={styles.contactEmail}>{contact.emailContato}</Text>
            </View>
            <View style={styles.alinhamento3}>
               <SimpleLineIcons name="phone" size={22} color="#3C060999" />
               <Text style={styles.contactCelular}>{contact.celularContato}</Text>
            </View>
            <TouchableOpacity onPress={() => removeContact(contact.id)} style={styles.deleteButton}>
              <Text style={styles.deleteText}> Excluir </Text>
            </TouchableOpacity>
          </View>
        ))}
        </ScrollView>

        <TouchableHighlight style={styles.botaoPanico} onPress={tocarAlarme} > 
           <Feather name='volume-2' size={50} color={"#49070A"} />
        </TouchableHighlight>
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
  botaoPanico:{
   position: 'absolute',
   backgroundColor: '#FFEDE3',
   borderRadius: 50,
   marginLeft: 360,
   marginTop: 300,
   height: 60,
   width: 60,
   alignItems: 'center',
   justifyContent: 'center',
   borderRadius: 40,
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
    height: 300,
    borderRadius: 20,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 30,
    marginBottom: 30,
  },
  contato: {
    flexDirection: 'row',
  },
  iconcontato: {
    width: 35,
    height: 35,
    marginLeft: 12,
    marginTop: 15,
  },
  textcontato: {
    fontSize: 24,
    fontFamily: 'Inter_700Bold',
    color: '#49070A',
    marginTop: 17,
    marginRight: 28,
  },
  texto: {
    fontSize: 20,
    fontFamily: 'Inter_400Regular',
    color: '#49070A',
    marginLeft: 17,
    marginTop: 8,
  },
  novoContato: {
    width: 300,
    height: 35,
    backgroundColor: "#49070A",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginLeft: 'auto',
    marginRight: 'auto', 
  },
  textnovoContato: {
    fontFamily: 'Inter_700Bold', 
    fontSize: 15, 
    color: '#FFEDE3', 
  },
  funciona: {
    width: 300,
    height: 35,
    backgroundColor: '#3C0609',
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginLeft: 'auto',
    marginRight: 'auto', 
  },
  textfunciona: {
    fontFamily: 'Inter_700Bold', 
    fontSize: 15, 
    color: '#FFEDE3', 
  },
  container3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  popUp: {
    margin: 20,
    backgroundColor: '#FFEDE3',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
    width: 0,
    height: 2,
  },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  titulo: {
    marginBottom: 15,
    textAlign: 'center',
    fontFamily: 'Inter_700Bold',
    fontSize: 28,
    color: "#49070A",
  },
  subtitulo:{
    fontFamily: 'Inter_700Bold',
    color: "#49070A",
    fontSize: 20,
  },
  subtitulo2:{
    fontFamily: 'Inter_700Bold',
    color: "#49070A",
    fontSize: 20,
    marginTop: 30,
  },
  text:{
    fontFamily: 'Inter_500Medium',
    color: "#49070A",
    fontSize: 18,
    marginTop: 10,
  },
  negrito: {
    fontFamily: 'Inter_600SemiBold',
  },
  obs: {
    fontFamily: 'Inter_700Bold',
    color: "#791227",
    fontSize: 22,
    marginTop: 30,
    textAlign: 'center',
    textDecorationLine: "underline",
    marginBottom: 30,
  },
  fechar: {
    backgroundColor: "#49070A",
    borderRadius: 40,
    padding: 10,
    marginTop: 10,
    width: 200,
  },
  textFechar: {
    color: '#FFEDE3',
    textAlign: 'center',
    fontFamily: 'Inter_700Bold',
    fontSize: 18,
  },
  contactContainer: {
    width: 320,
    height: 160,
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 15,
    backgroundColor: '#FFEDE3',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  alinhamento: {
    flexDirection: 'row',
    marginLeft: 10, 
  },
  contactName: {
    fontSize: 20,
    fontFamily: 'Inter_600SemiBold', 
    color: "#3C0609",
    marginLeft: 5,
  },
  alinhamento2: {
    flexDirection: 'row', 
    justifyContent: 'center',
  },
  contactEmail: {
    fontSize: 15,
    fontFamily: 'Inter_500Medium',
    color: "#3C060999",
    marginLeft: 5,
  },
  alinhamento3: {
    flexDirection: 'row', 
    justifyContent: 'center',
    marginTop: 2,
  },
  contactCelular: {
    fontSize: 15,
    fontFamily: 'Inter_500Medium', 
    color: "#3C060999",
    marginLeft: 5,
  },
  deleteButton: {
    width: 100,
    height: 35,
    backgroundColor: '#3C0609',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
    marginTop: 15,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  deleteText: {
    color: '#FFEDE3',
    fontFamily: 'Inter_700Bold', 
  },
  iconButterfly: {
    width: 60,
    height: 40,
    marginLeft: 240,
    position: 'absolute',
  },
  botaoParar:{
    width: 250,
    height: 70,
    backgroundColor: '#49070A',
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 1.5,
    borderColor: "#FFEDE3",
  },
  textBotaoParar:{
    fontFamily: 'Inter_700Bold', 
    fontSize: 24, 
    color: "#FFEDE3", 
    marginLeft: 5,
  },
});

export default BotaoPanicoScreen;
