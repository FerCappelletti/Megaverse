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

const getIndex = (arr, value) => {
    const indexes = []
    for(let row=0; row < arr.length; row++){
        for(let column= 0; column < arr.length; column ++){
            if(arr[row][column] === value){
                indexes.push({row: row, column:column})
            }
        }
    }
        return Object.values(indexes) 
}
module.exports = {currentMap,getGoalMap, getIndex}

