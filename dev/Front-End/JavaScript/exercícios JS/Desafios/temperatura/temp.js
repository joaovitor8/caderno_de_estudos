let letra = "C"
let grau = 32

function converterGrau() {
    if (letra == "C") {  // De C para F
        let fah = grau * 9/5 + 32
        return fah
    }else if ( letra == "F") {  // De F para C
        let cel = (grau - 32) * 5/9
        return cel
    }else {
        "Letra invalida, por vafor digite novamente!"
    }
}
console.log(converterGrau())