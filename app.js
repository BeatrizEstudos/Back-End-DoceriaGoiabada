const express = require('express');
const pedidoRoutes = require('./src/routes/pedidoRoutes'); 
const produtoRoutes = require('./src/routes/produtoRoutes')

const app = express();
app.use(express.json());

app.use('/doceria', pedidoRoutes, produtoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
