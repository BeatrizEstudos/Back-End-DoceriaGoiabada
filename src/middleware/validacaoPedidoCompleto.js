import logger from "../utils/logger.js";

const validacaoPedido = async (req, res, next) => {
   const { cliente, itens, dataHoraRetirada, status } = req.body

   if (!cliente) {
      logger.info({
         message: "Cliente não adicionado",
         lojaId
      })
      return res.status(400).json({ message: "É necessário os dados do cliente!" })
   }

   if (!itens) {
      logger.info({
         message: "Itens não adicionados",
         lojaId
      })
      return res.status(400).json({ message: "É necessário informar os itens do pedido!" })
   }


   if (!status) {
      logger.info({
         message: "Status não adicionado",
         lojaId
      })
      return res.status(400).json({ message: "É necessário informar o status do pedido!" })
   }


   if (!dataHoraRetirada) {
      logger.info({
         message: "Data e hora da retirada não informado",
         lojaId
      })
      return res.status(400).json({ message: "É necessário informar a data e hora da retirada do pedido!" })
   }

   next();

}

export default validacaoPedido