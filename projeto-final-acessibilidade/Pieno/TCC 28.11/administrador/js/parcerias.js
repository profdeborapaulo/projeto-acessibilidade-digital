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

// Função para buscar e exibir as parcerias
function carregarParcerias() {
    db.collection("parceria").get()
        .then((querySnapshot) => {
            const parceriaContainer = document.getElementById('parceria');
            parceriaContainer.innerHTML = ''; // Limpa o container antes de adicionar novos itens

            querySnapshot.forEach((doc) => {
                const data = doc.data();

                // Cria uma nova div para cada parceria
                const parceriaDiv = document.createElement('div');
                parceriaDiv.classList.add('parceria');

                // Adiciona os dados à div
                parceriaDiv.innerHTML = `
                    <h3>${data.nome}</h3>
                    <p><strong>Telefone:</strong> ${data.telefone}</p>
                    <p><strong>Email:</strong> ${data.email}</p>
                    <p><strong>Proposta:</strong></p>
                    <button class="verMais">Ver Mais</button>
                    
                    <div class="propostaCompleta" style="display:none;">
                        <h4>Proposta Completa:</h4>
                        <p>${data.proposta}</p>
                    </div>
                `;

                // Adiciona a div da parceria ao container
                parceriaContainer.appendChild(parceriaDiv);

                // Adiciona funcionalidade ao botão "Ver Mais"
                const verMaisButton = parceriaDiv.querySelector('.verMais');
                verMaisButton.addEventListener('click', function() {
                    const propostaCompletaDiv = parceriaDiv.querySelector('.propostaCompleta');
                    propostaCompletaDiv.style.display = propostaCompletaDiv.style.display === 'none' ? 'block' : 'none';
                });

                console.log(doc.id, " => ", data);
            });
        })
        .catch((error) => {
            console.error("Erro ao buscar parcerias: ", error);
        });
}

// Chama a função para carregar as parcerias ao iniciar
carregarParcerias();

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