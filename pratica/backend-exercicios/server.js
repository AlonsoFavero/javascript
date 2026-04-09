
const express = require("express")
const app = express()


let produtos = [
    {id: 1, nome: "teclado", preco: 100},
    {id: 2, nome: "mouse", preco: 50},
    {id: 3, nome: "monitor", preco: 800}
]

app.get("/",(req, res) => {
    res.send("servidor rodando")
})

app.get("/produtos", (req, res) =>{
    const min = Number (req.query.min)
    console.log("MIN:", min)

    if(!isNaN(min)){
      const filtrados = produtos.filter((produto) => {
       return res.json(filtrados)
       
      })
      
      
    }
    return res.json(produtos)
})

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})