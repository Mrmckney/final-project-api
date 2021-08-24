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
            res.send({
                message: 'Login Attempt Failed',
                status: 401
            })
            return
        }
        if (user && user.password === req.body.password) {
            let responseData = user
            responseData.password = undefined
            const token = jwt.sign({user}, secret)
          res.status(200).send({
            message: "User login successful",
            status: 200,
            user: responseData,
            token
          })
            return
        } 
      })
      .catch(err => res.status(500).send(err))
}

exports.addFavorite = (req, res) => {
    const token = req.headers.authorization.split(' ')[1]
    if(!token) {
        res.status(403)
        .send({
            status: 403,
            message: 'Access denied'
        })
        return
    }
    const decoded = jwt.verify(token, secret)
    User
    .findOneAndUpdate({'username': decoded.user.username}, {$addToSet: {favorites: req.body}})
    .then(() => res.status(200).send({
        message: "Favorite added",
        status: 200
    }))
    .catch(err => res.send({
        message: err.message,
        status: 500 
    }))
}

exports.getFavorites = (req, res) => {
    const token = req.headers.authorization.split(' ')[1]
    if(!token) {
        res.status(403)
        .send({
            status: 403,
            message: 'Access denied'
        })
        return
    }
    const decoded = jwt.verify(token, secret)
    User.findOne({'username': decoded.user.username})
    .then(data => {
        res.send(data)
    })
    .catch(err => res.send({
        message: err.message,
        status: 500
    }))
}

exports.deleteFav = (req, res) => {
    const token = req.headers.authorization.split(' ')[1]
    if(!token) {
        res.status(403)
        .send({
            status: 403,
            message: 'Access denied'
        })
        return
    }
    const decoded = jwt.verify(token, secret)
    User.findOneAndUpdate({'username': decoded.user.username}, {$pull: {favorites: req.body}})
    .then(data => {
        User.findOne({'username': decoded.user.username}).then((data) => {  
            res.send({
                message: 'Removed Favorite',
                favorites: data.favorites
            })
        })
    })
    .catch(err => res.send({
        message: err.message,
        status: 500
    }))
}