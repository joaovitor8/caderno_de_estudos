const express = require("express");
const app = express()

//req = requisição - recebe
//res = resposta - mandar mensagem pro cliente

app.get("/", function(req, res){
  res.sendFile(__dirname + "/html/index.html")
})

app.get("/sobre", function(req, res){
  res.sendFile(__dirname + "/html/sobre.html")
})

app.get("/blog", function(req, res){
  res.send("Pagina blog")
})


//parametros
app.get("/app/:a/:b/:c", function(req, res){
  res.send(req.params.a, req.params.b, req.params.c)
})




// tem que ser a ultima linha do codigo
app.listen(8081, function() {
  console.log("Servidor rodando na porta http://localhost:8081")
})