const mongoose = require('mongoose');


const PedidoSchema = new mongoose.Schema({
  cliente: {
    nome: String,
    email: String,
    telefone: String
  },
  itens: [
    {
      nome: String,
      preco: Number,
      quantidade: Number
    }
  ],
  dataHoraRetirada: Date,
  status: {
    type: String,
    enum: ['pendente', 'confirmado', 'concluído'],
    default: 'pendente'
  }
}, {
  timestamps: true
});

const Pedido = mongoose.model('Pedido', PedidoSchema);
module.exports = Pedido;