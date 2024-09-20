const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function logout(){
    firebase.auth().signOut().then(() =>{
        window.location.href = "../../pagina-login/login.html"
    }).catch(() =>{
        alert("Erro ao fazer logout")
    })
}

