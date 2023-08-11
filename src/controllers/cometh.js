const getGoalMap = require('../services/goalMap')
const currentMap = require('../services/currentMap')
const {Cometh} = require('../models/cometh')


const createCometh = async (req, res) => {
   // step1: get current map
    const current = await currentMap()
    // step2: get goal map
    const goalMap = await getGoalMap()

     //if both maps are different, means my megaverse is not created
     if(JSON.stringify(current.content) !== JSON.stringify(goalMap)){
        //function to find index on goalMap of POLYANET 
        for(let row=0; row < goalMap.length; row++){
            for(let column= 0; column < goalMap.length; column ++){
                let comethObject = goalMap[row][column]
                if(comethObject.includes("COMETH")){
                //provide a 'color' argument which can be "blue", "red", "purple" or "white"
                // with split() method search for the pattern with COMETH word, befor
                // '_' and 1 to only get what is before
                //toLowerCase() since api takes lowercase parameter

                let direction = comethObject.split("_", 1)[0].toLowerCase()
                //create a new coMeths with row, column and color as the goal map
                const newCometh = new Cometh(row, column, direction)
                await newCometh.create()
            }

            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
    res.send('Your coMETHs is created')
  } else {
    res.send('Your coMETHS exists')
  }
}


module.exports = {
    createCometh
}

