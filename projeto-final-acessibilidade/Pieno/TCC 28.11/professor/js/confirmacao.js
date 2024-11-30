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