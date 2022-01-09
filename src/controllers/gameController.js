const Game = require('../models/gameModel')

exports.getTopGames = (req, res) => {
    Game.find().sort({}).limit(100).exec()
    .then(games => res.send(games))
    .catch(err => res.send({
        message: err.message,
        status: 500
    }))
}


exports.getTopRatedGames = (req, res) => {
    Game.find().sort({rating: -1}).limit(100).exec()
    .then(games => res.send(games))
    .catch(err => res.send({
        message: err.message,
        status: 500
    }))
}


exports.getFutureReleases = (req, res) => {
    Game.find().sort({releaseDate: -1}).limit(100).exec()
    .then(games => res.send(games))
    .catch(err => res.send({
        message: err.message,
        status: 500
    }))
}

exports.getAlphabeticalGames = (req, res) => {
    Game.find().sort({genres: -1}).skip(4).limit(100).exec()
    .then(games => res.send(games))
    .catch(err => res.send({
        message: err.message,
        status: 500
    }))
}


exports.getByGenre = (req, res) => {
    Game.find({ genres: req.params.genre}).limit(100).exec()
    .then(games => res.send(games))
    .catch(err => res.send({
        message: err.message,
        status: 500
    }))
}

exports.getPlatformGames = (req, res) => {
    Game.find().sort({platform: -1}).limit(100).exec()
    .then(games => res.send(games))
    .catch(err => res.send({
        message: err.message,
        status: 500
    }))
}


exports.getByPlatform = (req, res) => {
    Game.find({ platforms: req.params.platform}).limit(100).exec()
    .then(games => res.send(games))
    .catch(err => res.send({
        message: err.message,
        status: 500
    }))
}

exports.getSearchResults = (req, res) => {
    Game.aggregate([
        {
          "$search": {
            "index": 'search',
            "text": {
              "query": `${req.query.query}`,
              "path": {
                'wildcard': '*'
              }
            }
          }
        }
      ]).limit(100).exec()
    .then(games => res.send(games))
    .catch(err => res.send({
        message: err.message,
        status: 500
    }))
}

exports.getBySearch = (req, res) => {
    Game.find().sort({slug: -1}).limit(100).exec()
    .then(games => res.send(games))
    .catch(err => res.send({
        message: err.message,
        status: 500
    }))
}

exports.getTag = (req, res) => {
    Game.find().sort({tag: 1}).skip(100).limit(100).exec()
    .then(games => res.send(games))
    .catch(err => res.send({
        message: err.message,
        status: 500
    }))
}

exports.getByTag = (req, res) => {
    Game.find({ tags: req.params.tag}).limit(100).exec()
    .then(games => res.send(games))
    .catch(err => res.send({
        message: err.message,
        status: 500
    }))
}


exports.getRawgId = (req, res) => {
    Game.find().sort({releaseDate: 1}).skip(9813).limit(20).exec()
    .then(games => res.send(games))
    .catch(err => res.send({
        message: err.message,
        status: 500
    }))
}