// Abrir e fechar o modal
const modal = document.getElementById("modal-config-perfil");
const closeModal = document.querySelector(".close-btn");
const body = document.body;

// Para abrir o modal (por exemplo, ao clicar no botão de "Editar perfil")
document.getElementById("editar-perfil").addEventListener("click", function (e) {
  e.preventDefault();
  modal.style.display = "block";
  body.classList.add("modal-open");
});

// Fechar o modal
closeModal.addEventListener("click", function () {
  modal.style.display = "none";
  body.classList.remove("modal-open");
});

// Fechar o modal ao clicar fora dele
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
    body.classList.remove("modal-open");
  }
};
