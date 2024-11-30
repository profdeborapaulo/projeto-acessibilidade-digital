const express = require("express");
const path = require("path");
const stripe = require("stripe")("sk_test_51QIeqtCL1PBpJXVRfPyupJc6WaVdZqPr9SuTznK0r8tGOtPmrM8am0mclFq4EBnBzsblw87LwGOkluDIgSBH8Zzh00zS9lcKam");
const cors = require("cors");

// Inicializa o servidor Express
const app = express();

// Middleware
app.use(express.json()); // Para processar JSON
app.use(cors()); // Habilita CORS para requisições do front-end

// Configura o diretório de arquivos estáticos
app.use(express.static(path.resolve(__dirname, "../public")));

// Rota para criar um pagamento no Stripe
app.post('/create-checkout-session', async (req, res) => {
    const items = req.body.items; // Recebe os itens do carrinho

    try {
        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: items.map(item => ({
                price_data: {
                    currency: 'brl',
                    product_data: {
                        name: item.title,
                    },
                    unit_amount: item.unit_price, // Preço em centavos
                },
                quantity: item.quantity,
            })),
            mode: 'payment',
            success_url: 'http://localhost:4242/html/success.html', // Ajuste para localhost em testes
            cancel_url: 'http://localhost:4242/html/cancel.html',  // Ajuste para localhost em testes
        });

        res.json({ url: session.url }); // Retorna a URL do Stripe para redirecionamento
    } catch (error) {
        console.error("Erro ao criar sessão de pagamento:", error);
        res.status(500).json({ error: error.message });
    }
});

// Rotas para simular páginas de sucesso e cancelamento (opcional para teste)
app.get('/success', (req, res) => {
    res.send("Pagamento realizado com sucesso!");
});

app.get('/cancel', (req, res) => {
    res.send("Pagamento cancelado!");
});

// Inicia o servidor
const PORT = 4242;
app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
