// Exercicio 01:
// Crie uma função chamada somaArray que recebe um array de números e retorna a soma de todos os elementos.
function somaArray(array) {
  let soma = 0

  for (let i = 0; i < array.length; i++) {
    soma += array[i]
  }

  return soma
}


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


// Exercicio 04:
// Crie uma função chamada contarPropriedades que recebe um objeto e retorna o número de propriedades no objeto.
function contarPropriedades(objeto) {
  const propriedades = Object.keys(objeto)
  
  return propriedades.length
}


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


// Exercicio 06: 
// Crie uma função chamada encontrarPropriedade que recebe um objeto e uma chave e retorna o valor da propriedade correspondente
function encontrarPropriedade(objeto, chave) {
  if (chave in objeto) {
    return objeto[chave]
  }
}


// Exercicio 07:
// Crie uma função chamada delayedPromise que retorna uma promise que é resolvida após um atraso de 1 segundo.
function delayedPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => { resolve("Promessa resolvida após 1 segundo") }, 1000)
  })
}


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


// Exercicio 10:
// Crie uma função chamada executarAposTempo que recebe uma função e um tempo em milissegundos e a executa após o tempo especificado.
function executarAposTempo(funcao, tempoEmMilissegundos) {
  setTimeout(funcao, tempoEmMilissegundos)
}

function executarDepois() {
  console.log("Esta função foi executada após o tempo especificado.")
}


// Exercicio 11:
// Crie uma função chamada cancelarExecucao que recebe um identificador de timeout e o cancela.
function cancelarExecucao(identificadorTimeout) {
  clearTimeout(identificadorTimeout);
}

function execucaoCancelada() {
  console.log("Esta função não será executada.")
}


// Exercicio 12:
// Crie uma função chamada intervaloPersonalizado que executa uma função a cada intervalo de tempo especificado em milissegundos.
function intervaloPersonalizado(funcao, intervaloEmMilissegundos) {
  return setInterval(funcao, intervaloEmMilissegundos);
}

function execuatarDepois3s() {
  console.log("Esta função será executada a cada 3 segundos.")
}


// Exercicio 13:
//