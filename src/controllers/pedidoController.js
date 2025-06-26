const { getGeralPedidosService } = require("../services/pedidoService")
const logger = require ("../utils/logger")

const getPedidoGeral = async (req, res) => {
  const lojaId = req.headers["loja-id"]
  const dataFiltro = req.params.data ;
  try {
    const mostrarPedidos = await getGeralPedidosService(lojaId, dataFiltro)
    return res.status(200).json(mostrarPedidos);
  } catch (error) {
    logger.error({
      message: "Erro ao buscar pedidos gerais",
      error: error.message,
      lojaId
    });
    return res.status(500).json({ message: "Ocorreu um erro ao buscar os pedidos." });
  }

}

module.exports = { getPedidoGeral }




