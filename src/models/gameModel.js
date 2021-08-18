const mongoose = require('mongoose')

const GameSchema = mongoose.Schema({
    slug: String,
    rawgid: Number,
    name: String,
    poster: String,
    rating: Number,
    releaseDate: String,
    genres: Array,
    platforms: Array
})

module.exports = mongoose.model('Game', GameSchema)