document.getElementById('accessibility-btn').addEventListener('click', function() {
    const menu = document.getElementById('accessibility-menu');
    menu.classList.toggle('hidden');
});

const increaseTextBtn = document.getElementById('increase-text');
const decreaseTextBtn = document.getElementById('decrease-text');
const grayscaleBtn = document.getElementById('grayscale');
const highContrastBtn = document.getElementById('high-contrast');
const resetBtn = document.getElementById('reset');

// Aumentar texto
increaseTextBtn.addEventListener('click', function() {
    document.body.style.fontSize = 'larger';
});

// Diminuir texto
decreaseTextBtn.addEventListener('click', function() {
    document.body.style.fontSize = 'smaller';
});

// Escala de cinza
grayscaleBtn.addEventListener('click', function() {
    document.body.classList.toggle('grayscale');
});

// Alto contraste (modo escuro)
highContrastBtn.addEventListener('click', function() {
    document.body.classList.toggle('high-contrast');
});

// Resetar configurações
resetBtn.addEventListener('click', function() {
    document.body.style.fontSize = '';
    document.body.classList.remove('grayscale', 'high-contrast');
});
