// import the Media class:
const Media = require('./Media')
// create your Music class:
class Music extends Media {
    constructor(title, year, genre, artist, length){
        super(title, year, genre)
        this.artist = artist;
        this.length = length;
    }
    summary(){
        return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`
    }
    static shortestAlbum(music){
        let shortestAlbum = music[0]
        music.forEach(song => {
            if (shortestAlbum.duration > song.duration) {
                shortestAlbum = song;
                console.log(song)
                console.log(shortestAlbum)
            }
        })
        return shortestAlbum
    }
}
// don't change below
module.exports = Music;
