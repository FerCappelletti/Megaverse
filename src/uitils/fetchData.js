const axios = require('axios')

const fetchData = async (method, url, data) => {
    try {
        const response = await axios[method](url, data,{
            headers: {
              'Content-Type': 'application/json'
            }
          });
        return response;
    } catch (error) {
        console.error(`API call failed at ${url}:`, error);
        throw error;
    }
}

module.exports = {fetchData}