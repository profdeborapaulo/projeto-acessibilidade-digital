const buttons = document.querySelectorAll('.botaoVerMais');

buttons.forEach((button, index) => {
  
  button.addEventListener('click', function() {
    // Encontra o contêiner de imagens adicionais relacionado ao botão clicado
    const parentDiv = button.parentElement; 
    const imagensAdicionais = parentDiv.querySelector('#imagensAdicionais');
    
    // Exibe as imagens adicionais
    imagensAdicionais.style.display = 'block'; 
    
    // Oculta o botão "Ver mais" após carregar as imagens adicionais
    this.style.display = 'none';
  });
});