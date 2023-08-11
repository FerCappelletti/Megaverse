const {candidateId, apiUrl} = require('../config/index')
const { fetchData } = require('../uitils/fetchData');

class Cometh  {
    constructor(row, column, direction){
        this.row = row,
        this.column = column,
        this.direction = direction
    }
    async create() {
      let url = `${apiUrl}/comeths`;
        try {
      
          const data = { row: this.row, column: this.column, direction: this.direction,candidateId };
          const response = await fetchData("post", url, data);
          console.log('Created ☄comETHs' );
          return response.data
        } catch (error) {
          console.log(error)
          throw error;
        }
      }
}
module.exports ={ Cometh}