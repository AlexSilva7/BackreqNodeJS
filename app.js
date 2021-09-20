
/*
npm install express
npm install ejs
--npm install -g nodemon
*/

//Importando o express
const express = require('express')

//Criando um objeto express na variavel app
const app = express()
app.set('view engine', 'ejs')

const noticias = require('./mockup.js')

//Criando nossa primeira rota
app.get('/',(req, res) => {
    res.render("home/index", {noticias:noticias.slice(0,3), title:'Home'})
})

//Criando nossa segunda rota
app.get('/noticias',(req, res) => {
    res.send("Todas as noticias atuais")
})

//Iniciando o servidor na porta 3000
app.listen(3000, () =>{
    console.log('Escutando na porta 3000 com Express')
    console.log('Pressione CTRL + C para encerrar o servidor')
})