const express = require('express')
const router = express.Router() 
const userController = require('../controllers/userController')

router.get('/favorites', userController.getFavorites)

router.post('/signup', userController.createUser)
router.post('/login', userController.loginUser)

router.patch('/addfav', userController.addFavorite)


module.exports = router