class Book{  
    private name:string;
    
    constructor(name: string){
        this.name = name
    }
    getBookName(): string{
        return this.name
    }
}
class Library{
    private name: string;
    private books: Book[];

    constructor(name: string,books: Book[]){
        this.name = name
        this.books = books
    }

    showBooks(): void{
        this.books.forEach((item) => console.log(item.name))
    }

}

function main(): void{
    const book1 = new Book('Book1')
    const book2 = new Book('Book2')

    const library1 = new Library('Lib1', [book1, book2])
    library1.showBooks()
    console.log(book1.getBookName())
    console.log(book2.getBookName())
}
main()