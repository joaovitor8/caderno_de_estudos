//Aliases
type AccountInfo = {
  id: number,
  name: string,
  email?: string,
}

const account: AccountInfo = {
  id: 888,
  name: 'Joao'
}

type CharInfo = {
  nickName: string,
  level: number,
}

const char: CharInfo = {
  nickName: 'Jonnes',
  level: 500
}


//-----------------------------------------------------------------------------


//Intersection
type PlayerInfo = AccountInfo & CharInfo

const player: PlayerInfo = {
  id: 123,
  name:'Vitor',
  nickName: 'Bonnes',
  level: 100
}
