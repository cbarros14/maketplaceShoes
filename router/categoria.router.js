const router = require("express").Router();
const authMiddleware = require("../middleware/auth.middleware");

const categoriaController = require("../controller/categoria.controller");
const { validaCategoria, validaId } = require("../middleware/validacao.middleware");
const paginacao = require("../middleware/paginacao.middleware");

router.get("/find/:id", authMiddleware, validaId, categoriaController.findCategoriaByIdController);
router.get("/findall", paginacao, authMiddleware, categoriaController.findAllCategoriasController);

router.post("/create", authMiddleware, validaCategoria, categoriaController.createCategoriaController);

router.put("/update/:id", authMiddleware, validaId, validaCategoria, categoriaController.updateCategoriaController);

router.delete("/delete/:id", authMiddleware, validaId, categoriaController.deleteCategoriaController);

module.exports = router;