// definir classe
class Pessoa {
    constructor(nome) {
        this.id = ~~(Math.random() * 100000)
        this.nome = nome
    }

    dizerNome() {
        console.log(this.nome)
    }
}

// criar objeto
const pessoa = new Pessoa('João')
