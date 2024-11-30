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

// Seleção dos elementos do DOM
const reservaForm = document.getElementById("reserva-form");
const mensagemReserva = document.getElementById("mensagem-reserva");
const confirmarReservaButton = document.getElementById("confirmarReserva");
const notificacao = document.getElementById("notificacao");

// Função para mostrar o formulário de reserva
function mostrarFormulario(sala) {
    reservaForm.style.display = "block"; // Exibe o formulário
    reservaForm.setAttribute("data-sala", sala); // Armazena qual sala está sendo reservada
}

// Função para fechar a mensagem de confirmação
function fecharMensagem() {
    mensagemReserva.style.display = "none"; // Oculta a mensagem
}

// Função para verificar conflitos de horários
async function verificarConflitoDeHorarios(sala, data, horaInicio, horaFim) {
    const reservasRef = db.collection('reservaSala');
    const querySnapshot = await reservasRef.where("sala", "==", sala)
        .where("data", "==", data).get();

    // Verifica se o horário desejado conflita com reservas existentes
    for (const doc of querySnapshot.docs) {
        const reserva = doc.data();
        const existingHoraInicio = reserva.horaInicio;
        const existingHoraFim = reserva.horaFim;

        // Verifica se há sobreposição de horários
        if (
            (horaInicio >= existingHoraInicio && horaInicio < existingHoraFim) ||
            (horaFim > existingHoraInicio && horaFim <= existingHoraFim) ||
            (horaInicio <= existingHoraInicio && horaFim >= existingHoraFim)
        ) {
            return true; // Conflito encontrado
        }
    }
    return false; // Sem conflitos
}

// Manipular o envio do formulário de reserva
confirmarReservaButton.addEventListener('click', async (event) => {
    event.preventDefault();

    const sala = reservaForm.getAttribute("data-sala");
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
        // Verifica se há conflito de horários
        const conflito = await verificarConflitoDeHorarios(sala, data, horaInicio, horaFim);
        
        if (conflito) {
            console.log("Erro: Horário já reservado.");
            notificacao.style.display = "block"; // Exibe a notificação
            return; // Não prossegue se houver conflito
        } else {
            notificacao.style.display = "none"; // Oculta a notificação se não houver conflito
        }

        // Se não houver conflito, cria um novo documento
        await db.collection('reservaSala').doc(`${sala}-${data}-${horaInicio}`).set(reserva);
        console.log("Reserva realizada com sucesso!");

        // Exibir a mensagem de confirmação
        mensagemReserva.style.display = "block";
        
        // Opcional: Limpar o formulário após o envio
        reservaForm.reset();
        reservaForm.style.display = "none"; // Oculta o formulário após a reserva

    } catch (error) {
        console.error("Erro ao realizar a reserva:", error);
        alert("Ocorreu um erro ao tentar realizar a reserva.");
    }
});