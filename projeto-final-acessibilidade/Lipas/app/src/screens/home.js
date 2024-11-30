import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, PermissionsAndroid } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps'; // Apenas visualização do mapa
import { useTheme } from './ThemeContext'; 
import { db, auth } from '../services/firebase/conf';
import { onAuthStateChanged } from 'firebase/auth';
import { collection, query, where, onSnapshot, doc, getDoc } from 'firebase/firestore';
import { Feather } from '@expo/vector-icons';

const LOCATION_TASK_NAME = 'background-location-task';

const HomeScreen = ({ navigation }) => {
  const [foregroundGranted, setForegroundGranted] = useState(false)
  const [backgroundGranted, setBackgroundGranted] = useState(false)
  const { theme, switchTheme } = useTheme();
  useEffect(()=>{
    checkPermission() // chamo a funcão que vai verificar se tem permissao ou nao
  }, [])

  useEffect(()=>{
    checkPermission() // aqui eu verifico sempre se tem a permissão pra background E foreground
  }, [foregroundGranted, backgroundGranted])

  async function checkPermission() {
    console.log('checkou')
    let fore = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
    setForegroundGranted(fore)
      if(!fore){
        navigation.navigate('Permissions')
      }
    let backe = await PermissionsAndroid.check(PermissionsAndroid.PERMISSIONS.ACCESS_BACKGROUND_LOCATION)
    setBackgroundGranted(backe)
      if(!backe) {
        navigation.navigate('Permissions')
      } 
  }

  const [location, setLocation] = useState();
  const [region, setRegion] = useState({
    latitude: -23.55052,
    longitude: -46.633308,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });
 
  const [userLocation, setUserLocation] = useState();


  useEffect(()=>{
    startLocationUpdates();
  }, [])

  
  async function startLocationUpdates() {
    let currentLocation = await Location.getCurrentPositionAsync({})

    setLocation(currentLocation.coords);
    setUserLocation(currentLocation.coords);
    setRegion({
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude,
      latitudeDelta: 0.01,
      longitudeDelta: 0.01,
    });

    await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
      accuracy: Location.Accuracy.BestForNavigation,
      distanceInterval: 50,
      showsBackgroundLocationIndicator: true,
    });
  };

  console.log('Region:: '+JSON.stringify(region))

  const [contacts, setContacts] = useState([]);
  const [userEmail, setEmail] = useState('');

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

  // Função para enviar localização aos contatos de emergência
  const enviarLocalizacaoWhatsApp = (numeroContato) => {
    if (!numeroContato) {
      Alert.alert('Erro', 'Número de contato inválido.');
      return;
    }
  
    if (!userLocation) {
      Alert.alert('Erro', 'Localização não disponível.');
      return;
    }
  
    const mensagem = encodeURIComponent(`Estou em perigo! Minha localização é: https://www.google.com/maps?q=${userLocation.latitude},${userLocation.longitude}`);
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
  

  

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <TouchableOpacity onPress={() => Location.getCurrentPositionAsync()} style={styles.atualizar}>
        <Text style={styles.textAtualizar}>Atualizar Localização</Text>
      </TouchableOpacity>

      <MapView style={styles.map} showsUserLocation={true}
        initialRegion={{
          latitude: region.latitude,
          longitude: region.longitude,
          latitudeDelta: 0.005, // Valores ajustados manualmente para o nível de zoom
          longitudeDelta: 0.005, // Valores ajustados manualmente para o nível de zoom
          }}
        >
        {location && <Marker coordinate={location} title="Você está aqui" />}
      </MapView>

      <TouchableOpacity style={styles.botaoPanico} onPress={() => navigation.navigate('Emergência')}>
        <Feather name='volume-1' size={50} color={"#FFEDE3"} />
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#640F14',
    width: '100%',
    height: '100%',
  },
  botaoPanico:{
    position: 'absolute',
    backgroundColor: '#3C0609',
    borderRadius: 50,
    marginLeft: 360,
    marginTop: 300,
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 40,
   },
  map: {
    width: '100%',
    height: 650,
  },
  container2: {
    backgroundColor: '#FFEDE3',
    width: '100%',
    height: 280,
    borderWidth: 2,
    borderColor: '#640F1480',
    marginTop: 420,
    borderRadius: 30,
    alignItems: 'center',
    position: 'absolute',
  },
  texto: {
    width: 320,
    fontSize: 16,
    fontFamily: 'Inter_600SemiBold',
    color: '#49070A',
    textAlign: 'center',
    marginTop: 80,
  },
  convida: {
    width: 150,
    height: 30,
    borderWidth: 1.5,
    borderColor: "#49070A",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
  textconvida: {
    fontFamily: 'Inter_700Bold',
    fontSize: 16,
    color: '#49070A',
  },
  atualizar:{
    backgroundColor: '#640F14',
    width: '100%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    borderWidth: 2,
    borderColor: '#49070A',
  },
  textAtualizar:{
    color: '#FFEDE3',
    fontFamily: 'Inter_700Bold',
    fontSize: 16,
  },
  contactItem: {
    backgroundColor: '#FFEDE3',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
  },
  contactText: { 
    color: '#49070A', 
    fontSize: 16 
  },
  button: {
    backgroundColor: '#640F14',
    padding: 8,
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonStop: {
    backgroundColor: '#D32F2F',
    padding: 8,
    borderRadius: 5,
    marginVertical: 5,
  },
  buttonText: {
    color: '#FFEDE3',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default HomeScreen;




