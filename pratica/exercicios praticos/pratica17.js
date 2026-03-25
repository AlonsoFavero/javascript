let tarefas = [
    {nome: "estudar js", concluida: false},
    {nome: "treinar", concluida: true},
    {nome: "ler livros", concluida: false},
    {nome: "fazer projetos", concluida: true}
]

let pendentes = tarefas.filter(t => t.concluida ===  false)

let nomes = pendentes.map(t => t.nome)

let concluidas = tarefas.reduce((total,t) =>{
    if(t.concluida){
    return total  +1
    }
    return total
}, 0)

console.log(pendentes)
console.log(nomes)
console.log(concluidas)