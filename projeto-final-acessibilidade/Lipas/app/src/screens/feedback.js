import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Modal, TouchableWithoutFeedback, Button } from 'react-native';
import { auth, db } from '../services/firebase/conf';
import { setDoc, doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { useTheme } from './ThemeContext'; 


const FeedbackScreen = () => {
  const [userComentario, setFeedback] = useState('');
  const [useravaliacao, setRating] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState('');
  const [userName, setName] = useState('');
  const { theme, switchTheme } = useTheme();
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "Usuário", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          console.log("Document data:", docSnap.data());
          setName(docSnap.data().userName);
        } else {
          console.log("No such document!");
        }
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSendFeedback = async () => {
    if (userComentario.trim() === '' || useravaliacao === 0) {
      setMessage('Por favor, preencha todos os campos.');
      setModalVisible(true);
    } else {
      try {
        const feedbackData = { userComentario, useravaliacao, timestamp: new Date(), userName };
        // Adicione o feedback a uma coleção no Firestore
        await setDoc(doc(db, "Feedback", `feedback_${new Date().getTime()}`), feedbackData);
        setMessage('Feedback enviado com sucesso');
        setFeedback('');
        setRating(0);
      } catch (error) {
        console.error("Erro ao enviar feedback: ", error);
        setMessage('Erro ao enviar feedback');
      }
      setModalVisible(true);
    }
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <TouchableOpacity key={i} onPress={() => setRating(i)}>
          <Text style={[styles.star, { color: i <= useravaliacao ? '#7C1C1C' : '#CCCCCC' }]}>
            ★
          </Text>
        </TouchableOpacity>
      );
    }
    return stars;
  };

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <Text style={styles.instructions}>
        Escreva na caixa abaixo sua experiência, problemas, sugestões de melhoria ou qualquer informação que considerar relevante para melhorar nossos serviços e tornar o Lipa's melhor.
      </Text>
      <TextInput
        style={styles.textInput}
        placeholder="Digite seu feedback aqui"
        value={userComentario}
        onChangeText={setFeedback}
        multiline
      />
      <Text style={styles.ratingTitle}>NOS AVALIE!</Text>
      <Text style={styles.ratingSubtitle}>Deixe a sua avaliação da sua experiência no Lipa's</Text>
      <View style={styles.starsContainer}>
        {renderStars()}
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContent}>
              <Image source={require('../assets/borbo.png')} style={styles.borb} />
              <Text style={styles.modalText}>{message}</Text>
              <Button title="Fechar" onPress={() => setModalVisible(false)} style={styles.buttonmessage}/>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <TouchableOpacity style={styles.submitButton} onPress={handleSendFeedback}>
        <Text style={styles.submitButtonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5E4E1',
    padding: 20,
  },
  instructions: {
    marginTop: 15,
    fontSize: 20,
    textAlign: 'center',
    color: '#7C1C1C',
    fontFamily: 'Inter_500Medium',
  },
  textInput: {
    marginTop: 20,
    borderColor: '#7C1C1C',
    borderWidth: 2,
    borderRadius: 13,
    padding: 20,
    backgroundColor: 'white',
    fontSize: 16,
    textAlignVertical: 'top',
  },
  ratingTitle: {
    marginTop: 33,
    fontSize: 24,
    fontFamily: 'DMSerifDisplay_400Regular',
    textAlign: 'center',
    color: '#7C1C1C',
    marginVertical: 1,
  },
  ratingSubtitle: {
    fontSize: 21,
    textAlign: 'center',
    marginVertical: 1,
    marginBottom: 13,
    color: '#7C1C1C',
    fontWeight: 'light',
    fontFamily: 'Inter_500Medium',
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  star: {
    fontSize: 30,
    marginRight: 10,
  },
  submitButton: {
    backgroundColor: '#631C1C',
    paddingVertical: 11,
    borderRadius: 30,
    alignItems: 'center',
    marginHorizontal: 105,
    marginTop: 36,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
    textAlign: 'center',
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
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: 300,
    padding: 15,
    backgroundColor: '#F5E4E1',
    borderRadius: 50,
    alignItems: 'center',
    borderColor: '#7C1C1C',
    borderWidth: 2,
  },
  modalText: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'Inter_700Bold',
    color: '#640F14',
  },
  borb: {
    width: 150,
    height: 140,
    marginVertical: 20,
    marginRight: 20,
    alignItems: 'center',
  },
  Text: {
    fontSize: 23,
    textAlign: 'center',
    fontFamily: 'Inter_700Bold',
    color: '#640F14',
  },
  button: {
    borderColor: '#631C1C',
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 130,
    paddingVertical: 22,
    paddingHorizontal: 17,
    borderRadius: 19,
  },
  close: {
    backgroundColor: '#49070A',
    paddingVertical: 3,
    paddingRight: 22,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 6,
  },
  buttonmessage: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'Inter_700Bold',
    backgroundColor: '#631C1C',
    borderRadius: 30,
  },
});

export default FeedbackScreen;

