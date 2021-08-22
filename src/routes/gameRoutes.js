const express = require('express')
const router = express.Router() 
const gameController = require('../controllers/gameController')

router.get('/topgames', gameController.getTopGames)
router.get('/toprated', gameController.getTopRatedGames)
router.get('/futurereleases', gameController.getFutureReleases)
router.get('/alphabet', gameController.getAlphabeticalGames)
router.get('/bygenre/:genre', gameController.getByGenre)


module.exports = router