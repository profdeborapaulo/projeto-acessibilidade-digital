// document.querySelector('.toggle-btn').addEventListener('click', function () {
//     const navbar = document.querySelector('.navbar');
//     const isCollapsed = navbar.classList.contains('collapsed');
    
//     if (isCollapsed) {
//         navbar.classList.remove('collapsed');
//     } else {
//         navbar.classList.add('collapsed');
//     }
// });

// document.addEventListener('DOMContentLoaded', () => {
//     // Obter o caminho da URL da página atual
//     const path = window.location.pathname.split("/").pop();

//     // Selecionar todos os links da navbar
//     const navLinks = document.querySelectorAll('.nav-links a');

//     // Adicionar a classe 'active' ao link correspondente à página atual
//     navLinks.forEach(link => {
//         if (link.getAttribute('href') === path) {
//             link.classList.add('active');
//         }
//     });
// });




// document.addEventListener('DOMContentLoaded', () => {
//     const detalhesReserva = document.getElementById('detalhes-reserva');
//     const mensagemVazia = document.getElementById('mensagem-vazia');
//     let reservas = JSON.parse(localStorage.getItem('reservas')) || [];

//     function renderReservas() {
//         if (reservas.length === 0) {
//             detalhesReserva.innerHTML = '';
//             mensagemVazia.style.display = 'block';
//         } else {
//             mensagemVazia.style.display = 'none';
//             detalhesReserva.innerHTML = reservas.map((reserva, index) => `
//                 <div class="reserva-info">
//                     <p><strong>Sala:</strong> ${reserva.sala}</p>
//                     <p><strong>Data:</strong> ${reserva.data}</p>
//                     <p><strong>Hora de Início:</strong> ${reserva.horaInicio}</p>
//                     <p><strong>Hora de Fim:</strong> ${reserva.horaFim}</p>
//                     <span class="icon-delete" onclick="excluirReserva(${index})">✖</span>
//                 </div>
//             `).join('');
//         }
//     }

//     window.excluirReserva = function(index) {
//         reservas.splice(index, 1);
//         localStorage.setItem('reservas', JSON.stringify(reservas));
//         renderReservas();
//     }

//     renderReservas();
// });

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
// Inicializando o Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

document.addEventListener('DOMContentLoaded', () => {
    // Carregar reservas ao iniciar a página
    carregarReservas();

    // Alternar a visibilidade da barra de navegação
    document.querySelector('.toggle-btn').addEventListener('click', function () {
        const navbar = document.querySelector('.navbar');
        navbar.classList.toggle('collapsed');
    });

    // Destacar o link ativo na barra de navegação
    const path = window.location.pathname.split("/").pop();
    const navLinks = document.querySelectorAll('.nav-links a');
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === path) {
            link.classList.add('active');
        }
    });

    // Adicionar listener ao botão de confirmar reserva
    const confirmarReservaButton = document.getElementById('confirmarReserva');
    
    if (confirmarReservaButton) {
        confirmarReservaButton.addEventListener('click', async (event) => {
            event.preventDefault();

            const sala = document.getElementById("sala").value; 
            const data = document.getElementById("data").value;
            const horaInicio = document.getElementById("horaInicio").value;
            const horaFim = document.getElementById("horaFim").value;

            let reserva = {
                sala: sala,
                data: data,
                horaInicio: horaInicio,
                horaFim: horaFim
            };

            try {
                // Verifica se há conflito de horários (implementar a função se necessário)
                
                // Se não houver conflito, cria um novo documento
                await db.collection('reservaSala').add(reserva);
                console.log("Reserva realizada com sucesso!");

                // Recarrega as reservas após uma nova adição
                carregarReservas();

                // Limpar o formulário após o envio
                document.getElementById("reserva-form").reset();

            } catch (error) {
                console.error("Erro ao realizar a reserva:", error);
                alert("Ocorreu um erro ao tentar realizar a reserva.");
            }
        });
    } else {
        console.error("Botão 'confirmarReserva' não encontrado.");
    }
});

// Função para carregar reservas existentes
async function carregarReservas() {
    const reservaContainer = document.getElementById('reserva'); // Verifica se este ID existe no seu HTML
    if (!reservaContainer) {
        console.error("Elemento com ID 'reserva' não encontrado.");
        return; // Sai da função se o contêiner não existir
    }

    reservaContainer.innerHTML = ''; // Limpa o contêiner antes de adicionar novas reservas

    try {
        const querySnapshot = await db.collection("reservaSala").get();
        querySnapshot.forEach((doc) => {
            const data = doc.data();

            // Cria um novo div para cada reserva
            const reservaDiv = document.createElement('div');
            reservaDiv.classList.add('reserva');

            // Adiciona os dados ao div
            reservaDiv.innerHTML = `
                <p><strong>Sala:</strong> ${data.sala}</p>
                <p><strong>Data:</strong> ${data.data}</p>
                <p><strong>Hora início:</strong> ${data.horaInicio}</p>
                <p><strong>Hora fim:</strong> ${data.horaFim}</p>
            `;

            // Anexa o div da reserva ao contêiner
            reservaContainer.appendChild(reservaDiv);

            console.log(doc.id, " => ", data);
        });
    } catch (error) {
        console.error("Erro ao carregar reservas:", error);
    }
}