const axios = require('axios')
const candidateId = require('../config/index').candidateID
const url = require('../config/index').url

const getGoalMap = async () => {
    const goalMap = await axios.get(`${url}/map/${candidateId}/goal`)
    console.log(goalMap.data.goal)
    return goalMap.data.goal
} 

module.exports = getGoalMap


