document.addEventListener("DOMContentLoaded", function () {
  var accordions = document.querySelectorAll(".accordion-header");
  var categoryLinks = document.querySelectorAll(".category-link");
  var accordionContainers = document.querySelectorAll(".accordion");

  // Exibir a categoria "Geral" por padrão
  document.getElementById("geral").style.display = "block";

  // Alternar a exibição de categorias ao clicar nos links da barra lateral
  categoryLinks.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      var category = this.getAttribute("data-category");

      // Ativar o link da categoria selecionada e desativar os outros
      categoryLinks.forEach(function (link) {
        link.classList.remove("active");
      });
      this.classList.add("active");

      // Exibir a categoria correspondente e ocultar as outras
      accordionContainers.forEach(function (container) {
        if (container.getAttribute("id") === category) {
          container.style.display = "block";
        } else {
          container.style.display = "none";
        }
      });
    });
  });

  // Funcionalidade do accordion
  accordions.forEach(function (header) {
    header.addEventListener("click", function () {
      var body = this.nextElementSibling;
      var isActive = this.classList.contains("active");

      // Se já está ativo, recolher o accordion
      if (isActive) {
        this.classList.remove("active");
        body.style.maxHeight = null;
        body.style.opacity = 0;
      } else {
        // Fechar todos os outros accordions
        accordions.forEach(function (header) {
          header.classList.remove("active");
          var body = header.nextElementSibling;
          body.style.maxHeight = null;
          body.style.opacity = 0;
        });

        // Abrir o accordion clicado
        this.classList.add("active");
        body.style.maxHeight = body.scrollHeight + "px"; // Ajusta a altura para o conteúdo
        body.style.opacity = 1;
      }
    });
  });
});
