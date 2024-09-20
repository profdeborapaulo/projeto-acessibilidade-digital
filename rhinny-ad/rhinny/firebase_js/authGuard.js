//identifica o usuario a partir do estado de autenticação 
firebase.auth().onAuthStateChanged((user) => {
    if(!user){
        window.location.href = "..//pagina-login/login.html";
    }
})

function logout(){
    firebase.auth().signOut().then(() =>{
        window.location.href = "../../pagina-login/login.html"
    }).catch(() =>{
        alert("Erro ao fazer logout")
    })
}

