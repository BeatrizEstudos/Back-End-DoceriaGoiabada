import PedidoService from "../services/pedidoService.js"
import logger from '../utils/logger.js'

const getPedidoGeral = async (req, res) => {
  const lojaId = req.headers["loja-id"]
  try {
    const mostrarPedidos = await PedidoService.getGeralPedidosService(lojaId)
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

const getPedidoGeralData = async (req, res) => {
  const lojaId = req.headers["loja-id"]
  const dataFiltro = req.params.id;
  try {
    const mostrarPedidos = await PedidoService.getGeralPedidosDataService(lojaId, dataFiltro)
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

const getPedidoEspecifico = async (req, res) => {
  const lojaId = req.headers["loja-id"]
  const pedidoId = req.params.id;
  try {
    const pedidoEspecifico = await PedidoService.getPedidoEspecificoService(lojaId, pedidoId)
    return res.status(200).json(pedidoEspecifico);
  } catch (error) {
    logger.error({
      message: "Erro ao buscar pedido específico",
      error: error.message,
      pedidoId
    })
  }
  if (!pedidoId) {
    logger.warn({
      message: "É necessário adicionar o id do pedido",
      pedidoID
    })
    return res.status(500).json({ message: "Ocorreu um erro ao buscar o pedido específico" })
  }
}

const postAceitarPedido = async (req, res) => {
  const lojaId = req.headers["loja-id"]
  const pedidoId = req.params.id

  try {
    if (!lojaId || !pedidoId) {
      logger.info({
        message: "Id da loja e id do pedido é obrigatorio"
      })
      return res.status(400).json({ message: "O id da loja e o pedido é obrigatório!" })
    }

    const aceitarPedido = await PedidoService.postAceitarPedidoService(lojaId, pedidoId);

    return res.status(200).json({
      message: `Pedido ${pedidoId} aceito com sucesso!`,
      pedido: aceitarPedido

    })

  } catch (error) {
    logger.error({
      message: "Erro ao aceitar pedido",
      error: error.message,
      lojaId
    });
    return res.status(500).json({ message: "Ocorreu um erro ao aceitar pedido." });
  }
}

const putPedidoPronto = async (req, res) => {
  const lojaId = req.headers["loja-id"]
  const pedidoId = req.params.id

  try {
    if (!lojaId || !pedidoId) {
      logger.info({
        message: "Id da loja e id do pedido é obrigatorio"
      })
      return res.status(400).json({ message: "O id da loja e o pedido é obrigatório!" })
    }

    const prontoPedido = await PedidoService.putPedidoProntoService(lojaId, pedidoId);

    return res.status(200).json({
      message: `Pedido ${pedidoId} pronto com sucesso!`,
      pedido: prontoPedido

    })

  } catch (error) {
    logger.error({
      message: "Erro ao avisar que o pedido está pronto",
      error: error.message,
      lojaId
    });
    return res.status(500).json({ message: "Ocorreu um erro ao alterar o status do pedido para PRONTO." });
  }
}

const putPedidoFinalizado = async (req, res) => {
  const lojaId = req.headers["loja-id"]
  const pedidoId = req.params.id

  try {
    if (!lojaId || !pedidoId) {
      logger.info({
        message: "Id da loja e id do pedido é obrigatorio"
      })
      return res.status(400).json({ message: "O id da loja e o pedido é obrigatório!" })
    }

    const finalizarPedido = await PedidoService.putPedidoFinalizadoService(lojaId, pedidoId);

    return res.status(200).json({
      message: `Pedido ${pedidoId} finalizado com sucesso!`,
      pedido: finalizarPedido

    })

  } catch (error) {
    logger.error({
      message: "Erro ao avisar que o pedido está finalizado",
      error: error.message,
      lojaId
    });
    return res.status(500).json({ message: "Ocorreu um erro ao alterar o status do pedido para FINALIZADO." });
  }
}

const deleteCancelarPedido = async (req, res) => {
  const lojaId = req.headers["loja-id"]
  const pedidoId = req.params.id

  try {
    if (!lojaId || !pedidoId) {
      logger.info({
        message: "Id da loja e id do pedido é obrigatorio"
      })
      return res.status(400).json({ message: "O id da loja e o pedido é obrigatório!" })
    }

    const cancelarPedido = await PedidoService.deleteCancelarPedidoService(lojaId, pedidoId);

    return res.status(200).json({
      message: `Pedido ${pedidoId} cancelado com sucesso!`,
      pedido: cancelarPedido

    })

  } catch (error) {
    logger.error({
      message: "Erro ao avisar que o pedido está cancelado",
      error: error.message,
      lojaId
    });
    return res.status(500).json({ message: "Ocorreu um erro ao alterar o status do pedido para CANCELADO." });
  }
}

export default { getPedidoGeral, getPedidoGeralData, getPedidoEspecifico, postAceitarPedido, putPedidoPronto, putPedidoFinalizado, deleteCancelarPedido }




