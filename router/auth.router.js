const router = require("express").Router();
const auttController = require("../controller/auth.controller");
const { validaLogin } = require("../middleware/validacao.middleware");

router.post("/login", validaLogin, auttController.loginController);

module.exports = router;