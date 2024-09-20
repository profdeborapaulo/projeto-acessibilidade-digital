// Troca de usuário pelos botões
const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


// Validação de login
function onChangeEmailLogin() {
    toggleButtonsDisableLogin();
    toggleEmailErrorsLogin();
}

function onChangePasswordLogin() {
    toggleButtonsDisableLogin();
    togglePasswordErrorsLogin();
}

// Verificar se o email não é vazio e se é válido
function isEmailLoginValid() {
    const email = form.emailLogin().value;
    return email && validateEmail(email);
}

function isPasswordLoginValid() {
    const password = form.passwordLogin().value;
    return password ? true : false;
}

// Mensagens de erro de email no login
function toggleEmailErrorsLogin() {
    const email = form.emailLogin().value;
    form.emailRequiredErrorLogin().style.display = email ? "none" : "block";
    form.emailInvalidErrorLogin().style.display = validateEmail(email) ? "none" : "block";
}

// Mensagens de erro de senha no login
function togglePasswordErrorsLogin() {
    const password = form.passwordLogin().value;
    form.passwordRequiredErrorLogin().style.display = password ? "none" : "block";
}

// Função para habilitar/desabilitar os botões de login e recuperação de senha
function toggleButtonsDisableLogin() {
    const emailValid = isEmailLoginValid();
    const passwordValid = isPasswordLoginValid();

    form.recoverPasswordButton().disabled = !emailValid;
    form.loginButton().disabled = !emailValid || !passwordValid;
}

const form = {
    emailLogin: () => document.getElementById("email_login"),
    emailRequiredErrorLogin: () => document.getElementById("email_login-required-error"),
    emailInvalidErrorLogin: () => document.getElementById("email_login-invalid-error"),
    passwordLogin: () => document.getElementById("password_login"),
    passwordRequiredErrorLogin: () => document.getElementById("password_login-required-error"),
    loginButton: () => document.getElementById("login-button"),
    recoverPasswordButton: () => document.getElementById("recover-password-button")
};

// Função para validar o email
function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Função de recuperação de senha
function recoverPassword() {
    const email = form.emailLogin().value;

    if (!isEmailLoginValid()) {
        alert('Por favor, insira um email válido.');
        return;
    }

    showLoading(); // Mostrar o loader

    firebase.auth().sendPasswordResetEmail(email)
        .then(() => {
            hideLoading(); // Esconder o loader
            alert('Email de recuperação de senha enviado com sucesso.');
        })
        .catch(error => {
            hideLoading(); // Esconder o loader
            alert(getErrorMessage(error));
        });
}

// Função de login
function login() {
    const email = form.emailLogin().value;
    const password = form.passwordLogin().value;

    if (!isEmailLoginValid() || !isPasswordLoginValid()) {
        alert('Por favor, preencha os campos corretamente.');
        return;
    }

    showLoading(); // Mostrar o loader

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(() => {
            hideLoading(); // Esconder o loader
            window.location.href = "../homepage/homepage.html";
        })
        .catch(error => {
            hideLoading(); // Esconder o loader
            alert(getErrorMessage(error));
        });
}

// Função para obter a mensagem de erro apropriada
function getErrorMessage(error) {
    switch (error.code) {
        case "auth/user-not-found":
            return "Usuário não encontrado";
        case "auth/wrong-password":
            return "Senha incorreta";
        case "auth/invalid-email":
            return "Email inválido";
        default:
            return error.message;
    }
}
