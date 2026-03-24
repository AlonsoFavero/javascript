function calculadora(num1 , num2 , operacao){

let resultado

if (operacao === "+"){
resultado = num1 + num2

}else if (operacao === "-"){
   resultado =  num1 - num2
   
}else if(operacao === "*"){
    resultado = num1 * num2
   
}else if (operacao === "/"){
    
 if(num2 === 0 ){
    return "erro: divisão por zero"
}
    resultado = num1 / num2
   
} else{
    return "operação invalida"
}
   return resultado
}

let resultado = calculadora(10, 5, "/")

console.log("resultado:", resultado)





