let numeros = [10 , 20 , 30, 40]
let soma = 0
let maior = numeros[0]
let menor = numeros[0]

for (let i = 0; i < numeros. length; i++){
  console.log(numeros[i])
  soma = soma + numeros[i]
}

for (let i = 0; i < numeros.length; i++){
    if(numeros[i] > maior){
        maior = numeros[i]
    } 
    if(numeros[i] < menor) {
        menor = numeor[i]
    }
}

console.log("menor numero:", menor)
console.log("maior numero:", maior)
console.log("soma total:", soma)
console.log("numeros", numeros)