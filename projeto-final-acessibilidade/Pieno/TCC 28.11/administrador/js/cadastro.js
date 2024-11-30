document.querySelector('.toggle-btn').addEventListener('click', function () {
    const navbar = document.querySelector('.navbar');
    const isCollapsed = navbar.classList.contains('collapsed');
    
    if (isCollapsed) {
        navbar.classList.remove('collapsed');
    } else {
        navbar.classList.add('collapsed');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Obter o caminho da URL da página atual
    const path = window.location.pathname.split("/").pop();

    // Selecionar todos os links da navbar
    const navLinks = document.querySelectorAll('.nav-links a');

    // Adicionar a classe 'active' ao link correspondente à página atual
    navLinks.forEach(link => {
        if (link.getAttribute('href') === path) {
            link.classList.add('active');
        }
    });
});
// Configuração do Firebase
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

// Seleção de Formulário e Referência de Coleção do Firestore
const form = document.querySelector("#form-cadastro");

const notification = document.getElementById("notification");
const overlay = document.getElementById("overlay");

function gerarCodigo(length) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let codigo = '';

    for (let i = 0; i < length; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        codigo += caracteres[indiceAleatorio];
    }

    return codigo;
}

// Gerar um código de 15 caracteres
const codigoGerado = gerarCodigo(15);
console.log(codigoGerado);
// Manipular o envio do formulário
form.addEventListener('submit', (event) => {
    event.preventDefault();
    let login = {
        cargo: form.cargo.value,
        rm: form.rm.value,
        senha: form.senha.value,
        email: form.email.value,
        telefone: form.telefone.value,
        cpf:form.cpf.value,
        rg: form.rg.value,
        cep: form.cep.value,
        nomeCrianca: form.nomeCrianca.value,
        idadeCrianca: form.idade.value,
        cod:gerarCodigo(10),
    };
    // Usando add() para criar um documento com ID automático
    const acesso = db.collection(`acesso`).doc(`${login.cargo}_${login.rm}`);
    acesso.set(login).then(() => {
        console.log("Funcionou");
        form.reset();
    }).catch((error) => {
        console.log(login.rm)
        console.log(login.cargo)
        console.log(error);

    });
});
/* Esse código conecta um aplicativo da web aos serviços do Firebase, 
permitindo que os dados do usuário coletados de um formulário sejam armazenados no Firestore. 
Ele demonstra como inicializar o Firebase, lidar com envios de formulários
e interagir com o Firestore para armazenamento de dados. */

