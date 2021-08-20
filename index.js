const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
require('dotenv/config')
// const fetch = require('node-fetch')


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
    app.listen('5000', () => {
      console.log('our app is listening on port 5000')
    })
  })
  .catch(err => alert(err))

const userRoute = require('./src/routes/userRoutes')
app.use(userRoute)

const gameRoute = require('./src/routes/gameRoutes')
app.use(gameRoute)





// function getGames(page) {
//   fetch(`https://api.rawg.io/api/games?key=${APIKEY}&page=${page}`)
//         .then(response => response.json())
//         .then(gameResults => {
//           const bulkGames = gameResults.results.map(game => {
//             return {
//                 slug: game.slug,
//                 rawgid: game.id,
//                 name: game.name,
//                 poster: game.background_image,
//                 rating: game.rating,
//                 releaseDate: game.released,
//                 genres: game.genres.map(g => g.name),
//                 platforms: game.platforms.map(g => g.platform.name)
//               }
//             })
//           Game.insertMany(bulkGames)
//         })
//         .catch(err => console.log(err))
// }

// app.get('/game', (req, res) => {
//     for(let i=0; i < 11300; i++){
//       getGames(i)
//     }
//     res.send('OK')
// })
