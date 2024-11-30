// server.js
const express = require('express');
const mercadopago = require('mercadopago');

mercadopago.configure({
  access_token: 'SEU_ACCESS_TOKEN'
});

const app = express();
app.use(express.json());

app.post('/create_preference', (req, res) => {
  const { description, amount } = req.body;

  const preference = {
    items: [{
      title: description,
      quantity: 1,
      currency_id: 'BRL',
      unit_price: parseFloat(amount)
    }],
    back_urls: {
      success: "https://www.seusite.com/sucesso",
      failure: "https://www.seusite.com/erro",
      pending: "https://www.seusite.com/pendente"
    },
    auto_return: "approved"
  };

  mercadopago.preferences.create(preference)
    .then(response => {
      res.json({ id: response.body.id });
    })
    .catch(error => {
      console.error("Erro ao criar preferência:", error);
      res.status(500).json({ error: "Falha ao criar preferência de pagamento." });
    });
});

app.listen(3000, () => console.log('Servidor rodando na porta 3000'));
