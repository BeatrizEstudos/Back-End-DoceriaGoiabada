const Pedido = require("../models/PedidoModel");
const logger = require ("../utils/logger")

const getGeralPedidosService = async (lojaId) => {
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

module.exports = {
  getGeralPedidosService
}