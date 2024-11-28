const applyTheme = (theme) => {
  document.body.classList.toggle("modo-escuro", theme === "escuro");
  document.body.classList.toggle("modo-claro", theme === "claro");
  localStorage.setItem("modoLeitura", theme);

  const modoLeituraBtn = document.querySelector(".modo-leitura-btn");
  if (modoLeituraBtn) {
    if (theme === "escuro") {
      modoLeituraBtn.classList.remove("bx-sun");
      modoLeituraBtn.classList.add("bx-moon");
      modoLeituraBtn.style.color = "#ffffff";
    } else {
      modoLeituraBtn.classList.remove("bx-moon");
      modoLeituraBtn.classList.add("bx-sun");
      modoLeituraBtn.style.color = "";
    }
  }
};

const carregarModoLeitura = () => {
  const modoSalvo = localStorage.getItem("modoLeitura") || "claro";
  applyTheme(modoSalvo);
};

const toggleModoLeitura = () => {
  const isDarkMode = document.body.classList.contains("modo-escuro");
  const newTheme = isDarkMode ? "claro" : "escuro";
  applyTheme(newTheme);
};

document.addEventListener("DOMContentLoaded", () => {
  const modoLeituraBtn = document.querySelector(".modo-leitura-btn");
  if (modoLeituraBtn) {
    modoLeituraBtn.addEventListener("click", toggleModoLeitura);
  }

  carregarModoLeitura();
});
