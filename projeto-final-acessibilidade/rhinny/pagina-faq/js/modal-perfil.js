document.addEventListener("DOMContentLoaded", function () {
  // Seleciona os elementos
  const modal = document.getElementById("user-modal");
  const userIcon = document.getElementById("user-icon");

  // Abre o modal quando o ícone do usuário é clicado
  userIcon.addEventListener("click", function () {
    modal.style.display = "block";
    document.body.style.overflow = "auto";  // Permite scroll na página mesmo com o modal aberto
  });

  // Fecha o modal se o usuário clicar fora do conteúdo do modal
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });

  // Fecha o modal ao pressionar a tecla "Esc"
  window.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      modal.style.display = "none";
    }
  });

  // Fecha o modal ao fazer scroll na página
  window.addEventListener("scroll", function () {
    modal.style.display = "none";
  });
});
