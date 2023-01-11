const Sequelize = require('sequelize')

const sequelize = new Sequelize('tabelasequelize', 'root', '27102001j', {
  host: "localhost",
  dialect: "mysql",
})





sequelize.authenticate().then(function(){
  console.log("Você de conectou: ")
}).catch(function(erro){
  console.log("erro ao se conectar: " + erro)
})