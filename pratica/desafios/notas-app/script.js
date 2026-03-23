let container = document.getElementById("container-notas")

let notas = []


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

texto.addEventListener("input", function(){
   
notas = []

let todostextos = document.querySelectorAll("textarea")

todostextos.forEach(function(item){
    notas.push(item.value)
})

    console.log(notas)

    //garante o salvameto ds notas
    localStorage.setItem("notas", JSON.stringify(notas))

})
}

//carregar ao abrir
let dados = JSON.parse(localStorage.getItem("notas"))

 if(dados){
        dados.forEach(function(item){

            criarnota()

            let textareas = document.querySelectorAll("textarea")
            textareas[textareas.length - 1].value = item
        })
    }

