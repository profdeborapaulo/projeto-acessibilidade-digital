  // // Função para trocar a imagem de perfil
  // document.getElementById('changeAvatarButton').addEventListener('click', function() {
  //   document.getElementById('avatarInput').click();
  // });
  
  // document.getElementById('avatarInput').addEventListener('change', function(event) {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
      
  //     // Quando o leitor de arquivo carregar a imagem
  //     reader.onload = function(e) {
  //       document.getElementById('profileAvatar').src = e.target.result; // Muda o src da imagem para o caminho da nova imagem
  //     };
      
  //     reader.readAsDataURL(file); // Lê o arquivo como Data URL
  //   }
  // });
  
  // //escolher ficheiro
  // function previewProfilePic(event) {
  //   selectedFile = event.target.files[0]; // Armazena o ficheiro selecionado
  //   const reader = new FileReader(); // Cria um objeto FileReader
  
  //   reader.onload = function(e) {
  //       const profilePic = document.getElementById('profilePic'); // Obtém o elemento da imagem do perfil
  //       profilePic.src = e.target.result; // Define o src para a URL dos dados do ficheiro
  //       document.getElementById('confirmButton').style.display = 'block'; // Mostra o botão de confirmação
  //   };
  
  //   if (selectedFile) {
  //       reader.readAsDataURL(selectedFile); // Lê o ficheiro como uma URL dos dados
  //   }
  // }
  
  // function confirmProfilePic() {
  //   if (selectedFile) {
  //       // Aqui você pode adicionar lógica para enviar o ficheiro ao servidor, se necessário.
  //       alert('Imagem do perfil atualizada com sucesso!'); // Mensagem de sucesso
  //       document.getElementById('confirmButton').style.display = 'none'; // Esconde o botão após a confirmação
  //   } else {
  //       alert('Por favor, selecione um ficheiro primeiro.'); // Mensagem de erro
  //   }
  // }

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


  function pegarUrl(){
    const urlParams = new URLSearchParams(window.location.search);
    const uid = urlParams.get("uid")
    return uid
}


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

