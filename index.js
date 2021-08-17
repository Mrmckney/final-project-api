const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const fetch = require('node-fetch')
require('dotenv/config')
const { APIKEY } = require('./config')

const app = express()
app.use(cors())
app.use(express.json())

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen('5000', () => {
      console.log('our app is listening on port 5000')
    })
  })
  .catch(err => alert(err))

//   app.get('/import/game', setGames)

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/game', (req, res) => {
    res.send(
        fetch(`https://api.rawg.io/api/games?key=${APIKEY}`)
        .then(response => response.json())
        .then(json => console.log())
    
        .catch(err => alert(err))
    )
})