const express = require('express');
const router = express.Router();
const comethController = require('../controllers/cometh')
const polyanetServices = require('../services/polyanet')
//get your current map
router.get('/', async (req, res, next) => {
    try {
        const map = await polyanetServices.currentMap(req, res)
    return res.send({map})
    } catch (error) {
        next(error)
    }
    
});

router.post('/', comethController.createCometh);


module.exports = router