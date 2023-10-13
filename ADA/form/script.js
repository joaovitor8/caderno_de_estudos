const dados = {
  nome: "Ada Lovelace",
  email: "ada@email.com",
  telefones: [
    { 
      numero: "(11) 99123-4567",
      tipo: "casa"
    }
  ],
  endereco: {
     logradouro: "Rua das programadoras",
     cidade: "Vale do silício",
     estado: "Codefornia",
     cep: "10100-100",
     pais: "Programaland"
  }
}


function preencherFormulario() {
  document.getElementById("nome").value = dados.nome
  document.getElementById("email").value = dados.email
  document.getElementById("telefone").value = dados.telefones[0].numero
  document.getElementById("tipo-telefone").value = dados.telefones[0].tipo
  document.getElementById("logradouro").value = dados.endereco.logradouro
  document.getElementById("cidade").value = dados.endereco.cidade
  document.getElementById("estado").value = dados.endereco.estado
  document.getElementById("cep").value = dados.endereco.cep
  document.getElementById("pais").value = dados.endereco.pais

  console.log("Dados preenchidos:", dados)
}

window.addEventListener("load", preencherFormulario)

document.getElementById("nome").addEventListener("change", function() {
  dados.nome = this.value
  console.log("Dados atualizados:", dados)
})

