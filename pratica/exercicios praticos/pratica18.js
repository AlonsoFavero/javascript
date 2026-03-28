/*let numeros = [1, 2, 3, 4]

let dobro = numeros.map(n => n*2)

console.log(dobro)*/

let produtos = [
    {nome: "teclado", preco: 100},
    {nome: "mouse", preco: 50}
]
let preco = produtos.map((item) => {
    return item.preco * 0.9
    
})

console.log(preco)

