const baseLuz = document.getElementById("baseLuz")
const bolaLuz = document.getElementById("bolaLuz")
const btn = document.getElementById("btn")
let luzLigada = false

const Ligar = () => {
  baseLuz.style.backgroundColor = "yellow"
  bolaLuz.style.backgroundColor = "yellow"
  bolaLuz.style.boxShadow = "0px 20px 500px white"
  btn.innerText = "Desligar"
  luzLigada = true
}

const Desligar = () => {
  baseLuz.style.backgroundColor = "rgb(208, 204, 204)"
  bolaLuz.style.backgroundColor = "rgb(208, 204, 204)"
  bolaLuz.style.boxShadow = "none"
  btn.innerText = "Ligar"
  luzLigada = false
}


btn.addEventListener("click", () => {
  if (luzLigada) {
    Desligar()
  } else {
    Ligar()
  }
})
