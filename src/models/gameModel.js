const mongoose = require('mongoose')

const GameSchema = mongoose.Schema({
     id: Number ,
     slug :  String ,
     name :  String ,
     released :  Date ,
     tba : Boolean,
     background_image : String ,
     rating : Number,
     rating_top : Number,
     ratings : Object,
     ratings_count : Number,
     reviews_text_count :  String ,
     added : Number,
     added_by_status : Object,
     metacritic : Number,
     playtime : Number,
     suggestions_count : Number,
     updated :  Date,
     esrb_rating : Object,
     platforms : Array
})

module.exports = mongoose.model('Game', GameSchema)