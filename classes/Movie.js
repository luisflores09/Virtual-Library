// import the Media class:
const Media = require("./Media");

// create your Movie class:
class Movie extends Media {
    constructor(title, year, genre, director, duration, rating) {
        super(title, year, genre);
        this.director = director;
        this.duration = duration;
        this.rating = rating;
    }

    summary() {
        return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`;
    }

    static longestMovie(movies) {
        let longestMovie = movies[0]
        movies.forEach(movie => {
            if (longestMovie.duration < movie.duration) {
                longestMovie = movie;
            }
        })
        return longestMovie
    }
}


// don't change below
module.exports = Movie;