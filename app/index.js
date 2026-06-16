const { Client } = require('pg')

const client = new Client({
  connectionString: process.env.DATABASE_URL
})

client.connect()
  .then(() => console.log('connected to database'))
  .catch(err => console.error('connection error', err))