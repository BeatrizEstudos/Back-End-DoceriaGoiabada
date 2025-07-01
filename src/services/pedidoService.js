const Pedido = require("../models/PedidoModel");
const logger = require("../utils/logger")

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
      // Supondo dataFiltro no formato "DD-MM-YYYY"
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

const putAceitarPedidoService = async (lojaId, pedidoId) => {
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


module.exports = {
  getGeralPedidosService, getGeralPedidosDataService, getPedidoEspecificoService, putAceitarPedidoService, putPedidoProntoService, putPedidoFinalizadoService, deleteCancelarPedidoService
}