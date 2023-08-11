const axios = require('axios')
const candidateId = require('../config/index').candidateId
const apiUrl = require('../config/index').apiUrl

const currentMap = async () => {
    const currentMap = await axios.get(`${apiUrl}/map/${candidateId}`)
    
    return currentMap.data.map
} 

module.exports = currentMap