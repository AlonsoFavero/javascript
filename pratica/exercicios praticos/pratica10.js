let numeros = [2, 3, 4]

//dobra os  numeros
let dobro = numeros.map(n => n * 2)

//multiplicar tudo
let resultado = dobro.reduce((total,n) => total*n, 1)

console.log(dobro)
console.log(resultado)