const { response } = require('express');

const {  bestVacations } = require('../data/data')

const toursGet = (req, res = response) => {
    res.json({
        bestVacations
    })
}

module.exports = {
    toursGet
}

// import pg from "pg";

// config()

// const pool = new pg.Pool({
//     connectionString: process.env.DATABASE_URL_EXTERNAL,
//     ssl: true
// })
    // app.get('/', (req, res) => {
    //     res.send('Hello World')
    // })
    
    // app.get('/ping', async(req, res) => {
    //     const result = await pool.query('SELECT NOW()')
    //     return res.json(result.rows[0])
    // })
    
    // app.get('/generic', (req, res) => {
    //     return res.json( {
    //         nombre: 'Jimmy Osma',
    //         titulo: 'Curso de Node'
    //     })
    // })