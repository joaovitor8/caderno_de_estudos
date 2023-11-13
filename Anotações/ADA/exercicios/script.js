// Exercicio 01:
// Crie uma função chamada somaArray que recebe um array de números e retorna a soma de todos os elementos.
function somaArray(array) {
  let soma = 0

  for (let i = 0; i < array.length; i++) {
    soma += array[i]
  }

  return soma
}

// ----------------------------------------------

// Exercicio 02:
// Crie uma função chamada maiorNumero que recebe um array de números e retorna o maior número.
function maiorNumero(array) {
  let maior = array[0]

  for (let i = 1; i < array.length; i++) {
    if (array[i] > maior) {
      maior = array[i]
    }
  }

  return maior
}

// ----------------------------------------------

// Exercicio 03:
// Crie uma função chamada mediaArray que recebe um array de números e retorna a média dos valores.
function mediaArray(array) {
  let soma = 0

  for (let i = 0; i < array.length; i++) {
    soma += array[i]
  }

  const media = soma / array.length

  return media
}

// ----------------------------------------------

// Exercicio 04:
// Crie uma função chamada contarPropriedades que recebe um objeto e retorna o número de propriedades no objeto.
function contarPropriedades(objeto) {
  const propriedades = Object.keys(objeto)
  
  return propriedades.length
}

// ----------------------------------------------

//Exercicio 05:
// Crie uma função chamada juntarObjetos que recebe dois objetos e retorna um novo objeto que combina as propriedades de ambos.
function juntarObjetos(objeto1, objeto2) {
  const resultado = {}

  for (let chave in objeto1) {
    resultado[chave] = objeto1[chave]
  }

  for (let chave in objeto2) {
    resultado[chave] = objeto2[chave]
  }

  return resultado
}

// ----------------------------------------------

// Exercicio 06: 
// Crie uma função chamada encontrarPropriedade que recebe um objeto e uma chave e retorna o valor da propriedade correspondente
function encontrarPropriedade(objeto, chave) {
  if (chave in objeto) {
    return objeto[chave]
  }
}

// ----------------------------------------------

// Exercicio 07:
// Crie uma função chamada delayedPromise que retorna uma promise que é resolvida após um atraso de 1 segundo.
function delayedPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve("Promessa resolvida após 1 segundo") }, 1000)
  })
}

// ----------------------------------------------

// Exercicio 08:
// Crie uma função chamada fetchData que faz uma solicitação HTTP usando fetch e retorna uma promise com os dados obtidos.
function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          reject(`Erro na solicitação: ${response.status}`)
        }
        return response.json()
      })
      .then(data => { resolve(data) })
      .catch(error => { reject(`Erro na solicitação: ${error.message}`) })
  })
}

// ----------------------------------------------

// Exercicio 09:
// Crie uma função chamada gerarNumeroAleatorio que retorna uma promise com um número aleatório após um atraso de 2 segundos.
function gerarNumeroAleatorio() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const numeroAleatorio = Math.random()
      resolve(numeroAleatorio)
    }, 2000)
  })
}

// ----------------------------------------------

// Exercicio 10:
// Crie uma função chamada executarAposTempo que recebe uma função e um tempo em milissegundos e a executa após o tempo especificado.
function executarAposTempo(funcao, tempoEmMilissegundos) {
  setTimeout(funcao, tempoEmMilissegundos)
}

function executarDepois() {
  console.log("Esta função foi executada após o tempo especificado.")
}

// ----------------------------------------------

// Exercicio 11:
// Crie uma função chamada cancelarExecucao que recebe um identificador de timeout e o cancela.
function cancelarExecucao(identificadorTimeout) {
  clearTimeout(identificadorTimeout)
}

function execucaoCancelada() {
  console.log("Esta função não será executada.")
}

// ----------------------------------------------

// Exercicio 12:
// Crie uma função chamada intervaloPersonalizado que executa uma função a cada intervalo de tempo especificado em milissegundos.
function intervaloPersonalizado(funcao, intervaloEmMilissegundos) {
  return setInterval(funcao, intervaloEmMilissegundos)
}

function execuatarDepois3s() {
  console.log("Esta função será executada a cada 3 segundos.")
}

// ----------------------------------------------

// Exercicio 13:
// Crie uma função chamada contadorInterval que inicia um contador de 1 a 10 a cada segundo e exibe o valor no console.
function contadorInterval() {
  let contador = 1

  const intervalo = setInterval(() => {
    if(contador === 10){
      clearInterval(intervalo)
    }
    console.log(contador)

    contador++
  }, 1000)
}

// ----------------------------------------------

// Exercicio 14:
// Crie uma função chamada pararContador que interrompe o contador iniciado na função anterior.
let intervalo

function contadorInterval2() {
  let contador = 1

  intervalo = setInterval(() => {
    console.log(contador)

    contador++;
  }, 1000)
}

function pararContador() {
  clearInterval(intervalo)
}

// ----------------------------------------------

// Exercicio 15:
// Crie uma função chamada gerarNumerosAleatorios que gera números aleatórios a cada 500 milissegundos e os exibe no console.
function gerarNumerosAleatorios() {
  setInterval(() => {
    const numeroAleatorio = Math.random()
    console.log(numeroAleatorio)
  }, 500)
}

// ----------------------------------------------

// Exercicio 16:
// Crie uma função chamada primeiroEUltimo que recebe um array com pelo menos dois elementos e retorna um novo array contendo apenas o primeiro e o último elementos do array original.
function primeiroEUltimo(array) {
  if (array.length < 2) {
    throw new Error("O array deve conter pelo menos dois elementos.")
  }

  const primeiro = array[0]
  const ultimo = array[array.length - 1]

  return [primeiro, ultimo]
}

// ----------------------------------------------

// Exercicio 17:
// Crie uma função chamada extrairInfo que recebe um array de objetos, onde cada objeto contém as propriedades nome e idade. A função deve retornar um novo array contendo apenas as idades dos objetos.
function extrairInfo(arrayDeObjetos) {
  const idades = arrayDeObjetos.map(objeto => objeto.idade)
  return idades
}

// ----------------------------------------------

// Exercicio 18:
// Crie uma função chamada separarArrays que recebe um array contendo números e o desestrutura em dois arrays: um contendo os números pares e outro contendo os números ímpares.
function separarArrays(array) {
  const numerosPares = array.filter(numero => numero % 2 === 0)
  const numerosImpares = array.filter(numero => numero % 2 !== 0)
  
  return [numerosPares, numerosImpares]
}

// ----------------------------------------------

// Exercicio 19:
// Crie uma função chamada infoPessoa que recebe um objeto com as propriedades nome, idade e cidade. A função deve retornar uma string formatada, como "Nome: [nome], Idade: [idade], Cidade: [cidade]".
function infoPessoa(pessoa) {
  const { nome, idade, cidade } = pessoa
  return `Nome: ${nome}, Idade: ${idade}, Cidade: ${cidade}`
}

// ----------------------------------------------

// Exercicio 20:
// Crie uma função chamada desestruturarUsuario que recebe um objeto com as propriedades id, nome e email e retorna um novo objeto contendo apenas as propriedades id e email.
function desestruturarUsuario(usuario) {
  const { id, email } = usuario
  return { id, email }
}

// ----------------------------------------------

// Exercicio 21:
// Crie uma função chamada informacoesLivro que recebe um objeto representando as informações de um livro com as propriedades titulo, autor e ano. A função deve desestruturar o objeto para extrair essas informações e retorná-las em uma string formatada como "O livro [titulo] foi escrito por [autor] em [ano]".
function informacoesLivro(livro) {
  const { titulo, autor, ano } = livro
  return `O livro ${titulo} foi escrito por ${autor} em ${ano}.`
}

// ----------------------------------------------

// Exercicio 22:
// Crie uma função chamada concatenarArrays que recebe dois ou mais arrays e os concatena em um único array usando o operador de spread.
function concatenarArrays(...arrays) {
  return [...arrays].reduce((resultado, array) => [...resultado, ...array], [])
}

// ----------------------------------------------

// Exercicio 23:
// Crie uma função chamada somaNumeros que aceita um número variável de argumentos. A função deve calcular a soma de todos os números passados como argumentos e retornar o resultado.
function somaNumeros() {
  let soma = 0

  for (let i = 0; i < arguments.length; i++) {
    soma += arguments[i]
  }

  return soma
}

// ----------------------------------------------

// Exercicio 24:
// Crie uma função chamada mesclarObjetos que aceita dois ou mais objetos como argumentos. A função deve mesclar esses objetos em um único objeto usando o operador spread e retornar o objeto resultante. Em caso de conflito de propriedades, a última propriedade encontrada deve prevalecer.
function mesclarObjetos(...objetos) {
  return objetos.reduce((resultado, objeto) => ({ ...resultado, ...objeto }), {})
}

