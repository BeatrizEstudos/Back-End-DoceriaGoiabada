import Pedido from "../models/PedidoModel.js";
import Produto from "../models/ProdutoModel.js"
import logger from "../utils/logger.js"

const getGeralPedidosService = async (lojaId) => {
  try {
    if (!lojaId) {
      throw new Error("O ID da loja é obrigatório.");
    }
    const pedidos = await Pedido.find({ loja: lojaId }).lean();
    return pedidos;
  } catch (error) {
    logger.error({
      message: "Erro ao buscar pedidos gerais",
      error: error.message,
      lojaId
    });
    throw error;
  }
}

const getGeralPedidosDataService = async (lojaId, dataFiltro) => {
  try {
    if (!lojaId) {
      throw new Error("O ID da loja é obrigatório.");
    }
    let query = { loja: lojaId };

    if (dataFiltro) {

      const [dia, mes, ano] = dataFiltro.split("-");
      const dataInicial = new Date(`${ano}-${mes}-${dia}T00:00:00.000Z`);
      const dataFinal = new Date(`${ano}-${mes}-${dia}T23:59:59.999Z`);

      query.createdAt = { $gte: dataInicial, $lte: dataFinal };
    }

    const pedidos = await Pedido.find({ loja: lojaId }).lean();
    return pedidos;
  } catch (error) {
    logger.error({
      message: "Erro ao buscar pedidos gerais",
      error: error.message,
      lojaId
    });
    throw error;
  }
}

const getPedidoEspecificoService = async (lojaId, pedidoId, status) => {
  try {
    if (!lojaId || !pedidoId) {
      throw new Error("O ID da loja e do pedido é obrigatório.");
    }

    if (status === "pendente") {
      throw new Error("Pedido não está com status de PENDENTE")
    }

    const pedidoEspecifico = await Pedido.findById(pedidoId).lean();

    if (!pedidoEspecifico) {
      throw new Error(`Pedido com ID ${pedidoId} não encontrado para a loja ${lojaId}.`);
    }
    return pedidoEspecifico;
  } catch (error) {
    logger.error({
      message: "Error ao buscar pedido específico",
      pedidoId
    });
    throw error;
  }
}

const postCriarPedidoService = async (lojaId, cliente, itens, status, dataHoraRetirada) => {
  try {
    const itensDoPedido = [];
    let totalDoPedidoGeral = 0;

    for (const item of itens) {
      const produto = await Produto.findOne({ _id: item.produtoId, loja: lojaId });

      if (!produto) {
        throw new Error(`Produto ${item.produtoId} não encontrado.`);

      }
      const totalGeral = (produto.preco * item.quantidade);
      itensDoPedido.push({
        produto: produto._id,
        quantidade: item.quantidade,
        precoDoProdutoNoMomentoDaCompra: produto.preco,
        total: totalGeral
      });
      totalDoPedidoGeral += totalGeral;

    }

    const novoPedido = new Pedido({
      loja: lojaId,
      cliente,
      itens: itensDoPedido,
      totalDoPedido: totalDoPedidoGeral,
      dataHoraRetirada,
      status
    });

    await novoPedido.save();

    return novoPedido;
  } catch (error) {
    logger.error({
      message: "Error ao criar pedido",
      error: error.message

    });
    throw error;
  }
}

const postAceitarPedidoService = async (lojaId, pedidoId) => {
  try {
    if (!lojaId || !pedidoId) {
      throw new Error("O ID da loja e do pedido é obrigatório.");
    }

    const aceitarPedido = await Pedido.findByIdAndUpdate(pedidoId, { status: 'confirmado' },
      { new: true }).lean();

    return aceitarPedido

  } catch (error) {
    logger.error({
      message: "Error ao aceita pedido",
      pedidoId
    });
    throw error;
  }
}

const putPedidoProntoService = async (lojaId, pedidoId) => {
  try {
    if (!lojaId || !pedidoId) {
      throw new Error("O ID da loja e do pedido é obrigatório.");
    }

    const prontoPedido = await Pedido.findByIdAndUpdate(pedidoId, { status: 'pronto' },
      { new: true }).lean();

    return prontoPedido

  } catch (error) {
    logger.error({
      message: "Error ao aceita pedido",
      pedidoId
    });
    throw error;
  }
}

const putPedidoFinalizadoService = async (lojaId, pedidoId) => {
  try {
    if (!lojaId || !pedidoId) {
      throw new Error("O ID da loja e do pedido é obrigatório.");
    }

    const finalizarPedido = await Pedido.findByIdAndUpdate(pedidoId, { status: 'finalizado' },
      { new: true }).lean();

    return finalizarPedido

  } catch (error) {
    logger.error({
      message: "Error ao finalizar pedido",
      pedidoId
    });
    throw error;
  }
}

const deleteCancelarPedidoService = async (lojaId, pedidoId) => {
  try {
    if (!lojaId || !pedidoId) {
      throw new Error("O ID da loja e do pedido é obrigatório.");
    }

    const cancelarPedido = await Pedido.findByIdAndUpdate(pedidoId, { status: 'cancelado' },
      { new: true }).lean();

    return cancelarPedido

  } catch (error) {
    logger.error({
      message: "Error ao cancelar pedido",
      pedidoId
    });
    throw error;
  }
}


export default {
  getGeralPedidosService, getGeralPedidosDataService, getPedidoEspecificoService, postCriarPedidoService, postAceitarPedidoService, putPedidoProntoService, putPedidoFinalizadoService, deleteCancelarPedidoService
}