function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
  }
  function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
  }
 
  

  document.getElementById('ver-mais').addEventListener('click', function() {
    const hiddenCards = document.querySelectorAll('.card.hidden');
    const visibleCards = document.querySelectorAll('.card:not(.hidden)');
    
    if (this.textContent === 'Ver mais') {
      // Mostra até 3 cards escondidos
      for (let i = 0; i < 3 && i < hiddenCards.length; i++) {
        hiddenCards[i].classList.remove('hidden');
      }
      
      // Se todos os cards estiverem visíveis, muda o botão para "Ver menos"
      if (hiddenCards.length <= 3) {
        this.textContent = 'Ver menos';
      }
    } else {
      // Esconde os últimos 3 cards visíveis
      for (let i = 0; i < 3 && i < visibleCards.length; i++) {
        visibleCards[visibleCards.length - 1 - i].classList.add('hidden');
      }
      
      // Muda o botão para "Ver mais" se 3 ou mais cards foram escondidos
      this.textContent = 'Ver mais';
    }
  });
  