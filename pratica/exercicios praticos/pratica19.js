function listar(min, max , nome){
   const produtos = [
  { nome: "Mouse", preco: 50 },
  { nome: "Teclado", preco: 150 },
  { nome: "Monitor", preco: 900 },
  { nome: "Mouse Gamer", preco: 120 }
]

const minNum = Number(min)
const maxNum = Number(max)
let resultado = produtos

if (!isNaN(minNum)){
 resultado = resultado.filter(p => p.preco >= minNum)
}
if(!isNaN(maxNum)){
  resultado = resultado.filter(p => p.preco <= maxNum)
}
return resultado
}