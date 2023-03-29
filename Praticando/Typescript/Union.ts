//Union é quando você coloca dois ou mais de um tipo na variáveis, parâmetros de função ou retornos de função


//Na função abaixo o parametro  id  pode ser  number ou string  e o  item  só pode ser string
function UnionTeste(id: number | string, item: string) {
  console.log(`O ${item} tem id ${id}.`)
}

UnionTeste(08, 'caneta')
UnionTeste('08', 'caneta')
