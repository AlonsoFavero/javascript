let numeros = [1, 2, 3]

let dobro = numeros.map(n => n*2)
let soma = dobro.reduce((total,n) => total + n,0)

console.log(dobro)
console.log(soma)
