let numeros = [10, 20, 30]

let soma = numeros.reduce((total, n) => {
    return total + n
}, 0 )

console.log(soma)

//let soma = numeros.reduce((total,n) => total + n,0)