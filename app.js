import express from 'express';
import connectDB from './src/config/db.js'; 
import pedidoRoutes from './src/routes/pedidoRoutes.js';
import produtoRoutes from './src/routes/produtoRoutes.js';
import logger from './src/utils/logger.js'; 

const app = express();


app.use(express.json()); 

connectDB();

app.use('/doceria', pedidoRoutes, produtoRoutes)

const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
    logger.info(`Servidor rodando em http://localhost:${PORT}`); 
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});