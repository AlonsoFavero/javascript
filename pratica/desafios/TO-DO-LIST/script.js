let input = document.getElementById("inputtarefa")
let lista = document.getElementById("lista")
let li = document.getElementById("li")

let tarefas = []

function adicionar(){

    let texto = input.value
//validação
    if (texto === ""){
    alert("digite algo")
    return
}
//salvar no array
tarefas.push(texto)

//salvar no localstroage
localStorage.setItem("tarefas", JSON.stringify(tarefas))
//criar botao

let botao = document.createElement("button")
botao.innerText="x"
//criar li
let li = document.createElement("li")
    li.innerText = texto

    //botao remove
    botao.onclick = function(){
        li.remove()
    }

    //colocar botao dentro da li 
    li.appendChild(botao)
    
//adicionar na lista
     li.appendChild(botao)
    lista.appendChild(li)
//limpar iput
    input.value = ""
}
