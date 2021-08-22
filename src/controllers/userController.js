const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const {secret} = require('../../secrets')

exports.createUser = (req, res) => {
    new User(req.body)
    .save()
    .then(user => {
        const token = jwt.sign({user}, secret)
        res.send({
            message: "User created successfully",
            status: 200,
            user,
            token
        })
    })
    .catch(err => res.status(500).send({
        message: err.message,
        status: 500
    }))
}

exports.loginUser = (req, res ) => {
    User.findOne({ username: req.body.username })
    .then(user => {
        if (!user || user.password !== req.body.password) {
            return res.send({
                message: 'Login Attempt Failed',
                status: 401
            })
        }
        if (user && user.password === req.body.password) {
            let responseData = user
            responseData.password = undefined
            const token = jwt.sign({user}, secret)
          res.status(200).send(res.send({
            message: "User login successful",
            status: 200,
            user: responseData,
            token
        }))
        } 
      })
      .catch(err => res.status(500).send(err))
}

exports.addFavorite = (req, res) => {
    // User.findOneAndUpdate({favorites: req.params.name})
}

exports.getFavorites = (req, res) => {
    // User.find().sort({favorites: -1}).exec()
    // .then(games => res.send(games))
    // .catch(err => res.send({
    //     message: err.message,
    //     status: 500
    // }))
}