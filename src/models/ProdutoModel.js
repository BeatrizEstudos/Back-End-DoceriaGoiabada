import mongoose from 'mongoose';

const ProdutoSchema = new mongoose.Schema({
  
  loja: { 
    type: String,
    required: true
  },
  nome: {
    type: String,
    required: true 
  },
  preco: {
    type: Number,
    required: true,
    min: 0
  },
  ingredientes: {
    type: String
  },
  imagem: {
    type: String
  },
  
}, { timestamps: true }); 

const Produto = mongoose.model('Produto', ProdutoSchema);
export default Produto;