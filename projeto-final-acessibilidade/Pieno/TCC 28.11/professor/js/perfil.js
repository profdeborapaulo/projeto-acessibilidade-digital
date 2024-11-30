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
const db = firebase.firestore();


  db.collection('acesso').where('cod','==',uid).get().then((querysnapshot) => {
  querysnapshot.forEach((doc) => {
    
    document.getElementById('cargo').innerHTML = "USUÁRIO:"+doc.data().cargo
    
    document.getElementById('email').innerHTML = "EMAIL:"+doc.data().email

    document.getElementById('telefone').innerHTML = "TELEFONE:"+doc.data().telefone

    document.getElementById('rm').innerHTML = "RM:"+doc.data().rm
    
    document.getElementById('cpf').innerHTML ='CPF:'+doc.data().cpf

    document.getElementById('rg').innerHTML = "RG:"+doc.data().rg

    document.getElementById('cep').innerHTML = "CEP:"+doc.data().cep

    document.getElementById('nomeCrianca').innerHTML = "NOME CRIANÇA:"+doc.data().nomeCrianca

    document.getElementById('idade').innerHTML = "IDADE CRIANÇA:"+doc.data().idade


    
    console.log(doc.data())
  })
}).catch((error) => {
  console.log(error)
})

