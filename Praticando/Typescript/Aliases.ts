//Já o alias cria um novo tipo mais complexo que os tipos primitivos em si, que pode ser um tipo novo ou a junção de varios
//EX:  type nomeTipo = number | string | undefined | ...


//Estou criando o tipo Id e colocando em todos os parametros de função
type Id = number | string | undefined

function AliasTeste01(id: Id, item: string) {
  console.log(`O ${item} tem id ${id}.`)
}

function AliasTeste02(id: Id, user: string) {
  console.log(`O ${user} tem id ${id}.`)
}


//Criando tipos
type Platform = 'Windows' | 'Linux' | 'Mac Os'

function renderPlataform(platf: Platform) {
  return platf
}



renderPlataform('Linux')

AliasTeste01(08, 'caneta')
AliasTeste01('08', 'caneta')

AliasTeste02(09, 'caderno')
AliasTeste02('09', 'caderno')