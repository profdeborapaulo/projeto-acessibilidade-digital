import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { auth, db } from '../../services/firebase/conf';  
import { doc, getDoc } from 'firebase/firestore';
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native';

const CustomDrawer = (props) => {
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [image, setImage] = useState('https://thumbs.dreamstime.com/b/icono-de-la-mujer-para-el-perfil-imagen-femenino-ser-humano-o-muestra-y-s%C3%ADmbolo-gente-126138203.jpg');
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  const { key, ...drawerProps } = props;

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
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: '#FFEDE3' }}
      >
        <Text
          style={{
            fontSize: 32,
            textAlign: 'center',
            marginVertical: 1,
            fontFamily: 'DMSerifDisplay_400Regular',
            color: "#49070A",
            borderBottomWidth: 1,
            borderColor: '#DDC2BB',
          }}
        >
          Menu
        </Text>
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <View style={styles.settingItem}>
              <Image source={{uri:image}} style={styles.user} />
              <View style={styles.textContainer}>
                <Text style={styles.optionText}>{userName}</Text>
                <Text style={styles.optionStatus}>{userEmail}</Text>
              </View>
            </View>
          </View>
        </View>
        <DrawerItemList {...drawerProps} />
      </DrawerContentScrollView>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.exitButton}>
        <Text style={styles.exitButtonText}>Sair</Text>
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
          <Entypo name="log-out" size={40} color="#49070A" />
            <Text style={styles.title}>Deseja sair do Lipa's?</Text>

            <View style={styles.buttonGroup}>
              <TouchableOpacity onPress={handleExit} style={styles.yesButton}>
                <Text style={styles.buttonSim}>Sim</Text>
              </TouchableOpacity>

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
    paddingHorizontal: 12,
  },
userArea:{
 marginTop: 1,
 marginLeft: 10,
 marginBottom: 10,
},
user:{
  width: 55,
  height: 55,
  borderRadius: 30,
  
  marginRight: 5,
},
settingItem: {
  flexDirection: 'row',
  alignItems: 'center',
  paddingVertical: 12,
  borderBottomWidth: 1,
  borderColor: '#DDC2BB',
},
textContainer: {
  flex: 10,
},
optionText: {
  fontSize: 22,
  color: '#631C1C',
  fontFamily:'Inter_600SemiBold',
  borderColor: '#DDC2BB',
},
optionStatus: {
  marginHorizontal: 2,
  fontSize: 14,
  color: '#631C1C',
  fontFamily: 'Inter_400Regular',
},
exitButton: {
  borderColor: '#631C1C',
  borderWidth: 2,
  padding: 1,
  alignItems: 'center',
  marginTop: 55,
  marginHorizontal: 55,
  paddingVertical: 10,
  borderRadius: 30,
  marginVertical: 23,
},
exitButtonText: {
  fontFamily: 'Inter_700Bold',
  color: '#631C1C',
  fontSize: 24,
  textAlign: 'center'
},
openButton: {
  backgroundColor: '#631C1C',
  paddingVertical: 15,
  borderRadius: 30,
  alignItems: 'center',
  marginTop: 250,
  marginHorizontal: 60,
},
openButtonText: {
  color: '#fff',
  fontSize: 24,
  fontFamily: 'Inter_700Bold',
  marginEnd: 10,
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
  height: '31%',
},
title: {
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
buttonNo:{
  color: '#631C1C',
  fontSize: 22,
  fontFamily: 'Inter_600SemiBold',
  textAlign: 'center',
  paddingVertical: 8,
},
});
export default CustomDrawer;

