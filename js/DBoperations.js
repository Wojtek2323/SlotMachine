const {Client}  = require('pg')
const express = require('express')
const cors = require('cors');


//obiekt postgreSQL


const clientConfig =  {
    
    user: "postgres",
    password: "1",
    host: "localhost",
    port: "4321",
    database: "postgres"

}

const createClient = () => {
    return new Client(clientConfig);
  };


//server nasluchuje
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });


  //endpoints


app.post('/connectionTest', async (req, res) => {
    try {
      const result = await connectionTest();
      res.json({ wynik: result });
    } catch (error) {
      res.status(500).json({ error: 'connection test failure' });
    }
  });



app.post('/getRoomsTable', async (req, res) => {
    try {
      const result = await connectionTest();
      res.json({ wynik: result });
    } catch (error) {
      res.status(500).json({ error: 'Cant Post RoomsTable' });
    }
  });

 app.post('/updateUserTokens', async (req, res) => {
    try {
      const result = await updateUserTokens();
      res.json({ wynik: result });
    } catch (error) {
      res.status(500).json({ error: 'Cant update User Tokens' });
    }
  });


// connection test function




function connectionTest()
{
    return new Promise((resolve, reject) =>{
        const client = createClient();

       client.connect()
        .then(() => resolve('Test Connection successfull. SQL server is responding'))
        .catch(e => resolve('Connection error: '+e.message))
        .finally(() => client.end())
         }
             )
 
    
}



//getRoomsTable funciton

function getRoomsTable()
{
    return new Promise((resolve, reject) =>{

        client.connect()
        .then(() => client.query('SELECT * FROM "Rooms"'))
        .then(results => resolve(results.rows))
        .catch(e => console.log(e))
        .finally(() => {
            
        //     resolve('Test Connection successfull. SQL server is responding');
             client.end()
         }
             )
 
            

    })
}

//updateUserTokens funciton

function updateUserTokens()
{
    return new Promise((resolve, reject) =>{

        const client = createClient();
        client.connect()
        .then(() => client.query('UPDATE "Rooms" SET "token_nr" = 800'))
        .then(results => resolve(results.rows))
        .catch(e => console.log(e))
        .finally(() => {
            
        //     resolve('Test Connection successfull. SQL server is responding');
             client.end()
             
         }
             ) 
 
            

    })
}