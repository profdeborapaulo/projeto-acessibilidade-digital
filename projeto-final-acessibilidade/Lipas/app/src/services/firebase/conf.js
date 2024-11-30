import { initializeApp } from 'firebase/app';
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';


const firebaseConfig = {
  apiKey: "AIzaSyAQ2HGaih-ul55zjzmIntVGRjVJ7ubnUG8",
  authDomain: "lipa-s.firebaseapp.com",
  projectId: "lipa-s",
  storageBucket: "lipa-s.appspot.com",
  messagingSenderId: "1004400319686",
  appId: "1:1004400319686:web:cb9c64fbeed7b1ba850bc7"
};

const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };





