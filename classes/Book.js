// import the Media class:
const Media = require ('./Media.js');
// create your Book class:
class Book extends Media{
    constructor(title, year, genre, author, numPages, rating){
        super(title, year, genre);
        this.author = author;
        this.numPages = numPages;
        this.rating = rating;
    }

    summary(){
        return `Title: ${this.title}, Author: ${this.author}, Year: ${this.year}, Page Count: ${this.numPages}, Genre: ${this.genre}, Rating: ${this.rating}`;
    }

    static highestRating(book){
        let highestRating = 0;
        let bestBook = '';
        for(let i = 0; i < book.length; i++){
            if(book[i].rating > highestRating){
                highestRating = book[i].rating;
                bestBook = book[i];
            }
        }
        return bestBook;
    }
}
// don't change below
module.exports = Book;
