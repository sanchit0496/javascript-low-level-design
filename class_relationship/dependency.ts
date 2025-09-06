class Book{
    private name: string;
    constructor(name: string){
        this.name = name
    }
    getBookName(): string {
        return this.name
    }
}

class Printer{
    private booklist: Book[]
    constructor(booklist: Book[]){
        this.booklist = booklist
    }
    printBook(): void{
        this.booklist.forEach((item) => console.log(item.getBookName()))
    }
}

class Library{ 
    private name: string;
    private booklist: Book[];
    
    constructor(name:string){
        this.name = name;
        this.booklist = [] 
    }

    addBookToList(book: Book): void{
        this.booklist.push(book)
    }
    getBookList(): Book[]{
        return this.booklist;
    }
    
    // dependecy of library on the printer
    printBooks(printer: Printer): void{
        this.booklist.forEach((item) => console.log(item.getBookName()))
    }
 
}

function main(): void{
       const book1 = new Book('Book 01') 
    const book2 = new Book('Book 02')

    const library = new Library('Library 01')
    library.addBookToList(book1)
    library.addBookToList(book2)

    // const list = library.getBookList()
    // console.log(list)
    const printer = new Printer(library.getBookList()) 
   printer.printBook()
}
main()