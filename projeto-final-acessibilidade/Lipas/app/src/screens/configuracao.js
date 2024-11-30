import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';
import { useTheme } from './ThemeContext'; // Importando o contexto de tema
import Entypo from 'react-native-vector-icons/Entypo';
import { auth, db } from '../services/firebase/conf';  
import { useNavigation } from '@react-navigation/native';


const ConfigScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { theme, switchTheme } = useTheme(); // Acessando o tema
  const navigation = useNavigation();

  const handleExit = () => {
    console.log("Saindo do app...");
    signOut()
    setModalVisible(false);
  };
    useEffect(() => {
      const fetchUserData = async () => {
        const user = auth.currentUser;
        if (user) {
          const docRef = doc(db, 'Usuário', user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const userData = docSnap.data();
            setUserName(userData.userName);
            setUserEmail(userData.userEmail);
            setImage(userData.userImagem);
          }
        }
      };
      fetchUserData();
    }, []);
  
    const signOut = () => {
      auth.signOut();
      navigation.navigate('Login');
    }
  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Botões para alternar temas */}
      <Text style={[styles.title, { color: theme.text }]}>Acessibilidade</Text>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.button }]}
        onPress={() => switchTheme('default')}
      >
        <Text style={styles.buttonText}>Tema Padrão</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.button }]}
        onPress={() => switchTheme('protanopia')}
      >
        <Text style={styles.buttonText}>Protanopia(Vermelho)</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.button }]}
        onPress={() => switchTheme('deuteranopia')}
      >
        <Text style={styles.buttonText}>Deuteranopia(Verde)</Text>
      </TouchableOpacity>

      <TouchableOpacity
        
        style={[styles.button, { backgroundColor: theme.button }]}
        onPress={() => switchTheme('tritanopia')}
      >
        <Text style={styles.buttonText}>Tritanopia(Azul-amarelo)</Text>
      </TouchableOpacity>

      {/* Botão para sair */}
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.exitButton}>
        <Text style={styles.exitButtonText}>Sair do App</Text>
      </TouchableOpacity>

      {/* Modal de confirmação */}
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <Entypo name="log-out" size={45} color="#49070A" />
            <Text style={styles.title2}>Deseja sair do Lipa's?</Text>

            <View style={styles.buttonGroup}>
              {/* Botão "Sim" */}
              <TouchableOpacity onPress={handleExit} style={styles.yesButton}>
                <Text style={styles.buttonSim}>Sim</Text>
              </TouchableOpacity>

              {/* Botão "Não" */}
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.noButton}>
                <Text style={styles.buttonNo}>Não</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 35,
    fontFamily: 'Inter_700Bold',
    textAlign: 'center',
   textAlign: 'center',
   marginVertical: 16,
  },
  button: {
    padding: 15,
    borderRadius: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 17,
    fontFamily: 'Inter_600SemiBold',
    color: '#FFEDE3'
  },
  exitButton: {
    backgroundColor: '#631C1C',
    paddingVertical: 16,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 120,
    marginHorizontal: 60,
  },
  exitButtonText: {
    fontFamily: 'Inter_700Bold',
    color: '#FFEDE3',
    fontSize: 24,
    textAlign: 'center',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: '#FAE9E4',
    borderRadius: 15,
    padding: 22,
    alignItems: 'center',
    elevation: 10,
    height: '33%',
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 15,
  },
  buttonGroup: {
    width: '115%',
  },
  buttonSim: {
    color: '#631C1C',
    fontSize: 22,
    fontFamily: 'Inter_600SemiBold',
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: '#DDC2BB',
    paddingVertical: 14,
  },
  buttonNo: {
    color: '#631C1C',
    fontSize: 22,
    fontFamily: 'Inter_600SemiBold',
    textAlign: 'center',
    paddingVertical: 8,
  },
  modalButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  title2:{
    fontSize: 25,
    fontFamily: 'Inter_700Bold',
    color: '#49070A',
    marginBottom: 2,
    textAlign: 'center',
    borderBottomWidth: 1,
    borderColor: '#DDC2BB',
    paddingVertical: 20,
    alignItems: 'center',
    width: '115%',
  },
});

export default ConfigScreen;