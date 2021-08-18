const User = require('../models/userModel')

exports.createUser = (req, res) => {
    new User(req.body)
    .save()
    .then(() => res.status(200).send('Created User'))
    .catch(err => res.status(500).send(err))
}