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

// Função para criar um card
function createCard(imageSrc) {
    const cardContainer = document.getElementById('cardContainer');
    const newCard = document.createElement('div');
    newCard.classList.add('card');

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('card-info');

    const img = document.createElement('img');
    img.classList.add('img');
    img.src = imageSrc;
    img.alt = 'Novo item';

    // Botão de remoção
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove-button');
    removeBtn.innerText = 'Remover';

    // Adiciona evento de remoção
    removeBtn.onclick = function() {
        newCard.remove();
        updateLocalStorage(); // Atualiza o localStorage
    };

    // Adiciona a imagem e botão de remoção ao card
    cardInfo.appendChild(img);
    newCard.appendChild(cardInfo);
    newCard.appendChild(removeBtn);
    
    // Adicionar o novo card ao container
    cardContainer.appendChild(newCard);
}

// Seleciona o botão "Adicionar item" e o modal
const addItemButton = document.querySelector('.botao');
const modal = document.querySelector('.modal');
const closeModalButton = document.querySelector('.close');

// Função para abrir o modal
addItemButton.onclick = function() {
    modal.style.display = 'flex';
};

// Função para fechar o modal ao clicar no "X"
closeModalButton.onclick = function() {
    modal.style.display = 'none';
};

// Fecha o modal se o usuário clicar fora do conteúdo do modal
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
};

// Adicionar nova imagem e criar card dinamicamente
const addImageForm = document.getElementById('addImageForm');

addImageForm.onsubmit = function(event) {
    event.preventDefault();

    const imageInput = document.getElementById('imageInput');
    const file = imageInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function(e) {
            createCard(e.target.result); // Cria um novo card com a imagem
            updateLocalStorage(); // Atualiza o localStorage
            modal.style.display = 'none'; // Fechar o modal
        };

        reader.readAsDataURL(file);
    }
};

// Atualiza o localStorage com os itens atuais
function updateLocalStorage() {
    const items = [];
    
    document.querySelectorAll('.card img').forEach(img => {
        items.push(img.src);
    });

    localStorage.setItem('items', JSON.stringify(items));
}



