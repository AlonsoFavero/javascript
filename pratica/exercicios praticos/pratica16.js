let numeros = [2, 3, 4, 5]

let pares = numeros.filter(n => n % 2 === 0)

let resultado = pares.reduce((total,n) =>{
    return total * n
}, 1 )

console.log(resultado)

/* let resultado = numeros 
.filter(n => n% 2 === 0)
.reduc((total,n) => total * n, 1)

console.log(resultado)*/
 
