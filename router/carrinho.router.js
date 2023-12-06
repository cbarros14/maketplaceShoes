const router = require("express").Router();
const authMiddleware = require("../middleware/auth.middleware");

const carrinhoController = require("../controller/carrinho.controller");
const { validaCarrinho, validaId, validaProdutoscarrinhoPedido } =require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

router.get("/find/:id", authMiddleware, validaId, carrinhoController.findCarrinhoByIdController);
router.get("/findall", paginacao, authMiddleware, carrinhoController.findAllCarrinhosController);

router.post("/create", authMiddleware, validaProdutoscarrinhoPedido, validaCarrinho, carrinhoController.createCarrinhoController);

router.put("/update/:id", authMiddleware, validaId, validaCarrinho, carrinhoController.updateCarrinhoController);

router.delete("/delete/:id", authMiddleware, validaId, carrinhoController.deleteCarrinhoController);

module.exports = router;