// Carregar itens do localStorage ao abrir a página
document.addEventListener('DOMContentLoaded', () => {
    const cardContainer = document.getElementById('cardContainer');
    const items = JSON.parse(localStorage.getItem('items')) || [];

    items.forEach(item => {
        createCard(item);
    });
});

// Função para criar um card apenas para visualização
function createCard(imageSrc) {
    const cardContainer = document.getElementById('cardContainer');
    
    const newCard = document.createElement('div');
    newCard.classList.add('card');

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');

    const img = document.createElement('img');
    img.classList.add('img');
    img.src = imageSrc;
    
    // Adiciona a imagem ao card
    cardInfo.appendChild(img);
    
    newCard.appendChild(cardInfo);
    
     // Adicionar o novo card ao container
     cardContainer.appendChild(newCard);
}