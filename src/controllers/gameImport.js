import { APIKEY } from "../../config"




gameResults.forEach(game => {
    let newGame = {
        slug: game.slug,
        rawgid: game.id,
        name: game.name,
        poster: game.background_image,
        rating: game.rating,
        releaseDate: game.released,
        genres: game.genres.map(g => g.name)
    }
})

