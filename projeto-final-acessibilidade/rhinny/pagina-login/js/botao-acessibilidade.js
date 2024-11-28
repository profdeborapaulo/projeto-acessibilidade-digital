document.addEventListener("DOMContentLoaded", function () {
  const accessibilityBtn = document.getElementById("accessibilityBtn");
  const accessibilityMenu = document.getElementById("accessibilityMenu");
  const iconContainer = accessibilityBtn.querySelector(".icon");

  const toggleMenu = () => {
    const isMenuActive = accessibilityMenu.classList.toggle("active");

    if (isMenuActive) {
      accessibilityBtn.classList.add("menu-open");
      iconContainer.innerHTML =
        "<span class='icon-x' style='font-size: 24px; color: #2A55C2; font-weight: bold;'>×</span>"; // Mostra o ícone de 'X' quando o menu está aberto
    } else {
      accessibilityBtn.classList.remove("menu-open");
      iconContainer.innerHTML =
        "<img src='./img/icon-acessibilidade.svg' alt='Acessibilidade'>"; // Retorna a imagem padrão quando o menu está fechado
    }
  };

  accessibilityBtn.addEventListener("click", (event) => {
    // Impede que o clique no botão feche o menu imediatamente
    event.stopPropagation();
    toggleMenu();
  });

  document.addEventListener("click", function (event) {
    if (
      !accessibilityBtn.contains(event.target) &&
      !accessibilityMenu.contains(event.target)
    ) {
      if (accessibilityMenu.classList.contains("active")) {
        toggleMenu();
      }
    }
  });

  const changeFontSize = () => (document.body.style.fontSize = "larger");
  const changeLineHeight = () => (document.body.style.lineHeight = "1.8");
  const changeLetterSpacing = () => (document.body.style.letterSpacing = "2px");

  const clearAccessibility = () => {
    document.body.style.fontSize = "";
    document.body.style.lineHeight = "";
    document.body.style.letterSpacing = "";
    document.body.style.filter = ""; // Resetando filtros de contraste e saturação
  };

  const clearBtn = document.getElementById("clearAccessibility");
  if (clearBtn) {
    clearBtn.addEventListener("click", clearAccessibility);
  }

  const groupButtons = document.querySelectorAll(".group-btn");

  groupButtons.forEach((button, index) => {
    button.addEventListener("click", function (event) {
      event.preventDefault();

      switch (index) {
        case 0:
          changeFontSize();
          break;
        case 1:
          changeLineHeight();
          break;
        case 2:
          changeLetterSpacing();
          break;
        case 6: // Contraste
          toggleContrast();
          break;
        case 7: // Saturação
          toggleSaturation();
          break;
        default:
          break;
      }
    });
  });

  const toggleContrast = () => {
    const currentFilter = document.body.style.filter;
    if (currentFilter.includes("contrast")) {
      document.body.style.filter = ""; // Resetando o contraste
    } else {
      document.body.style.filter = "contrast(200%)"; // Aplicando o contraste
    }
  };

  const toggleSaturation = () => {
    const currentFilter = document.body.style.filter;
    if (currentFilter.includes("saturate")) {
      document.body.style.filter = ""; // Resetando a saturação
    } else {
      document.body.style.filter = "saturate(2)"; // Aplicando saturação
    }
  };

  // Função para alterar as imagens do grupo de botões com base no tema
  const changeButtonImages = (theme) => {
    const buttons = document.querySelectorAll(".group-btn img");

    buttons.forEach((img) => {
      const buttonText = img
        .closest(".group-btn")
        .querySelector("h4").textContent;

      if (buttonText === "Espaço entre linhas") {
        img.src =
          theme === "escuro"
            ? "./img/icons/espaco-linhas-dark.svg"
            : "./img/icons/espaco-linhas.svg";
      } else if (buttonText === "Espaço entre letras") {
        img.src =
          theme === "escuro"
            ? "./img/icons/espaco-letras-dark.svg"
            : "./img/icons/espaco-letras.svg";
      } else if (buttonText === "Leitor de Sites") {
        img.src =
          theme === "escuro"
            ? "./img/icons/leitor-sites-dark.svg"
            : "./img/icons/leitor-sites.svg";
      } else if (buttonText === "Modo de Leitura") {
        img.src =
          theme === "escuro"
            ? "./img/icons/modo-leitura-dark.svg"
            : "./img/icons/modo-leitura.svg";
      } else if (buttonText === "Máscara de leitura") {
        img.src =
          theme === "escuro"
            ? "./img/icons/mascara-leitura-dark.svg"
            : "./img/icons/mascara-leitura.svg";
      } else if (buttonText === "Lupa") {
        img.src =
          theme === "escuro"
            ? "./img/icons/lupa-dark.svg"
            : "./img/icons/lupa.svg";
      } else if (buttonText === "Contraste") {
        img.src =
          theme === "escuro"
            ? "./img/icons/contraste-dark.svg"
            : "./img/icons/contraste.svg";
      } else if (buttonText === "Saturação") {
        img.src =
          theme === "escuro"
            ? "./img/icons/saturacao-dark.svg"
            : "./img/icons/saturacao.svg";
      } else if (buttonText === "Tamanho da fonte") {
        img.src =
          theme === "escuro"
            ? "./img/icons/A+-dark.svg"
            : "./img/icons/A+.svg";
      }
    });
  };

  // Função que aplica o tema e altera as imagens
  const applyTheme = (theme) => {
    document.body.classList.toggle("modo-escuro", theme === "escuro");
    document.body.classList.toggle("modo-claro", theme === "claro");

    // Atualizar imagens dos botões
    changeButtonImages(theme);

    localStorage.setItem("modoLeitura", theme); // Salva o tema no localStorage
  };

  const carregarModoLeitura = () => {
    const modoSalvo = localStorage.getItem("modoLeitura") || "claro"; // Carregar o tema salvo
    applyTheme(modoSalvo); // Aplica o tema salvo
  };

  const toggleModoLeitura = () => {
    const isDarkMode = document.body.classList.contains("modo-escuro");
    const newTheme = isDarkMode ? "claro" : "escuro"; // Alterna entre claro e escuro
    applyTheme(newTheme);
  };

  const modoLeituraBtn = document.querySelector(".modo-leitura-btn");
  if (modoLeituraBtn) {
    modoLeituraBtn.addEventListener("click", toggleModoLeitura);
  }

  carregarModoLeitura();
});
