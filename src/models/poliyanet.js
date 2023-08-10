const {candidateId, apiUrl} = require('../config/index')
const { fetchData } = require('../uitils/fetchData');

class Polyanet  {
    constructor(row, column, phase){
        this.row = row,
        this.column = column
    }
    async create() {
      let url = `${apiUrl}/polyanets`;
        try {
      
          const data = { row: this.row, column: this.column, candidateId };
          const response = await fetchData("post", url, data);
          console.log('Created 🪐POLYanet' );
          return response.data
        } catch (error) {
          console.log(error)
          throw error;
        }
      }
}
module.exports ={ Polyanet}