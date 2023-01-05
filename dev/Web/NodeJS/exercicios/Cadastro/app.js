const Sequelize = require('sequelize')

const sequelize = new Sequelize('tabelasequelize', 'root', '27102001j', {
  host: "localhost",
  dialect: "mysql",
})

const Postagem = sequelize.define('postagem', {
  titulo: {
    type: Sequelize.STRING
  },
  conteudo: {
    type: Sequelize.TEXT
  }
})

Postagem.create({
  titulo: "blabla",
  conteudo: "abc"
})

const Usuario = sequelize.define('Usuarios', {
  nome: {
    type: Sequelize.STRING
  },
  sobrenome: {
    type: Sequelize.STRING
  }, 
  idade: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING
  }
})

Usuario.create({
  nome: "João Vitor",
  sobrenome: "Ezequiel",
  idade: 21,
  email: "joaoezeki@gmail.com"
})



//sequelize.authenticate().then(function(){
//  console.log("Você de conectou: ")
//}).catch(function(erro){
//  console.log("erro ao se conectar: " + erro)
//})