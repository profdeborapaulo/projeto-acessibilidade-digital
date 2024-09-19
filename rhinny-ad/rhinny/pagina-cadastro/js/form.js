

document.addEventListener("DOMContentLoaded", function () {
  const btnContinuar = document.getElementById("btn-continuar");
  const btnVoltar = document.getElementById("btn-voltar");
  const formDadosResponsavel = document.getElementById(
    "form-dados-responsavel"
  );
  const formDadosCrianca = document.getElementById("form-dados-crianca");
  const progresso = document.querySelectorAll("#progresso li");

  btnContinuar.addEventListener("click", function () {
    // Ocultar o formulário de Dados do Responsável
    formDadosResponsavel.style.display = "none";

    // Exibir o formulário de Dados da Criança
    formDadosCrianca.style.display = "flex";

    // Atualizar o progresso
    progresso[0].classList.remove("active");
    progresso[1].classList.add("active");
  });

  btnVoltar.addEventListener("click", function () {
    // Ocultar o formulário de Dados da Criança
    formDadosCrianca.style.display = "none";

    // Exibir o formulário de Dados do Responsável
    formDadosResponsavel.style.display = "flex";

    // Atualizar o progresso
    progresso[1].classList.remove("active");
    progresso[0].classList.add("active");
  });
});
