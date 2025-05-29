require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Akhil69')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please login First</h2>')
})

app.get('/youtube', (req, res) => {
    res.send('<h2>Basic Concept</h2>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})

