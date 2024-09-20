firebase.auth().onAuthStateChanged(user => {
    if (!user) {
        // Se não estiver logado, redirecione para a página de login
        window.location.href = "../login-register/login-registro.html";
    }
});

function logout() {
    firebase.auth().signOut().then(() => {
        window.location.href = "../login-register/login-registro.html";
    }).catch(() => {
        alert('Erro ao fazer logout');
    })
}