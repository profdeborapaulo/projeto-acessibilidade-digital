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