function pegarUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get("uid");
}

const uid = pegarUrl();

// Função para redirecionar
function redirecionar(event) {
    event.preventDefault(); // Previne o comportamento padrão do link
    const page = event.target.getAttribute("data-page"); // Obtém o valor do atributo data-page
    if (page) {
        window.location.href = `../html/${page}.html?uid=${uid}`; // Redireciona para a página correspondente
    }
}

// Adiciona o manipulador de eventos a todos os links
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".navbar a[data-page]");
    links.forEach((link) => {
        link.addEventListener("click", redirecionar);
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.botoes a[data-page]');
  const uid = pegarUrl(); // Supondo que você tenha uma função pegarUrl() definida

  links.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault(); // Previne o comportamento padrão do link
          const page = this.getAttribute('data-page'); // Obtém o valor do atributo data-page
          if (page) {
              window.location.href = `../html/${page}.html?uid=${uid}`; // Redireciona para a página correspondente
          }
      });
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.footer-list a[data-page]');
  const uid = pegarUrl(); // Supondo que você tenha uma função pegarUrl() definida

  links.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault(); // Previne o comportamento padrão do link
          const page = this.getAttribute('data-page'); // Obtém o valor do atributo data-page
          if (page) {
              window.location.href = `../html/${page}.html?uid=${uid}`; // Redireciona para a página correspondente
          }
      });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll('.call-to-action a[data-page]');
  const uid = pegarUrl(); // Supondo que você tenha uma função pegarUrl() definida

  links.forEach(link => {
      link.addEventListener('click', function(event) {
          event.preventDefault(); // Previne o comportamento padrão do link
          const page = this.getAttribute('data-page'); // Obtém o valor do atributo data-page
          if (page) {
              window.location.href = `../html/${page}.html?uid=${uid}`; // Redireciona para a página correspondente
          }
      });
  });
});

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.header a[data-page]');
    const uid = pegarUrl(); // Supondo que você tenha uma função pegarUrl() definida
  
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Previne o comportamento padrão do link
            const page = this.getAttribute('data-page'); // Obtém o valor do atributo data-page
            if (page) {
                window.location.href = `../html/${page}.html?uid=${uid}`; // Redireciona para a página correspondente
            }
        });
    });
  });
  document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll('.acima a[data-page]');
    const uid = pegarUrl(); // Supondo que você tenha uma função pegarUrl() definida
  
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Previne o comportamento padrão do link
            const page = this.getAttribute('data-page'); // Obtém o valor do atributo data-page
            if (page) {
                window.location.href = `../html/${page}.html?uid=${uid}`; // Redireciona para a página correspondente
            }
        });
    });
  });