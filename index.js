require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res)=>{
    res.send(`<h1>Hey this is the Login Page.</h1>`)
})

app.get('/other', (req, res)=>{
    res.send("404 ERROR ohk this is the other page not the error page my boi")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

