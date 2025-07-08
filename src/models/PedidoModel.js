import mongoose from 'mongoose';

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
    enum: ['pendente', 'confirmado', 'pronto', 'finalizado', 'cancelado'],
    default: 'pendente'
  }
}, {
  timestamps: true
});

const Pedido = mongoose.model('Pedido', PedidoSchema);
export default Pedido;