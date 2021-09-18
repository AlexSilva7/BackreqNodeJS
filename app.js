
//importando o express
const express = require('express')

//criando um objeto express na variavel app
const app = express()
app.set('view enginer', 'ejs')

app.get('/',(req, res) => {
    res.send("Olá mundo")
})

app.get('/noticias',(req, res) => {
    res.send("Todas as noticias atuais")
})

app.listen(3000, () =>{
    console.log('Escutando na porta 3000')
    console.log('Pressione CTRL + C para encerrar')
})