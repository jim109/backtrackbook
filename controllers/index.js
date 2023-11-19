const { response } = require('express');

//--CONEXION BD
const pg = require('pg')
require('dotenv').config();


const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: true
})

// ------------------

const dealsGet = async(req, res=response) => {
    try {
        const result = await pool.query(`
            SELECT CIUDAD.nombre_ciudad, PAIS.nombre_pais, TOUR.img_tour, TOUR.calificacion, TOUR.precio, DEALS.precio_discount 
            FROM CIUDAD JOIN PAIS ON CIUDAD.PAISID = PAIS.PAISID
            JOIN TOUR ON CIUDAD.CIUDADID = TOUR.CIUDADID
            JOIN DEALS ON TOUR.TOURID = DEALS.TOURID;
            `)
        return res.status(200).json({
            result: result.rows
        })
    } catch (error) {
        console.error('Error en la consulta:', error);
        return res.status(500).json({
            error: 'Error en el servidor'
        });
    }
}




const toursGet = async(req, res = response) => {
    try {
        const result = await pool.query(`
            SELECT CIUDAD.nombre_ciudad, PAIS.nombre_pais, TOUR.img_tour, TOUR.calificacion, TOUR.tour_days, TOUR.precio
            FROM CIUDAD
            JOIN PAIS ON CIUDAD.PAISID = PAIS.PAISID
            JOIN TOUR ON CIUDAD.CIUDADID = TOUR.CIUDADID;
            `)
        return res.status(200).json({
            result: result.rows
        })
    } catch (error) {
        console.error('Error en la consulta:', error);
        return res.status(500).json({
            error: 'Error en el servidor'
        });
    }
}

module.exports = {
    dealsGet,
    toursGet
}