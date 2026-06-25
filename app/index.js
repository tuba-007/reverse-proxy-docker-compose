const { Client } = require('pg')
const express = require('express')

const app = express()
const client = new Client({
  connectionString: process.env.DATABASE_URL
})

client.connect()
  .then(() => console.log('connected to database'))
  .catch(err => console.error('connection error', err))

app.get('/', (req, res) => {
  res.json({
    message: 'app is running',
    pod: process.env.HOSTNAME,
    timestamp: new Date().toISOString()
  })
})

app.listen(3000, () => console.log('App running on port 3000'))