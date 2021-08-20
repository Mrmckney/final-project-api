const Game = require('../models/gameModel')

exports.getTopGames = (req, res) => {
    Game.find().sort({}).limit(20).exec()
    .then(games => res.send(games))
    .catch(err => res.send({
        message: err.message,
        status: 500
    }))
}


exports.getTopRatedGames = (req, res) => {
    Game.find().sort({rating: -1}).limit(20).exec()
    .then(games => res.send(games))
    .catch(err => res.send({
        message: err.message,
        status: 500
    }))
}


exports.getByGenre = (req, res) => {

}


exports.getFavorites = (req, res) => {
    
}
