const { getProdutoGeralService} = require ("../services/produtoService")
const logger = require("../utils/logger")

const getProdutoGeral = async (req, res) => {
  const lojaId = req.headers["loja-id"]

  try {
    const produtosGeral = await getProdutoGeralService(lojaId)
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
    return res.status(500).json({message:"Não foram encontrados os produtos da loja"})
  }
}

const postAdicionarProduto = async (req, res) => {
  const lojaId = req.headers["loja-id"]
  const produtoData = req.body;
  try {
    const adicionarProduto = await postAdicionarProdutoService(lojaId, produtoData)
    return res.status(201).json({message: "Produtos adicionados com sucesso!"})
  } catch (error){
     logger.error({
      message: "Error ao adicionar os produtos na loja", 
      error: error.message
    })
    return res.status(500).json({message:"Não foi possível adicionar os produtos na loja"})
  }
}

const putAtualizarProduto = async (req, res) => {
  const lojaId = req.headers["loja-id"]
  const produtoId = req.params.id; 
  const produtoData = req.body;
  try {
    const atualizarProduto = await putAtualizarProdutoService(lojaId, produtoId, produtoData)
    return res.status(200).json({message: "Produtos atualizados com sucesso!"})
  } catch (error){
     logger.error({
      message: "Error ao atualizar os produtos", 
      error: error.message
    })
    return res.status(500).json({message:"Não foi possível atualizar os produtos"})
  }
}

const deleteProduto = async (req, res) => {
  const lojaId = req.headers["loja-id"]
  const produtoId = req.params.id; 
  const produtoData = req.body;
  try {
    const deletarProduto = await deleteProdutoService(lojaId, produtoId, produtoData)
    return res.status(200).json({message: "Produtos deletados com sucesso!"})
  } catch (error){
     logger.error({
      message: "Error ao deletar os produtos", 
      error: error.message
    })
    return res.status(500).json({message:"Não foi possível deletar os produtos"})
  }
}
module.exports = {getProdutoGeral, postAdicionarProduto, putAtualizarProduto, deleteProduto}