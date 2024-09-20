const firebaseConfig = {
    apiKey: "AIzaSyDk_gzIjpDebMURwi4pKn40PASAWoEsQS0",
    authDomain: "aloti-b915b.firebaseapp.com",
    projectId: "aloti-b915b",
    storageBucket: "aloti-b915b.appspot.com",
    messagingSenderId: "474323336877",
    appId: "1:474323336877:web:40d408027c0f50f24b5024"
};
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.database(app);