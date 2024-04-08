const { Client } = require('pg')
const dotenv = require('dotenv')

dotenv.config()


const client = new Client(process.env.DATABASE_URL)

client.connect()
console.log("Connecté")

module.exports = client;