const router = require('express').Router();
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./middleware/swagger-output.json')
const express = require('express')
const app = express()
const dotenv = require('dotenv'); 
const client = require('../src/db/db-connection.js')
const questionRoute = require('../src/routes/questions.route.js')

dotenv.config();

app.use(express.json()); //format json
app.set('json spaces', 2);


app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))
app.use('/questions', questionRoute)


app.listen(8000, () => {    
    console.log('Server is running on port http://localhost:8000/doc')
})
module.exports = app;