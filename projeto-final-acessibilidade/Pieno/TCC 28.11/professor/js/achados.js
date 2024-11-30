document.querySelector('.toggle-btn').addEventListener('click', function () {
    const navbar = document.querySelector('.navbar');
    const isCollapsed = navbar.classList.contains('collapsed');
    
    if (isCollapsed) {
        navbar.classList.remove('collapsed');
    } else {
        navbar.classList.add('collapsed');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Obter o caminho da URL da página atual
    const path = window.location.pathname.split("/").pop();

    // Selecionar todos os links da navbar
    const navLinks = document.querySelectorAll('.nav-links a');

    // Adicionar a classe 'active' ao link correspondente à página atual
    navLinks.forEach(link => {
        if (link.getAttribute('href') === path) {
            link.classList.add('active');
        }
    });
});


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