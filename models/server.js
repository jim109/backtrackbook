const express = require('express')
const cors = require('cors')

class Server {

    constructor() {
        this.app = express()
        this.port = process.env.PORT
        this.tourPath = '/api/tours'
        this.dealsPath = '/api/deals'

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

    }

    routes() {
        this.app.use(this.tourPath, require('../routes/tours'))
        this.app.use(this.dealsPath, require('../routes/deals'))
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port);
        })
}
}

module.exports = Server;