import logger from "../utils/logger.js";

const validacaoGeralPedido = (req, res, next) => {
  const dataRegex = /^\d{2}-\d{2}-\d{4}$/;
  const lojaId = req.headers["loja-id"]
  const dataFiltro = req.params.data;

  if (!lojaId) {
    logger.info({
      message: "LojaId incorreta ou não adicionada",
      lojaId
    })
    return res.status(400).json({ message: "Para consultar todos os pedidos lojaId e necessário!" })
  }

  if (dataFiltro && !dataRegex.test(dataFiltro)) {
    logger.info({
      message: "Formato de data inválido na URL",
      dataFiltro
    });
    return res.status(400).json({ message: "O formato da data na URL deve ser DD-MM-YYYY (ex: /pedidos-geral/24-06-2025)." });
  }
  next();
}
 export default validacaoGeralPedido
