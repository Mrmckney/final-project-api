const express = require('express')
const router = express.Router() 
const gameController = require('../controllers/createGame')

router.post('/addgame', gameController.createGame)

module.exports = router