const logger = require ("../utils/logger")
const Produto = require ("../models/ProdutoModel")

const getProdutoGeralService = async (lojaId) => {
  try {
     if (!lojaId) {
      throw new Error("O ID da loja é obrigatório.");
    }
    const produtos = await Produto.find({ loja: lojaId }).lean();
    return produtos;
  } catch (error) {
     logger.error({
          message: "Erro ao buscar todos os produtos",
          error: error.message,
          lojaId
        });
        throw error;
  }
}

const postAdicionarProdutoService = async (lojaId, produto) => {
  try {
    if (!lojaId) {
      throw new Error("O ID da loja é obrigatório.");
    }
    if(!produto) {
       throw new Error("É necessário adicionar as informações do produto");
    }
    const adicaoProduto = await Produto.create({ ...produto, loja: lojaId });
    return adicaoProduto;
  } catch (error) {
    logger.error({
          message: "Erro ao adicionar o(s) produto(s)",
          error: error.message,
        });
        throw error;
  }
}

const putAtualizarProdutoService = async (lojaId, produtoId, produtoData) => {
  try {
    if (!lojaId) {
      throw new Error("O ID da loja é obrigatório.");
    }
    if(!produto) {
       throw new Error("É necessário adicionar as informações do produto");
    }
    const atualizarProduto = await Produto.findOneAndUpdate(
    { _id: produtoId, loja: lojaId },
    produtoData,                     
    { new: true }                    
).lean(); 
    return atualizarProduto;
  } catch (error) {
    logger.error({
          message: "Erro ao atualizar o(s) produto(s) no service",
          error: error.message,
        });
        throw error;
  }
}

const deleteProdutoService = async (lojaId, produtoId, produtoData) => {
  try {
    if (!lojaId) {
      throw new Error("O ID da loja é obrigatório.");
    }
    if(!produto) {
       throw new Error("É necessário adicionar as informações do produto");
    }
    const deletarProduto = await Produto.findOneAndDelete({ _id: produtoId, loja: lojaId }).lean();

    return deletarProduto;
  } catch (error) {
    logger.error({
          message: "Erro ao deletar o(s) produto(s) no service",
          error: error.message,
        });
        throw error;
  }
}

module.exports = { getProdutoGeralService, postAdicionarProdutoService, putAtualizarProdutoService, deleteProdutoService}