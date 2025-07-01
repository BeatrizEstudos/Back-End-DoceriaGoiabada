const express = require('express');
const router = express.Router();
const PedidoController = require("../controllers/pedidoController")
const validacaoGeralPedido = require("../middleware/validacaoLojaEData")

router.get("/pedidos-geral/", validacaoGeralPedido, PedidoController.getPedidoGeral)
router.get("/pedidos-geral/:data", validacaoGeralPedido, PedidoController.getPedidoGeralData)
router.get("/pedido-especifico/:id", validacaoGeralPedido, PedidoController.getPedidoEspecifico)
router.post("/aceita-pedido/:id", PedidoController.postAceitarPedido)
router.put("/pedido-pronto/:id", PedidoController.putPedidoPronto)
router.put("/finalizar-pedido/:id", PedidoController.putPedidoFinalizado)
router.delete("/cancelar-pedido/:id", PedidoController.deleteCancelarPedido)

module.exports = router

