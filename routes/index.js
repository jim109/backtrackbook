const { Router } = require('express');

const { dealsGet, toursGet, aboutsGet } = require('../controllers');

const router = Router();


    router.get('/deals', dealsGet)

    router.get('/tours', toursGet)

    router.get('/abouts', aboutsGet)



module.exports = router;