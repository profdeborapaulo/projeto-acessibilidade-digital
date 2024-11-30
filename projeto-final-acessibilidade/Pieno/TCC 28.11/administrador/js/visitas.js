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
const db = firebase.firestore();


db.collection("visita").get().then((querySnapshot) => {
    const visitaContainer = document.getElementById('visita');
    querySnapshot.forEach((doc) => {
        const data = doc.data();

        // Create a new div for each intention
        const visitaDiv = document.createElement('div');
        visitaDiv.classList.add('visita');

        // Add the data to the div
        visitaDiv.innerHTML = `
            <h3>${data.nome}</h3>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Telefone:</strong> ${data.telefone}</p>
            <p><strong>Data:</strong> ${data.data}</p>
            <p><strong>Horário:</strong> ${data.hora}</p> `
        ;

        // Append the intention div to the container
        visitaContainer.appendChild(visitaDiv);

        console.log(doc.id, " => ", data);
    });
});

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