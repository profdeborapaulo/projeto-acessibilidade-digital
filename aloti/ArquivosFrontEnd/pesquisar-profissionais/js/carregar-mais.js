document.querySelectorAll('.carregar-mais').forEach(button => {
    button.addEventListener('click', function () {
      const container = this.previousElementSibling;
      const isExpanded = this.textContent === 'Ver menos';
  
      const profiles = [
        { img: 'img/Profissionais/Fisio-JoaoPereira.png', nome: 'Joao Pereira', profissao: 'Fisioterapeuta', avaliacao: '4,8', localizacao: 'Jandira, SP', valor: 'R$75,00' },
        { img: 'img/Profissionais/Psi-AnaPaulaMendes.png', nome: 'Ana Paula', profissao: 'Psicóloga', avaliacao: '4,7', localizacao: 'São Paulo, SP', valor: 'R$60,00' },
        { img: 'img/Profissionais/Ocu-RodrigoNunes.png', nome: 'Rodrigo Nunes', profissao: 'Cuidador Ocupacional', avaliacao: '4,6', localizacao: 'Barueri, SP', valor: 'R$50,00' }
      ];
  
      if (isExpanded) {
        const addedCards = container.querySelectorAll('.card-added');
        addedCards.forEach(card => card.remove());
        this.textContent = 'Ver mais';
      } else {
        profiles.forEach(profile => {
          const newCard = document.createElement('div');
          newCard.classList.add('profissional', 'card-added');
          newCard.innerHTML = `
            <img src="${profile.img}" class="img-perfil"> 
            <h2 class="nome-prof">${profile.nome}</h2>
            <p>${profile.profissao}</p>
            <div class="icones-profissional">
              <img src="img/estrela.svg">
              <p>${profile.avaliacao}</p>
              <img src="img/localização.svg">
              <p>${profile.localizacao}</p>
            </div>
            <h2 class="valor-serviço">${profile.valor}</h2>
            <p>p/hora</p>
            <a href="#"><button>Ver detalhes</button></a>
          `;
          container.appendChild(newCard);
        });
        this.textContent = 'Ver menos';
      }
    });
  });
  