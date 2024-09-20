function onChangeEmail() {
    const email = registerForm.email().value;
    registerForm.emailRequiredError().style.display = email ? "none" : "block";
    registerForm.emailInvalidError().style.display = validateEmail(email) ? "none" : "block";
    toggleRegisterButtonDisable();
}

function onChangePassword() {
    const password = registerForm.password().value;
    registerForm.passwordRequiredError().style.display = password ? "none" : "block";
    registerForm.passwordMinLengthError().style.display = password.length >= 6 ? "none" : "block";
    validatePasswordsMatch();
    toggleRegisterButtonDisable();
}

function onChangeConfirmPassword() {
    validatePasswordsMatch();
    toggleRegisterButtonDisable();
}

function register() {
    showLoading();

    const email = registerForm.email().value;
    const password = registerForm.password().value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(() => {
            hideLoading();
            window.location.href = "selecionarUsuario.html";
        })
        .catch(error => {
            hideLoading();
            alert(getErrorMessage(error));
        });
}

function getErrorMessage(error) {
    if (error.code === "auth/email-already-in-use") {
        return "O email inserido já está em uso.";
    }
    return error.message;
}

function validatePasswordsMatch() {
    const password = registerForm.password().value;
    const confirmPassword = registerForm.confirmPassword().value;
    registerForm.confirmPasswordDoesntMatchError().style.display = password === confirmPassword ? "none" : "block";
}

function toggleRegisterButtonDisable() {
    registerForm.registerButton().disabled = !isFormValid();
}

function isFormValid() {
    const email = registerForm.email().value;
    if (!email || !validateEmail(email)) {
        return false;
    }

    const password = registerForm.password().value;
    if (!password || password.length < 6) {
        return false;
    }

    const confirmPassword = registerForm.confirmPassword().value;
    if (password !== confirmPassword) {
        return false;
    }

    return true;
}

const registerForm = {
    confirmPassword: () => document.getElementById('confirmPassword'),
    confirmPasswordDoesntMatchError: () => document.getElementById('password_cad-doesnt-match-error'),
    email: () => document.getElementById('email_cad'),
    emailInvalidError: () => document.getElementById('email_cad-invalid-error'),
    emailRequiredError: () => document.getElementById('email_cad-required-error'),
    password: () => document.getElementById('password_cad'),
    passwordMinLengthError: () => document.getElementById('password_cad-min-length-error'),
    passwordRequiredError: () => document.getElementById('password_cad-required-error'),
    registerButton: () => document.getElementById('cad_button')
};

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
 