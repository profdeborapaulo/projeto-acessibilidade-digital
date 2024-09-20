firebase.auth().onAuthStateChanged(user => {
    if (!user) {
        window.location.href = "login-register/login-registro.html";
    }
})