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
  res.send('app is running and connected to database')
})

app.listen(3000, () => console.log('App running on port 3000'))