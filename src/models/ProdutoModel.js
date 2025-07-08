import mongoose from 'mongoose';

const ProdutoSchema = new mongoose.Schema({
  produtos: {
    nome: String,
    preco: Number,
    ingredientes: String,
    imagem: String
  },
});

const Produto = mongoose.model('Produto', ProdutoSchema);
export default Produto;