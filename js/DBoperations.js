const {Client}  = require('pg')
const express = require('express')
const cors = require('cors');


//server nasluchuje
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.post('/funcion', async (req, res) => {
    try {
      const result = await connectionTest();
      res.json({ wynik: result });
    } catch (error) {
      res.status(500).json({ error: 'Wystąpił błąd' });
    }
  });
  app.listen(port, () => {
    console.log(`Serwer nasłuchuje na porcie ${port}`);
  });

//obiekt postgreSQL
const client =  new Client({
    
    user: "postgres",
    password: "1",
    host: "localhost",
    port: "4321",
    database: "postgres"

})

function connectionTest()
{
    return new Promise((resolve, reject) =>{

        client.connect()
        .then(() => console.log('connected'))
        .then(() => client.query('SELECT * FROM "Rooms"'))
        .then(results => console.table(results.rows))
        .catch(e => console.log(e))
        .finally(() => {
            
            resolve('ending connection // TEST CONNECTION COMPLETED');
            client.end()
        }
            )
 
            

    })



}