
const{ Pool } = require('pg')

const cliente = new Pool({
    connectionString: 'postgres://dpegctbpjjjlkn:9695b32527056390e7808db1a1490260bf89eeb8dc2bb1a66e89ea75a31a55e2@ec2-34-233-105-94.compute-1.amazonaws.com:5432/diqqu48hjq0ev',
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
