const express = require('express');
require ("dotenv").config();
const conectToDatabase = require("./src/database/database"); //arquivo de conexão com o banco
const authService = require("./service/auth.service");

const usuario= require ('./src/router/usuario.router'); //arquivo de rota do usuario 

const app = express();

const auth = require("./src/router/auth.router"); //arquivo de rota do auth
const produto = require("./src/router/produto.router"); //arquivo de rota do produto
const categoria = require("./src/router/categoria.router"); //arquivo de rota da categoria
const carrinho = require("./src/router/carrinho.router"); //arquivo de rota do carrinho
const pedido = require("./src/router/pedido.router"); //arquivo de rota do pedido

const PORT = 3000;
 app.use (express.json())

 conectToDatabase();// conectando ao banco

 app.use ("/usuario", usuario);//chamando as rotas do usuario

 app.get ('/', (req,res) => {
    res.send ({
        message: "Bem vindo ao nosso market place de Sapatos"
    }
 );

app.use('/auth', auth); // Chamando as rotas de auth
app.use('/produto', produto); // Chamando as rotas do produto
app.use('/categoria', categoria); // Chamando as rotas de categoria
app.use('/carrinho', carrinho); // Chamando as rotas de carrinho
app.use('/pedido', pedido); // Chamando as rotas de pedido

 app.post( "/login", async (req, res)=> {
  const { email, senha} =req.body;
  const user = await authService.loginService(email);

  if(!user){
   return res.status(400).send ({ message: "usuario não encontrado, tente novamente"})
  }
  if (senha != user.senha)
  return res.status(400).send ({ message:"senha invalida" });
 {
 res.send(user);
 }
 
 app.listen( port, ()=> {
    console.log ("Servidor rodando em: http://localhost:${port}") 
   });
