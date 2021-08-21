const express = require('express')
const router = express.Router() 
const gameController = require('../controllers/gameController')

router.get('/topgames', gameController.getTopGames)
router.get('/toprated', gameController.getTopRatedGames)
router.get('/bygenre/:genre', gameController.getByGenre)
router.get('/favorites', gameController.getFavorites)

module.exports = router