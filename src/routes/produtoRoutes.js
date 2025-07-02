const express = require('express');
const router = express.Router();
const validacaoGeralPedido = require("../middleware/validacaoLojaEData")
const ProdutoController = require ("../controllers/produtoController")


router.get("/produtos-geral", validacaoGeralPedido, ProdutoController.getProdutoGeral)
router.post("/adicionar-produto", validacaoGeralPedido, ProdutoController.postAdicionarProduto)
router.put("/atualizar-produto/:id", PedidoController.putAtualizarProduto)
router.delete("deletar-produto/:id", PedidoController.deleteProduto)

module.exports = router