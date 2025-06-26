const express = require('express');
const pedidoRoutes = require('./src/routes/pedidoRoutes'); 

const app = express();
app.use(express.json());

app.use('/doceria', pedidoRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
