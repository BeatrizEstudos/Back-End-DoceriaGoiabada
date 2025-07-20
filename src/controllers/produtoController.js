import PedidoService from "../services/produtoService.js";
import logger from '../utils/logger.js'

const getProdutoGeral = async (req, res) => {
  const lojaId = req.headers["loja-id"]

  try {
    const produtosGeral = await PedidoService.getProdutoGeralService(lojaId)
    logger.info({
      message: "Mostrando todos os produtos",
      produtosGeral
    })
    return res.status(200).json(produtosGeral)
  } catch (error) {
    logger.error({
      message: "Error ao procurar todos os produtos da loja",
      error: error.message
    })
    return res.status(500).json({ message: "Não foram encontrados os produtos da loja" })
  }
}

const postAdicionarProduto = async (req, res) => {
  const lojaId = ["loja-id"]
  const produtoData = req.body;
  try {
    const adicionarProduto = await PedidoService.postAdicionarProdutoService(lojaId, produtoData)
    return res.status(201).json({ message: "Produtos adicionados com sucesso!", adicionarProduto })
  } catch (error) {
    logger.error({
      message: "Error ao adicionar os produtos na loja",
      error: error.message
    })
    return res.status(500).json({ message: "Não foi possível adicionar os produtos na loja" })
  }
}

const putAtualizarProduto = async (req, res) => {
  const lojaId = req.headers["loja-id"]
  const produtoId = req.params.id;
  const produtoData = req.body;
  try {
    const atualizarProduto = await PedidoService.putAtualizarProdutoService(lojaId, produtoId, produtoData)
    return res.status(200).json({ message: "Produtos atualizados com sucesso!", atualizarProduto })
  } catch (error) {
    logger.error({
      message: "Error ao atualizar os produtos",
      error: error.message
    })
    return res.status(500).json({ message: "Não foi possível atualizar os produtos" })
  }
}

const deleteProduto = async (req, res) => {
  const lojaId = req.headers["loja-id"]
  const produtoId = req.params.id;
  const produtoData = req.body;
  try {
    const deletarProduto = await PedidoService.deleteProdutoService(lojaId, produtoId, produtoData)
    return res.status(200).json({ message: "Produtos deletados com sucesso!", deletarProduto })
  } catch (error) {
    logger.error({
      message: "Error ao deletar os produtos",
      error: error.message
    })
    return res.status(500).json({ message: "Não foi possível deletar os produtos" })
  }
}
export default { getProdutoGeral, postAdicionarProduto, putAtualizarProduto, deleteProduto }