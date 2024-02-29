const router = require('express').Router();
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./middleware/swagger-output.json')
const express = require('express')
const app = express()
const dotenv = require('dotenv'); 
const client = require('../src/db/db-connection.js')

dotenv.config();

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

const request = async () => {
    const query = {
        text: 'SELECT * FROM questionnaire.question',
    }
    const res = await client.query(query);

    for (const r of res.rows) {
        console.log(r)
    }
}

request()

app.listen(3000, () => {    
    console.log('Server is running on port http://localhost:3000/doc')
})