const axios = require('axios')
const candidateId = require('../config/index').candidateId
const apiUrl = require('../config/index').apiUrl

const currentMap = async (req, res) => {
    const currentMap = await axios.get(`${apiUrl}/map/${candidateId}`)
    
    return currentMap.data.map
} 


const getGoalMap = async () => {
    const goalMap = await axios.get(`${apiUrl}/map/${candidateId}/goal`)
    
    return goalMap.data.goal
} 

module.exports = {currentMap,getGoalMap}

