const books = [];

class Book {
    constructor(params) {
        this.id = params.id;
        this.title = params.title;
        this.coverImage = params.coverImage;
        this.synopsis = params.synopsis;
        this.publisher = params.publisher;
        this.author = params.author;
        this.price = params.price;
    }

    static create(params) {
        if (books.length === 0) {
            params.id = 1
        } else {
            params.id = books[books.length - 1].id + 1;
        }

        const book = new this(params);

        books.push(book);
        
        return book;
    }

    static update(id, params) {
        const book = this.find(id);

        if (!book) return null;

        Object.assign(book, params);

        return book;
    }

    static delete(id) {
        const book = this.find(id);
        if (!book) return null;
        
        books.splice(books.indexOf(book), 1);
        
        return book;
    }

    static find(id) {
        const book = books.find((i) => i.id === Number(id));
        if (!book) return null;
        
        return book;
    }

    static list() {
        return books;
    }
}

module.exports = Book;