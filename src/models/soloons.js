const {candidateId, apiUrl} = require('../config/index')
const { fetchData } = require('../uitils/fetchData');

class Soloons  {
    constructor(row, column, color){
        this.row = row,
        this.column = column
        this.color = color
    }
    async create() {
      let url = `${apiUrl}/soloons`;
        try {
      
          const data = { row: this.row, column: this.column, color: this.color, candidateId };
          const response = await fetchData("post", url, data);
          console.log('Created 🌙SOLoons' );
          return response.data
        } catch (error) {
          console.log(error)
          throw error;
        }
      }
}
module.exports ={ Soloons}