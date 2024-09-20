// Objeto Form que contém métodos para obter valores dos campos do formulário
const Form = {
  email: () => document.getElementById("email-cadastro").value,
  senha: () => document.getElementById("senha-cadastro").value,
  nome: () => document.getElementById("nome-cadastro").value,
  data: () => document.getElementById("data").value,
  nome_crianca: () => document.getElementById("nome-cadastro-crianca").value,
  data_crianca: () => document.getElementById("data-cadastro-crianca").value,
  botao_cadastrar: () => document.getElementById("btn-submit-crianca"),
  botao_continuar: () => document.getElementById("btn-continuar"),
};

function logout() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("Usuário desconectado com sucesso.");
    })
    .catch(() => {
      alert("Erro ao fazer logout");
    });
}

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    // Redirecionar ou realizar ações com o usuário autenticado
    console.log("Usuário logado:", user.uid);
    setTimeout(() => {
      window.location.href = "../pagina-inicial/pagina-inicial.html";
    }, 4000);
  }
});

// Adiciona um ouvinte de evento ao botão "btn-submit-crianca"
document
  .getElementById("btn-submit-crianca")
  .addEventListener("click", function () {
    // Obtendo os valores dos campos
    const email = Form.email();
    const senha = Form.senha();
    const nome = Form.nome();
    const data = Form.data();
    const nome_crianca = Form.nome_crianca();
    const data_crianca = Form.data_crianca();

    console.log(nome_crianca);
    console.log(data_crianca);

    // Criar usuário com email e senha
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, senha)
      .then((userCredential) => {
        // Se a criação do usuário for bem-sucedida
        const user = userCredential.user; // Obtém o objeto do usuário
        console.log("Usuário criado com ID:", user.uid);
        enviandoParaBanco(user.uid, nome, data, nome_crianca, data_crianca);
        setTimeout(() => {
          window.location.href = "../pagina-inicial/pagina-inicial.html";
        }, 4000);
      })
      .catch((error) => {
        // Se ocorrer um erro durante a criação do usuário
        const errorMessage = showError(error);
        alert(errorMessage); // Exibe a mensagem de erro
      });
  });

// Envia os dados para a coleção "users" no Firestore
function enviandoParaBanco(uid, nome, data, nome_crianca, data_crianca) {
  db.collection("users")
    .doc(uid) // Usa o UID do usuário autenticado como documento
    .set({
      nome_adulto: nome,
      data_adulto: data,
      nome_crianca: nome_crianca,
      data_crianca: data_crianca,
    })
    .then(() => {
      console.log("Dados enviados para:", uid);
    })
    .catch((error) => {
      console.error("Dados não enviados:", error);
    });
}

// Validação do formulário
function isFormContinuarValid() {
  const nome = Form.nome();
  if (!nome) {
    Form.botao_continuar().disabled = true;
    return false;
  }

  const email = Form.email();
  if (!email || !validarEmail()) {
    Form.botao_continuar().disabled = true;
    return false;
  }

  const senha = Form.senha();
  if (!senha || senha.length <= 5) {
    Form.botao_continuar().disabled = true;
    return false;
  }

  const data = Form.data();
  if (!data) {
    Form.botao_continuar().disabled = true;
    return false;
  }

  return true;
}

// Funções de validação e exibição de erro
function validarEmail() {
  return /\S+@\S+\.\S+/.test(Form.email());
}
//dando uma mensagem agradavel para o usuario
function showError(error) {
  switch (error.code) {
    case "auth/invalid-email":
      return "O endereço de e-mail está mal formatado.";
    case "auth/user-disabled":
      return "Esta conta foi desativada.";
    case "auth/user-not-found":
      return "Não há registro de usuário correspondente a este e-mail.";
    case "auth/wrong-password":
      return "A senha fornecida está incorreta.";
    case "auth/email-already-in-use":
      return "Este e-mail já está em uso por outra conta.";
    case "auth/operation-not-allowed":
      return "O método de autenticação não está habilitado.";
    case "auth/too-many-requests":
      return "Muitas solicitações foram feitas. Tente novamente mais tarde.";
    case "auth/account-exists-with-different-credential":
      return "A conta já existe com um provedor diferente. Tente fazer login com esse provedor.";
    case "auth/invalid-credential":
      return "As credenciais fornecidas são inválidas.";
    case "auth/network-request-failed":
      return "Falha na conexão com a rede. Verifique sua conexão e tente novamente.";
    default:
      return "Ocorreu um erro desconhecido. Tente novamente.";
  }
}
//impede do usuario passar valores invalidos no formulario
function disableContinuar() {
  Form.botao_continuar().disabled = !isFormContinuarValid();
  console.log(isFormContinuarValid());
}

function onChangeNome() {
  document.getElementById("erro-nome-obrigatorio").style.display = !Form.nome()
    ? "block"
    : "none";
}

function onChangeEmail() {
  document.getElementById("erro-email-obrigatorio").style.display =
    !Form.email() ? "block" : "none";
  document.getElementById("erro-email-invalido").style.display = validarEmail()
    ? "none"
    : "block";
}

function onChangeSenha() {
  document.getElementById("erro-senha-obrigatoria").style.display =
    !Form.senha() ? "block" : "none";
}

function onChangeData() {
  document.getElementById("erro-data-obrigatoria").style.display = !Form.data()
    ? "block"
    : "none";
}

function recuperarSenha() {
  const email = document.getElementById('email_login')
  if(!email){
    document.getElementById('erro-recuperacao').style.display = 'block'
  }else{
        document.getElementById('erro-recuperacao').style.display = 'block'
    firebase.auth().sendPasswordResetEmail(email)
    .then(() => {
        // E-mail de redefinição de senha enviado!
        alert("Um e-mail de redefinição de senha foi enviado para " + email);
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // Trate o erro aqui
        alert("Erro: " + errorMessage);
    });
  }
  // Supondo que você tenha um campo de entrada com o ID "email"
  
}