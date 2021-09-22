
const{ Pool } = require('pg')

const cliente = new Pool({
    connectionString: 'postgres://muprdwnmylnzua:50f952bfa6f300e364bc6d471d890c5e6527b581ab8224d603c39f0911fa29f4@ec2-34-233-105-94.compute-1.amazonaws.com:5432/d9cdpvdi13op2m',
    ssl:{
        rejectUnauthorized: false
    }
})

/*
//Teste de conexão
async function conectTeste(){
    const res = cliente.query(
        'SELECT $1:: text AS MESSAGE',
        ['Ola Mundo'], 
        (err, result) => {
            console.log(result.rows[0].message)
        }
    )
}
conectTeste()
*/

module.exports = cliente
