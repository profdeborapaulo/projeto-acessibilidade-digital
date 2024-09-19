const firebaseConfig = {
    apiKey: "AIzaSyAK1Y4DAftt63mVx3tngghMWXYDfg5zzTo",
    authDomain: "rhinny-319e6.firebaseapp.com",
    projectId: "rhinny-319e6",
    storageBucket: "rhinny-319e6.appspot.com",
    messagingSenderId: "860506842460",
    appId: "1:860506842460:web:e3176d1e88d16664590d99",
    measurementId: "G-KKE67JZ0M6"
}
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

//identifica o usuario a partir do estado de autenticação 
firebase.auth().onAuthStateChanged((user) => {
    if(!user){
        window.location.href = "..//pagina-login/login.html";
    }
})

function logout(){
    firebase.auth().signOut().then(() =>{
        window.location.href = "../../pagina-login/login.html"
    }).catch(() =>{
        alert("Erro ao fazer logout")
    })
}

