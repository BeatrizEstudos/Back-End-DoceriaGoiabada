const express = require('express');
const router = express.Router();
const PedidoController = require("../controllers/pedidoController")
const validacaoGeralPedido = require("../middleware/validacaoLojaEData")

router.get("/pedidos-geral/", validacaoGeralPedido, PedidoController.getPedidoGeral)
router.get("/pedidos-geral/:data", validacaoGeralPedido, PedidoController.getPedidoGeral)
// router.get("/pedido-especifico/:id", PedidoController.)
// router.post("/aceita-pedido/:id", PedidoController.)
// router.post("/pedido-pronto/:id", PedidoController. )
// router.post("/finalizar-pedido/:id", PedidoController.)
// router.delete("/cancelar-pedido/:id", PedidoController.)

module.exports = router

