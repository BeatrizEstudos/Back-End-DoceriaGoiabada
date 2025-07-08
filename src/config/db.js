import mongoose from 'mongoose';
import logger from '../utils/logger.js'; 

const DB_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/Doceria';

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URI); 
        logger.info('MongoDB conectado com sucesso!');
        console.log('MongoDB conectado com sucesso!');
    } catch (error) {
        logger.error(`Erro ao conectar ao MongoDB: ${error.message}`);
        console.error(`Erro ao conectar ao MongoDB: ${error.message}`);
        process.exit(1); 
    }
};

export default connectDB;