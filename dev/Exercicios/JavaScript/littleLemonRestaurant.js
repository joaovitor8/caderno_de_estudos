const comidas = [
  {
      nome: 'Massa italiana',
      preco: 9.55,
  },

  {
      nome: 'Arroz com legumes',
      preco: 8.65,
  },

  {
      nome: 'Frango com batatas',
      preco: 15.55,
  },

  {
      nome: 'Pizza Vegetariana',
      preco: 6.46,
  },
]

let precoComida01 = (comidas[0].preco * 20 / 100) + comidas[0].preco
let precoComida02 = (comidas[1].preco * 20 / 100) + comidas[1].preco
let precoComida03 = (comidas[2].preco * 20 / 100) + comidas[2].preco
let precoComida04 = (comidas[3].preco * 20 / 100) + comidas[3].preco

let n = Math.floor(Math.random() * 2)

const Pratos = () => {
  if(n == 0) {
      console.log('Preços sem impostos:')
      console.log(`Prato: ${comidas[0].nome} - Preço: ${comidas[0].preco}`)
      console.log(`Prato: ${comidas[1].nome} - Preço: ${comidas[1].preco}`)
      console.log(`Prato: ${comidas[2].nome} - Preço: ${comidas[2].preco}`)
      console.log(`Prato: ${comidas[3].nome} - Preço: ${comidas[3].preco}`)
  }else if(n == 1) {
      console.log('Preços com 20% de imposto:')
      console.log(`Prato: ${comidas[0].nome} - Preço: ${precoComida01}`)
      console.log(`Prato: ${comidas[1].nome} - Preço: ${precoComida02}`)
      console.log(`Prato: ${comidas[2].nome} - Preço: ${precoComida03}`)
      console.log(`Prato: ${comidas[3].nome} - Preço: ${precoComida04}`)
  }
}

console.log(Pratos())
