let container = document.getElementById("container-notas")
let div = document.createElement("div")

function criarnota(){
let nota = document.createElement("div")
let texto = document.createElement("textarea")
let botao = document.createElement("button")
botao.innerText = "deletar"

nota.appendChild(texto)
nota.appendChild(botao)

container.appendChild(nota)

botao.addEventListener("click", function(){
  nota.remove()
})

}