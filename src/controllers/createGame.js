const Game = require('../models/gameModel')

exports.createGame = (req, res) => {
    new Game(req.body)
    .save()
    .then(() => res.status(200).send('Created game'))
    .catch(err => console.error('Could not create game', err))
}