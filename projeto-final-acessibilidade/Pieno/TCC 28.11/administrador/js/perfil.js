const firebaseConfig = {
    apiKey: "AIzaSyA1v3c9Fvj3Bcb9zNaKJCPUpwCEfp-UIrY",
    authDomain: "pieno-862b3.firebaseapp.com",
    databaseURL: "https://pieno-862b3-default-rtdb.firebaseio.com",
    projectId: "pieno-862b3",
    storageBucket: "pieno-862b3.appspot.com",
    messagingSenderId: "196237986447",
    appId: "1:196237986447:web:c3c0d7226e9568d831befa"
};

// Inicializando o Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const analytics = firebase.analytics();
const db = firebase.firestore();

function pegarDadosUrl(){
    const urlParams = new URLSearchParams(window.location.search);
    const uid = urlParams.get("uid")
    return uid 
}
var uid = pegarDadosUrl

function carregarDados(){
const acesso = db.collection(`acesso`);
    acesso.where('cod', '==', uid ).get().then((snapshot) => {
        console.log(snapshot.val())

    })}