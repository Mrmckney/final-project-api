const User = require('../models/userModel')

exports.createUser = (req, res) => {
    new User(req.body)
    .save()
    .then(() => res.status(200).send({
        message: "User Created",
        status: 200
    }))
    .catch(err => res.status(500).send(err))
}

exports.loginUser = (req, res ) => {
    User.findOne({ username: req.body.username })
    .then((userFound) => {
        if (!userFound || userFound.password !== req.body.password) {
          return res
            .status(404)
            .send({
                message: "Login Successful",
                status: 404
            })
        }
        if (userFound && userFound.password === req.body.password) {
          res.status(200).send(userFound)
        } else {
          res.status(401).send({
              message: "Username or password incorrect",
              status: 401
          })
        }
      })
      .catch(err => res.status(500).send(err))
}