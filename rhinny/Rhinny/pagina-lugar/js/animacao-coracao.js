// Seleciona o ícone de coração e a imagem do ícone
const heartIcon = document.querySelector('.heart-icon');
const heartImg = heartIcon.querySelector('img');

// Adiciona um evento de clique ao ícone de coração
heartIcon.addEventListener('click', () => {
  // Verifica se o ícone já está preenchido
  if (heartIcon.classList.contains('filled')) {
    // Se já estiver preenchido, remove a classe 'filled'
    heartIcon.classList.remove('filled');
    heartImg.src = './img/Heart.svg'; // Muda a imagem para o coração não preenchido
  } else {
    // Se não estiver preenchido, adiciona a classe 'filled'
    heartIcon.classList.add('filled');
    heartImg.src = './img/Heart-filled.svg'; // Muda a imagem para o coração preenchido
  }
});