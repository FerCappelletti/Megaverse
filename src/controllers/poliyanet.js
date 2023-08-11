const getGoalMap = require('../services/goalMap')
const currentMap = require('../services/currentMap')
const {Polyanet} = require('../models/poliyanet')


const createPolyanet = async (req, res) => {
   // step1: get current map
    const current = await currentMap()
    // step2: get goal map
    const goalMap = await getGoalMap()

    //if both maps are different, means my megaverse is not created
    if(JSON.stringify(current.content) !== JSON.stringify(goalMap)){
        //function to find index on goalMap of POLYANET 
    for(let row=0; row < goalMap.length; row++){
        for(let column= 0; column < goalMap.length; column ++){
            if(goalMap[row][column] === "POLYANET"){
                
                // create a new Polyanet with row and column as the goal map
                const newPolyanet = new Polyanet(row, column)
                await newPolyanet.create()
            }

            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
    res.send('Your POLYanet is created')
  } else {
    res.send('Your POLYanet exists')
  }
}


module.exports = {
    createPolyanet
}