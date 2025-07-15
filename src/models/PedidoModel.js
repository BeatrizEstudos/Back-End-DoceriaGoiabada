import mongoose from 'mongoose';

const PedidoSchema = new mongoose.Schema({

  loja: {
    type: String,
    required: true
  },
  cliente: [{
    nome: String,
    email: String,
    telefone: String
  }
  ],
  itens: [
    {
      produto: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Produto',
        required: true
      },
      quantidade: {
        type: Number,
        required: true,
        min: 1
      },
      precoDoProdutoNoMomentoDaCompra: {
        type: Number,
        required: true,
        min: 0
      },
      total: {
        type: Number,
        required: true,
        min: 1
      }
    }
  ],
  totalDoPedido: Number,
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