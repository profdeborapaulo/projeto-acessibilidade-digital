document.querySelectorAll('.input-outro').forEach(input => {
    input.addEventListener('focus', function() {
        this.setAttribute('placeholder', '');
    });

    input.addEventListener('blur', function() {
        if (this.value === '') {
            this.setAttribute('placeholder', 'Outro...');
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.buttons');
    
    buttons.forEach(button => {
      button.addEventListener('click', function() {
        // Verifica se o botão clicado não é o "outros"
        if (!this.classList.contains('buttons-outros')) {
          // Alterna a classe 'clicked' no botão clicado
          this.classList.toggle('clicked');
        }
      });
    });
  });
  

