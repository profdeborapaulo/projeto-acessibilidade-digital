// Função de inicialização
document.addEventListener('DOMContentLoaded', ready);

let totalAmount = 0; // Armazena o total dinâmico do carrinho

function ready() {
    // Atualiza o total e adiciona eventos ao carrinho
    updateTotal();

    // Adiciona eventos aos botões de remover produto e alterar quantidade
    document.querySelectorAll(".remove-product-button").forEach(button => {
        button.addEventListener("click", removeProduct);
    });
    document.querySelectorAll(".product-qtd-input").forEach(input => {
        input.addEventListener("change", checkIfInputIsNull);
    });
    document.querySelectorAll(".button-hover-background").forEach(button => {
        button.addEventListener("click", addProductToCart);
    });

    // Evento de checkout
    const checkoutForm = document.getElementById("checkout-form");
    if (checkoutForm) {
        checkoutForm.addEventListener("submit", handleCheckout);
    } else {
        console.error("Elemento #checkout-form não encontrado");
    }

    // Adiciona evento de clique ao botão de pagamento
    const checkoutButton = document.getElementById("checkout-button");
    if (checkoutButton) {
        checkoutButton.addEventListener("click", handleCheckout);
    } else {
        console.error("Elemento #checkout-button não encontrado");
    }

    // Adiciona eventos para abrir e fechar o carrinho
    const cartLink = document.getElementById('cart-link'); // Link do carrinho
    const cartSidebar = document.getElementById('cartSidebar');
    const closeCart = document.getElementById('closeCart');

    // Abrir o carrinho quando clicar no link
    if (cartLink) {
        cartLink.addEventListener('click', function(event) {
            event.preventDefault(); // Previne o comportamento padrão do link
            cartSidebar.classList.add('open');
        });
    } else {
        console.error("Elemento #cart-link não encontrado");
    }

    // Fechar o carrinho
    if (closeCart) {
        closeCart.addEventListener('click', function() {
            cartSidebar.classList.remove('open');
        });
    } else {
        console.error("Elemento #closeCart não encontrado");
    }
}

// Função para adicionar um produto ao carrinho
function addProductToCart(event) {
    const button = event.target;
    const productInfos = button.parentElement.parentElement;
    const productImage = productInfos.querySelector(".product-image").src;
    const productName = productInfos.querySelector(".product-title").innerText;
    const productPrice = productInfos.querySelector(".product-price").innerText;

    // Verifica se o produto já está no carrinho
    const productsCartNames = document.getElementsByClassName("cart-product-title");
    for (let name of productsCartNames) {
        if (name.innerText === productName) {
            const quantityInput = name.parentElement.parentElement.querySelector(".product-qtd-input");
            quantityInput.value++;
            updateTotal();
            return;
        }
    }

    // Criação de um novo item no carrinho
    let newCartProduct = document.createElement("tr");
    newCartProduct.classList.add("cart-product");
    newCartProduct.innerHTML = `
        <td class="product-identification">
            <img src="${productImage}" alt="${productName}" class="cart-product-image">
            <strong class="cart-product-title">${productName}</strong>
        </td>
        <td><span class="cart-product-price">${productPrice}</span></td>
        <td>
            <input type="number" value="1" min="0" class="product-qtd-input">
            <button type="button" class="remove-product-button">Remover</button>
        </td>
    `;
    document.querySelector(".cart-table tbody").append(newCartProduct);
    updateTotal();
    
    // Adiciona eventos ao novo produto
    newCartProduct.querySelector(".remove-product-button").addEventListener("click", removeProduct);
    newCartProduct.querySelector(".product-qtd-input").addEventListener("change", checkIfInputIsNull);
}

// Remove um produto do carrinho
function removeProduct(event) {
    event.target.parentElement.parentElement.remove();
    updateTotal();
}

// Verifica e remove itens com quantidade 0
function checkIfInputIsNull(event) {
    if (event.target.value === "0") {
        event.target.parentElement.parentElement.remove();
    }
    updateTotal();
}

// Atualiza o total do carrinho
function updateTotal() {
    const cartProducts = document.getElementsByClassName("cart-product");
    totalAmount = 0;

    for (let product of cartProducts) {
        const productPrice = parseFloat(
            product.querySelector(".cart-product-price").innerText.replace("R$", "").replace(",", ".")
        );
        const productQuantity = parseInt(product.querySelector(".product-qtd-input").value);
        totalAmount += productPrice * productQuantity;
    }

    // Atualiza o valor total na interface
    document.querySelector(".total-amount").innerText = `R$ ${totalAmount.toFixed(2).replace(".", ",")}`;
}

// Envia os itens do carrinho para o Stripe
async function handleCheckout(event) {
    event.preventDefault(); // Evita o envio do formulário de forma tradicional

    // Valida se o carrinho tem itens
    if (totalAmount === 0) {
        alert("Seu carrinho está vazio!");
        return;
    }

    // Criação da sessão de pagamento no Stripe
    try {
        const response = await fetch("http://localhost:4242/create-checkout-session", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                items: getCartItems(),
            }),
        });

        if (!response.ok) {
            throw new Error("Falha ao criar a sessão de pagamento");
        }

        const data = await response.json();
        window.location.href = data.url; // Redireciona para a página de pagamento do Stripe
    } catch (error) {
        console.error("Erro no checkout:", error);
        alert("Ocorreu um erro ao processar o pagamento. Tente novamente.");
    }
}

// Função para obter os itens do carrinho
function getCartItems() {
    const cartProducts = document.getElementsByClassName("cart-product");
    const items = [];

    for (let product of cartProducts) {
        const productName = product.querySelector(".cart-product-title").innerText;
        const productPrice = parseFloat(
            product.querySelector(".cart-product-price").innerText.replace("R$", "").replace(",", ".")
        );
        const productQuantity = parseInt(product.querySelector(".product-qtd-input").value);

        items.push({
            title: productName,
            unit_price: productPrice * 100, // Enviar o preço em centavos para o Stripe
            quantity: productQuantity,
        });
    }

    return items;
}



