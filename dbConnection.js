
const{ Pool } = require('pg')

const cliente = new Pool({
    connectionString: '',
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
