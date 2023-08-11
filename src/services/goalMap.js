const axios = require('axios')
const candidateId = require('../config/index').candidateId
const apiUrl = require('../config/index').apiUrl

const getGoalMap = async () => {
    const goalMap = await axios.get(`${apiUrl}/map/${candidateId}/goal`)
    
    return goalMap.data.goal
} 

module.exports = getGoalMap


