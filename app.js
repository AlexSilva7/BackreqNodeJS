//importando o express
const express = require('express')

//criando um objeto express na variável app
const app = express()

//configurando a ejs
app.set('view engine','ejs')

//definindo o caminho da views wjs
app.set('views', './app/views')

//config de arquivos estáticos
app.use(express.static('./app/public'))

//const noticias = require('./mockup.js')
const dbconnection = require('./dbConnection')

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get('/', async (req,res)=> {
    //consulta SQL
    var result = await dbconnection.query('SELECT * FROM noticias order by id_noticia desc limit 3')
    res.render("home/index",{noticias:result.rows,title:'Home'})
})

app.get('/noticia', async (req,res) =>{
    var id = req.query.id
    let result = await dbconnection.query('SELECT *  from noticias where id_noticia= $1',[id])
    res.render('noticias/noticia',{noticia:result.rows[0], title:'noticia'})
})

app.get('/noticias', async (req,res)=>{
    var result = await dbconnection.query('SELECT * FROM  noticias order by id_noticia desc')
    res.render("noticias/noticias", {noticias:result.rows, title: 'noticias'})
})

app.get('/admin',(req,res) =>{
    res.render("admin/form_add_noticia", {title:'admin'})
})

app.post('/admin/salvar-noticia', async(req, res) =>{
    let {titulo, conteudo} = req.body

    result = await dbconnection.query('INSERT INTO noticias (titulo, conteudo) VALUES($1, $2)', 
    [titulo, conteudo],
    (err, result) => {
        res.redirect('/noticias')
        }
    )
})

app.listen(3000,()=>{
    console.log('Escutando na porta 3000')
    console.log('Pressione CRTL+C para encerrar o servidor')
})