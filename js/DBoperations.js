const {Client}  = require('pg')

const client =  new Client({
    
    user: "postgres",
    password: "1",
    host: "localhost",
    port: "4321",
    database: "postgres"

})

client.connect()
.then(() => console.log('connected'))
.then(() => client.query('SELECT * FROM "Rooms"'))
.then(results => console.table(results.rows))
.catch(e => console.log(e))
.finally(() => {
    
    console.log('ending connection');
    client.end()}
    )
