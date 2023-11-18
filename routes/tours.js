const { Router } = require('express');

const { toursGet } = require('../controllers/tours');

const router = Router();

    router.get('/', toursGet)


module.exports = router;