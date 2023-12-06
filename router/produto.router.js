const router = require("express").Router();

const produtoController = require("../controller/produto.controller");
const authMiddleware = require("../middleware/auth.middleware");
const { validaProduto, validaId, valida_IdBody } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

router.get("/find/:id", authMiddleware, validaId, produtoController.findProductByIdController);
router.get("/findAll", authMiddleware, paginacao, produtoController.findAllProductsController);

router.post("/create", authMiddleware, validaProduto, produtoController.createProductController);
router.post("/addCategoria/:id", authMiddleware, validaId, valida_IdBody, produtoController.addCategoriaProductController);

router.put("/update/:id", authMiddleware, validaId, validaProduto, produtoController.updateProductController);

router.delete("/delete/:id", authMiddleware, validaId, produtoController.deleteProductController);
router.delete("/removeCategoria/:id", authMiddleware, validaId, produtoController.removeCategoriaProductController);

module.exports = router;