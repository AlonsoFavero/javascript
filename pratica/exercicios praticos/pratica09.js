let numeros = [2, 3, 4]

let mult = numeros.reduce( (total ,n) => {
    return total * n
}, 1)

console.log(mult)