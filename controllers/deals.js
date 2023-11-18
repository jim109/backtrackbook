const { response } = require('express');

const { dealsExclusive } = require('../data/data')


const dealsGet = (req, res = response) => {
    res.json({
        dealsExclusive
    })
}

module.exports = {
     
    dealsGet
}