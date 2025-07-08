import express from 'express';
const router = express.Router();
import validacaoGeralPedido from '../middleware/validacaoLojaEData.js'
import ProdutoController from '../controllers/produtoController.js'


router.get("/produtos-geral", validacaoGeralPedido, ProdutoController.getProdutoGeral)
router.post("/adicionar-produto", validacaoGeralPedido, ProdutoController.postAdicionarProduto)
router.put("/atualizar-produto/:id", ProdutoController.putAtualizarProduto)
router.delete("/deletar-produto/:id", ProdutoController.deleteProduto)

export default router