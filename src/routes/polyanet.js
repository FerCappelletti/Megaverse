const express = require('express');
const router = express.Router();
const polyanetConttroller = require('../controllers/poliyanet')
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

router.post('/', polyanetConttroller.createPolyanet);

router.delete('/', (req, res) => {
    //delete polyanet
})

module.exports = router