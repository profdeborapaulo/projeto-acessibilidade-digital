function pegarDadosUrl(){
    const urlParams = new URLSearchParams(window.location.search);
    const uid = urlParams.get("uid")
    return uid 
}
var uid = pegarDadosUrl()
function hrefPerfil(){
    window.location.href = `perfil.html?id=${uid}`
}



