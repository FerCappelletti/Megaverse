const {fetchData} = require('../uitils/fetchData')
const baseUrl = require('../config/index').baseUrl

const createMegaverse = async (req, res) => {
   //promise 1: create polyanet
    const createPolyanet = await fetchData('post', `${baseUrl}/polyanet`)
   //promise 2 : create soloons
    const createSoloon = await fetchData('post', `${baseUrl}/soloons` )
   //promise 3: create cometh
   const createCometh = await fetchData('post', `${baseUrl}/comeths`)

   Promise.all([createPolyanet, createSoloon, createCometh])
    .then((response) => {
        console.log(response)
        res.send('Your megaverse is created!!!')
    })
    .catch((err) => {
        res.send({err})
    });
}


module.exports = {
    createMegaverse
}