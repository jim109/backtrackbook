const express = require('express')
const cors = require('cors')
const morgan = require('morgan')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.api = '/api'
       

        //Middlewares
        this.middlewares()

        //Routes
        this.routes()
    }

    middlewares() {
        //CORS
        this.app.use(cors())

        //Lectura y parseo del body
        this.app.use(express.json())

        //Directorio publico
        this.app.use(express.static('public'))

        //loggin
        this.app.use(morgan('dev'))

    }

    routes() {
        this.app.use(this.api, require('../routes'))
        // this.app.use(this.api, require('../routes'))
        
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        })
}
}

module.exports = Server;