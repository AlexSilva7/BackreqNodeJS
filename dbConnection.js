

const{ Pool } = require('pg')

const cliente = new Pool({
    connectionString: 'postgres://rdebyiaopwjgpk:b219780e5e3d4a114cf96e10757e7bef17578ba5f6e2c0a30a537e0e5e556508@ec2-18-214-238-28.compute-1.amazonaws.com:5432/d24gct5jaeghc4'
})

