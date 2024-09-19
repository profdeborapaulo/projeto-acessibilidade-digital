// Menu flutuante ajustável em relação ao rodapé
window.addEventListener("scroll", function () {
  const footer = document.querySelector("footer");
  const menu = document.querySelector(".menu-flutuante");

  if (!footer || !menu) return; // Verifica se o footer e o menu existem

  const scrollPosition = window.scrollY;
  const footerOffsetTop = footer.offsetTop;
  const menuHeight = menu.offsetHeight;

  const maxScrollTop = footerOffsetTop - menuHeight - 20;

  if (scrollPosition >= maxScrollTop) {
    menu.style.position = "absolute";
    menu.style.top = `${maxScrollTop}px`;
  } else {
    menu.style.position = "fixed";
    menu.style.top = "7em";
  }
});

// Função para alternar a exibição dos filtros
function toggleSection(id) {
  const opcoes = document.getElementById(id);
  const icon = opcoes.previousElementSibling.querySelector("img");

  if (opcoes.style.display === "none" || !opcoes.style.display) {
    opcoes.style.display = "block";
    icon.src = "./img/seta-menu.svg"; // Ajuste para ícone de "fechar"
  } else {
    opcoes.style.display = "none";
    icon.src = "./img/seta-menu.svg"; // Ajuste para ícone de "abrir"
  }

  // Atualiza a altura do menu ao alternar os filtros
  updateMenuHeight();
}

// Atualiza a altura do menu flutuante
function updateMenuHeight() {
  const menu = document.querySelector('.menu-flutuante');
  const filtroOpcoes = document.querySelectorAll('.filtro-opcoes');
  let maxHeight = 0;

  filtroOpcoes.forEach(opcao => {
    if (opcao.style.display === 'block') {
      maxHeight += opcao.scrollHeight;
    }
  });

  menu.style.maxHeight = `${maxHeight + 35}em`; // Adiciona padding extra
}

document.addEventListener("DOMContentLoaded", function () {
  // Botão de pesquisa e campo de busca
  const searchButton = document.getElementById("search-menu");
  const searchInput = document.getElementById("pesquisa-menu");
  const palavrasChavesContainer = document.getElementById("palavras-chaves-container");

  // Palavras-chave mock (pode ser substituído por uma API ou lógica real)
  let palavrasChaveAtuais = ["Praça", "Barueri", "Parque"];

  // Exibe as palavras-chave no container
  function renderizarPalavrasChaves() {
    palavrasChavesContainer.innerHTML = ""; // Limpa o container
    palavrasChaveAtuais.forEach((palavra) => {
      const div = document.createElement("div");
      div.classList.add("palavra-chave");
      div.innerHTML = `${palavra} <button class="remove-btn"><img src="./img/close.svg" alt=""></button>`;
      palavrasChavesContainer.appendChild(div);

      // Adiciona evento de remoção
      div.querySelector(".remove-btn").addEventListener("click", function () {
        removerPalavraChave(palavra);
      });
    });
  }

  // Função para adicionar uma nova palavra-chave
  function adicionarPalavraChave() {
    const novaPalavra = searchInput.value.trim();
    if (novaPalavra && !palavrasChaveAtuais.includes(novaPalavra)) {
      palavrasChaveAtuais.push(novaPalavra);
      renderizarPalavrasChaves();
    }
    searchInput.value = ""; // Limpa o campo de busca
  }

  // Função para remover uma palavra-chave
  function removerPalavraChave(palavra) {
    palavrasChaveAtuais = palavrasChaveAtuais.filter((p) => p !== palavra);
    renderizarPalavrasChaves();
  }

  // Lógica de pesquisa ao clicar no botão de busca
  searchButton.addEventListener("click", adicionarPalavraChave);

  // Renderiza as palavras-chave inicialmente
  renderizarPalavrasChaves();
});
