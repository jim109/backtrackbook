const { Router } = require('express');

const { dealsGet, toursGet } = require('../controllers');

const router = Router();


    router.get('/deals', dealsGet)

    router.get('/tours', toursGet)




module.exports = router;