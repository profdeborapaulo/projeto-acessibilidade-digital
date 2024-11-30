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



function login(){
    var rm =   document.getElementById('rm').value
    var senha = document.getElementById('password').value
    var cargo = document.getElementById('login').value

    const acesso = db.collection(`acesso`).doc(`${cargo}_${rm}`)
    acesso.get().then((doc) => {
        if(doc.exists){
            
                if(doc.data().senha != senha){
                    alert('Cargo,rm ou senha incorreto')        
                }else{
                    window.location.href = `../../../${cargo}/html/home.html?uid=${doc.data().cod}`
                }
        }else{
            alert('Cargo,rm ou senha incorreto')    
        }
    }).catch((error) => {
        alert(error)
    })
}

function recuperarHref(){
    window.location.href = 'recuperarSenha.html'
   
}

function recuperarSenha(){
    var rm =   document.getElementById('rm').value
    var cargo = document.getElementById('login').value
    var cpf = document.getElementById('cpf').value
    var senha = document.getElementById('senha').value
    const acesso = db.collection(`acesso`).doc(`${cargo}_${rm}`)
    acesso.get().then((doc) => {
        if(doc.exists){
            if(doc.data().cpf == cpf){
                acesso.update({senha: senha})
                document.getElementById('resposta').innerHTML = "A senha mudou"
            }else{
                document.getElementById('resposta').innerHTML = "CPF Incorreto"
            }
        }else{
            document.getElementById('resposta').innerHTML = "Este rm não existe"
        }
    }).catch((error) => {
        alert(error)
    })
}

function showPopup(message) {
    document.getElementById('popupMessage').textContent = message;
    document.getElementById('popupAlert').classList.remove('hidden');
}

function closePopup() {
    document.getElementById('popupAlert').classList.add('hidden');
}

// Função de login com popup de alerta
function login() {
    var rm = document.getElementById('rm').value;
    var senha = document.getElementById('password').value;
    var cargo = document.getElementById('login').value;

    const acesso = db.collection(`acesso`).doc(`${cargo}_${rm}`);
    acesso.get().then((doc) => {
        if (doc.exists) {
            if (doc.data().senha != senha) {
                showPopup('Cargo, RM ou senha incorreto');
            } else {
                window.location.href = `../../../${cargo}/html/home.html?uid=${doc.data().cod}`;
            }
        } else {
            showPopup('Cargo, RM ou senha incorreto');
        }
    }).catch((error) => {
        showPopup(error.message);
    });
}
