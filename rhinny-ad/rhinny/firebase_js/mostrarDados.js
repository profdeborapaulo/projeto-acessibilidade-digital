// Este código escuta as mudanças no estado de autenticação do Firebase
firebase.auth().onAuthStateChanged((user) => {
  // A função é chamada sempre que o estado de autenticação muda
  if (user) {
    // Se um usuário estiver logado, 'user' contém as informações do usuário
    globalUserId = user.uid; // Armazena o UID do usuário globalmente
    console.log("Usuário logado: " + globalUserId); // Exibe o UID do usuário no console

    // Chama a função para obter os dados do usuário no Firestore
    getUserData(globalUserId);
    
    // Chama a função para mostrar os dados de autenticação na interface
    mostrarDadosAuth(user);
  } else {
    // Se não houver usuário logado, exibe uma mensagem no console
    console.log("Nenhum usuário logado.");
  }
});

// Função para obter dados do usuário no Firestore usando o UID
function getUserData(globalUserId) {
  const userRef = firebase.firestore().collection("users").doc(globalUserId); // Referência ao documento do usuário na coleção 'users'
  
  userRef.get() // Obtém os dados do documento
    .then((doc) => {
      if (doc.exists) {
        const userData = doc.data(); // Se o documento existir, obtém os dados
        mostrarDadosFirestore(userData); // Chama a função para mostrar os dados na interface
      } else {
        console.log(globalUserId); // Exibe o UID se o documento não for encontrado
        console.log("Nenhum documento encontrado!"); // Mensagem caso não exista o documento
      }
    })
    .catch((error) => {
      console.error("Erro ao obter documento:", error); // Exibe erro caso ocorra um problema ao buscar os dados
    });
}

// Função para exibir dados do usuário na tela
function mostrarDadosFirestore(userData) {
  document.getElementById("nome_usuario").innerHTML = userData.nome_crianca; // Mostra o nome do adulto na interface
  document.getElementById("nome_crianca").innerHTML = userData.nome_crianca; // Mostra o nome da criança na interface
  document.getElementById("nome_adulto").innerHTML = userData.nome_adulto; // Mostra novamente o nome do adulto (opcional)
  document.getElementById("nome_trocar").placeholder = userData.nome_crianca; // Define o placeholder com o nome da criança
  document.getElementById("nome_trocar").value = userData.nome_crianca; // Define o valor do campo com o nome da criança
}

// Função para mostrar dados de autenticação na tela
function mostrarDadosAuth(user) {
  document.getElementById("email_trocar").placeholder = user.email; // Define o placeholder com o e-mail do usuário logado
  document.getElementById("email_trocar").value = user.email; // Define o valor do campo com o e-mail do usuário logado
}

// Função para apagar a conta do usuário autenticado e seus dados no Firestore
function apagandoUsuario() {
  const user = firebase.auth().currentUser; // Obtém o usuário atualmente autenticado
  
  user.delete() // Tenta deletar a conta do usuário autenticado
    .then(() => {
      alert("Conta deletada"); // Mensagem de sucesso ao deletar a conta
      logout(); // Chama a função de logout após deletar a conta
    })
    .catch((error) => {
      alert("Ocorreu um erro: " + error.code); // Mensagem de erro se falhar ao deletar a conta
      // ...
    });

  const userRef = firebase.firestore().collection("users").doc(globalUserId); // Referência ao documento do usuário no Firestore
  
  userRef.delete() // Tenta deletar os dados do usuário no Firestore
    .then(() => {})
    .catch((error) => {
      alert("Não apagou do banco"); // Mensagem de erro se falhar ao deletar os dados no Firestore
    });
}

// Função para mudar os dados do usuário e, opcionalmente, redefinir a senha
function mudarDados() {
  const userRef = firebase.firestore().collection("users").doc(globalUserId); // Referência ao documento do usuário no Firestore
  
  const nome_mudanca = document.getElementById("nome_trocar").value; // Obtém o novo nome da criança a partir da interface
  const senha = document.getElementById("password-trocar").value; // Obtém a nova senha (se fornecida)
  
  userRef.update({
    nome_crianca: nome_mudanca, // Atualiza o nome da criança no Firestore
  })
  .then(() => {
    alert("Dados do usuário modificados com sucesso"); // Mensagem de sucesso ao atualizar os dados
  });

  if (senha) { 
    var email = document.getElementById("email_trocar").value; // Obtém o e-mail atual da interface
    
    firebase.auth().sendPasswordResetEmail(email) // Envia um e-mail para redefinição de senha se uma nova senha for fornecida
      .then(() => {
        alert('Email para redefinição de senha enviado para ' + email); // Mensagem de sucesso ao enviar o e-mail de redefinição de senha
      })
      .catch((error) => {
        alert("Erro ao enviar email de redefinição de senha: " + error); // Mensagem de erro se falhar ao enviar o e-mail de redefinição de senha
      });
  }
}