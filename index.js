const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv/config')
const fetch = require('node-fetch')
const Game = require('./src/models/gameModel')


const app = express()
const router = express.Router()
app.use(cors())
app.use(express.json())
app.use("/", router)

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen('4000', () => {
      console.log('our app is listening on port 5000')
    })
  })
  .catch(err => alert(err))

const userRoute = require('./src/routes/userRoutes')
app.use(userRoute)

const gameRoute = require('./src/routes/gameRoutes')
app.use(gameRoute)




async function getGames(page) {
    const data = await fetch(`https://api.rawg.io/api/games?key=0c50be38d7484e3c83066695e70abfe8&page=${page}&page_size=40`)
    const gameResults = await data.json()
    const bulkGames = gameResults.results.map(game => {return game})
    return Game.insertMany(bulkGames)
}

// make sure to re-run
app.get('/game', (req, res) => {
  let pageNum = 0
  for(let i = 13980; i < 14000; i++){
    pageNum = i
    getGames(i)
  }
  res.send(`Got games ${pageNum}`)
})
