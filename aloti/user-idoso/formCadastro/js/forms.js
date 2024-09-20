// Carregando o Firebase
import "https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js";
import "https://www.gstatic.com/firebasejs/8.10.0/firebase-database.js";
import "../../firebase-init.js";

// Firebase Database da v8
const db = firebase.database();

document.getElementById("submit").addEventListener('click', function (e) {
    e.preventDefault(); // Evita o envio automático do formulário

    // Adicionando dados ao Firebase
    db.ref('user-idoso/' + document.getElementById("name").value).set({
        name: document.getElementById("name").value,
        gender: document.getElementById("gender").value,
        dateOfBirth: document.getElementById("dateOfBirth").value,
        cpf: document.getElementById("cpf").value,
        rg: document.getElementById("rg").value,
        celular: document.getElementById("celular").value,
        email: document.getElementById("email").value,
        emergencyName: document.getElementById("emergencyName").value,
        relationship: document.getElementById("relationship").value,
        emergencyPhone: document.getElementById("emergencyPhone").value
    })
    .then(() => {
        // Exibe um alerta de sucesso
        alert("Dados enviados com sucesso!");
        
        // Redireciona para a próxima página (CadastroForm2.html)
        window.location.href = "CadastroForm2.html";
    })
    .catch((error) => {
        // Caso ocorra algum erro ao enviar os dados
        console.error("Erro ao enviar os dados:", error);
        alert("Houve um erro ao enviar os dados. Por favor, tente novamente.");
    });
});
