const router = require('express').Router();
const swaggerUi = require('swagger-ui-express')
const swaggerFile = require('./middleware/swagger-output.json')
const express = require('express')
const app = express()

app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(3000, () => {    
    console.log('Server is running on port http://localhost:3000/doc')
})