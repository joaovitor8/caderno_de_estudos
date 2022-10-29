
function transformandoNotas(nota){
    if (nota >= 90 && nota <= 100) {
        return nota = 'A'
    }else if (nota >= 80 && nota <= 89) {
        return nota = 'B'
    }else if (nota >= 70 && nota <= 79){
        return nota = 'C'
    }else if (nota >= 60 && nota <= 69){
        return nota = 'D'
    }else if (nota >= 0 && nota <= 59){
        return nota = 'F'
    }else {
        return nota = 'Nota invalida!'
    }
}

console.log(transformandoNotas(103))
console.log(transformandoNotas(94))
console.log(transformandoNotas(82))
console.log(transformandoNotas(78))
console.log(transformandoNotas(63))
console.log(transformandoNotas(55))
console.log(transformandoNotas(47))
console.log(transformandoNotas(-1))
