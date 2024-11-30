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
const form = document.querySelector("#form-matricula");

const notification = document.getElementById("notification");
const overlay = document.getElementById("overlay");

// Manipular o envio do formulário
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    let matricula = {
        nome: form.nome.value,
        telefone: form.telefone.value,
        email: form.email.value,
        nomeCrianca: form.nomeCrianca.value,
        idade: form.idade.value,
        cpf: form.cpf.value
    };

    const intencoesMatriculaRef = db.collection('intencoesMatricula').doc(form.cpf.value);

    // Verifica se o documento já existe
    const docSnap = await intencoesMatriculaRef.get();

    if (docSnap.exists) {
        // Se o CPF já estiver cadastrado, exibe uma mensagem de erro
        console.log("Erro: CPF já cadastrado.");
        alert("Erro: CPF já cadastrado.");
    } else {
        // Se o CPF não existir, cria um novo documento
        await intencoesMatriculaRef.set(matricula);
        console.log("Funcionou");

        // Exibir o overlay e a notificação
        overlay.style.display = "block";
        notification.classList.add('show');

        // Ocultar a notificação e o overlay após alguns segundos
        setTimeout(() => {
            notification.classList.remove('show');
            notification.classList.add('hide');
            overlay.style.display = "none"; // Esconde o overlay ao mesmo tempo
            setTimeout(() => {
                notification.classList.remove('hide'); // Remove classe hide após animação
            }, 500); // Tempo da animação
        }, 3000); // Tempo que a notificação ficará visível

        // Opcional: Limpar o formulário após o envio
        form.reset();
    }
}).catch((error) => {
    console.log(error);
    alert(error);
});
/* Esse código conecta um aplicativo da web aos serviços do Firebase, 
permitindo que os dados do usuário coletados de um formulário sejam armazenados no Firestore. 
Ele demonstra como inicializar o Firebase, lidar com envios de formulários
e interagir com o Firestore para armazenamento de dados. */