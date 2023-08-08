const express = require('express');
const apiRouter = require('./app');
const cors = require('cors')
const {errorLogs, handlerError} = require('./middlewares/error_handler')
const app = express();
const port = require('./config/index').port
const getMap = require('./services/goalMap')

app.use(cors())
app.use(express.json())

app.get('/',getMap)

apiRouter(app)


app.use(errorLogs)
app.use(handlerError)

app.listen(port, (req, res)=>{
  console.log(`Listening on port ${port}`)
})