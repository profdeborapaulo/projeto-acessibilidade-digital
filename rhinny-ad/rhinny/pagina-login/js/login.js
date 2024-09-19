// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// https://firebase.google.com/docs/web/setup#available-libraries


const form_login = {
  email: () => document.getElementById('email_login').value,
  senha: () => document.getElementById('senha_cadastro').value,
};

function entrar(){
  
  var email = form_login.email()
  var password = form_login.senha()
  console.log(password)
  console.log(email)
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    window.location.href = "../../pagina-inicial/pagina-inicial.html"
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;

    console.log(errorCode)
    console.log(errorMessage)
  });

}

function recuperarSenha() {
  const email = document.getElementById('email_login').value
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


