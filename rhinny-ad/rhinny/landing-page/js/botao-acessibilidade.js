const accessibilityBtn = document.getElementById('accessibility-btn');
const accessibilityMenu = document.getElementById('accessibility-menu');
const body = document.body;
let isLargeFont = false; // Variável para controlar o estado da fonte

// Toggle do menu dropdown
accessibilityBtn.addEventListener('click', () => {
  accessibilityMenu.classList.toggle('show');
});

// Contraste de cores
document.getElementById('contrast-btn').addEventListener('click', () => {
  body.classList.toggle('high-contrast');
});

// Alterar tamanho da fonte (aumentar e diminuir)
document.getElementById('toggle-font-size').addEventListener('click', () => {
  if (isLargeFont) {
    body.classList.remove('font-size-large');
    body.classList.add('font-size-small');
    isLargeFont = false;
  } else {
    body.classList.remove('font-size-small');
    body.classList.add('font-size-large');
    isLargeFont = true;
  }
});

// Resetar configurações
document.getElementById('reset-settings').addEventListener('click', () => {
  body.classList.remove('high-contrast', 'font-size-large', 'font-size-small');
  isLargeFont = false; // Resetar o estado do tamanho da fonte
});

