let numeros = [5, 12, 8, 20, 3, 15]
let maior = numeros[0]
let maiores = []
let menores = []

for (let i = 0; i < numeros.length; i++){

if(numeros[i] > 10){
    maiores.push(numeros[i])
}

if(numeros[i] < 10){
    menores.push(numeros[i])
}
}


console.log(menores)
console.log(maiores)