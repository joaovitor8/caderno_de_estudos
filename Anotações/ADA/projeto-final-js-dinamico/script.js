document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("cadastro-form")

  form.addEventListener("submit", function (e) {
    e.preventDefault()

    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    if (username && password) {
      if (localStorage.getItem(username) !== null) {
        alert("Este nome de usuário já está em uso. Escolha outro.")
      } else {
        localStorage.setItem(username, password)
        alert("Cadastro realizado com sucesso!")
        form.reset()
      }
    } else {
      alert("Por favor, preencha todos os campos.")
    }
  })
})

// ---------------------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form")

  loginForm.addEventListener("submit", function(e) {
    e.preventDefault()

    const loginUsername = document.getElementById("login-username").value
    const loginPassword = document.getElementById("login-password").value

    const storedPassword = localStorage.getItem(loginUsername)

    if (loginPassword === storedPassword) {
      alert("Login bem-sucedido!")
      window.location.href = "index.html"
    } else {
      alert("Credenciais inválidas. Tente novamente.")
    }
  })
})

// --------------------------------

document.addEventListener("DOMContentLoaded", function () {
  const tarefaForm = document.getElementById("tarefa-form")
  const tarefasLista = document.getElementById("tarefas-lista")
  let tarefas = []

  tarefaForm.addEventListener("submit", function (e) {
    e.preventDefault()

    const tarefaInput = document.getElementById("tarefa")
    const prazoInput = document.getElementById("prazo")

    const novaTarefa = {
      tarefa: tarefaInput.value,
      prazo: prazoInput.value
    }

    tarefas.push(novaTarefa)
    exibirTarefas()
    // tarefaInput.value = ""
    // prazoInput.value = ""
    console.log(tarefas)
  })

  function exibirTarefas() {
    tarefasLista.innerHTML = ""
    
    tarefas.map((tarefa, key) => {
      const tarefaItem = document.createElement("div")
      tarefaItem.innerHTML = `
        <div class="tarefas">
          <span>${tarefa.tarefa}</span>
          <span>Prazo: ${tarefa.prazo}</span>
          <button onclick="editarTarefa(key)">Concluir</button>
          <button onclick="editarTarefa(key)">Editar</button>
          <button onclick="excluirTarefa(key)">Excluir</button>
        </div>
      `
      tarefasLista.appendChild(tarefaItem)
    })
  }

  // function editarTarefa(index) {}

  function excluirTarefa(index) {
    tarefas.splice(index, 1)
    exibirTarefas()
  }

})
