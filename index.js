require('dotenv').config();


const Server = require('./models/server');

const server = new Server();

server.listen();

// import pg from "pg";

// config()

    // app.get('/', (req, res) => {
    //     res.send('Hello World')
    // })
    

    
