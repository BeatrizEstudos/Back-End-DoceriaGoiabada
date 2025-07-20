import express from 'express';
const router = express.Router();
import PedidoController from '../controllers/pedidoController.js'
import validacaoGeralPedido from '../middleware/validacaoLojaEData.js'
import validacaoPedidoCompleto from '../middleware/validacaoPedidoCompleto.js'

router.get("/pedidos-geral/", validacaoGeralPedido, PedidoController.getPedidoGeral)
router.get("/pedidos-geral/:data", validacaoGeralPedido, PedidoController.getPedidoGeralData)
router.get("/pedido-especifico/:id", validacaoGeralPedido, PedidoController.getPedidoEspecifico)
router.post("/criar-pedido/", validacaoGeralPedido, validacaoPedidoCompleto, PedidoController.postCriarPedido)
router.post("/aceita-pedido/:id", validacaoGeralPedido, PedidoController.postAceitarPedido)
router.put("/pedido-pronto/:id", validacaoGeralPedido, PedidoController.putPedidoPronto)
router.put("/finalizar-pedido/:id", validacaoGeralPedido, PedidoController.putPedidoFinalizado)
router.delete("/cancelar-pedido/:id", validacaoGeralPedido, PedidoController.deleteCancelarPedido)

export default router

