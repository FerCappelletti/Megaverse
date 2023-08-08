require("dotenv").config();


//Make this global to use all over the application
let CONFIG = {
    port: process.env.PORT || '3000',
    candidateID: process.env.CANDIDATE_ID,
    url: process.env.BASE_URL
} 

module.exports = CONFIG;