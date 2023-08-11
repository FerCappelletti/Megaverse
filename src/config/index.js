require("dotenv").config();


//Make this global to use all over the application
let CONFIG = {
    port: process.env.PORT || '3000',
    candidateId: process.env.CANDIDATE_ID,
    baseUrl: process.env.BASE_URL,
    apiUrl: process.env.API_URL
} 

module.exports = CONFIG;