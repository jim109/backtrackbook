const { Router } = require('express');

const { dealsGet } = require('../controllers/deals');

const router = Router();


    router.get('/', dealsGet)



module.exports = router;