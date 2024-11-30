// function toggleNavbar() {
//     var navbar = document.getElementById("navbar");

//     if (navbar.classList.contains("full-screen")) {
//         navbar.classList.remove("full-screen");
//         navbar.classList.add("collapsed");
//     } else {
//         navbar.classList.remove("collapsed");
//         navbar.classList.add("full-screen");
//     }
// }

// function collapseNavbar() {
//     var navbar = document.getElementById("navbar");
//     if (navbar.classList.contains("full-screen")) {
//         navbar.classList.remove("full-screen");
//         navbar.classList.add("collapsed");
//     }
// }
function pegarUrl() {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("uid");
}

const uid = pegarUrl();

// Função para redirecionar
function redirecionar(event) {
  event.preventDefault(); // Previne o comportamento padrão do link
  const page = event.target.getAttribute('data-page'); // Obtém o valor do atributo data-page
  if (page) {
      window.location.href = `../html/${page}.html?uid=${uid}`; // Redireciona para a página correspondente
  }
}

// Adiciona o manipulador de eventos a todos os links com data-page
const links = document.querySelectorAll('a[data-page]');
links.forEach(link => {
  link.addEventListener('click', redirecionar);
});