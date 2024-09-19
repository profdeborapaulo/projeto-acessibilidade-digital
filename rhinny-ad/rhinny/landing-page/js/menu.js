function toggleMenu() {
  const menu = document.querySelector('.menu-collapse');
  const overlay = document.querySelector('.menu-overlay');

  if (menu.classList.contains('menu-open')) {
    menu.classList.remove('menu-open');
    overlay.style.display = 'none'; // Esconde o fundo semitransparente
  } else {
    menu.classList.add('menu-open');
    overlay.style.display = 'block'; // Mostra o fundo semitransparente
  }
}

// Função para fechar o menu ao rolar a página
function closeMenuOnScroll() {
  const menu = document.querySelector('.menu-collapse');
  const overlay = document.querySelector('.menu-overlay');

  if (menu.classList.contains('menu-open')) {
    menu.classList.remove('menu-open');
    overlay.style.display = 'none'; // Esconde o fundo semitransparente
  }
}

// Adiciona o listener de scroll
window.addEventListener('scroll', closeMenuOnScroll);
