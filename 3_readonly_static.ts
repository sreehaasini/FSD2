class Library {

    public static readonly libraryName: string = "Central Library";
    public static totalBooks: number = 0;

    public readonly bookId: string;
    public bookName: string;

    constructor(name: string, id: string) {
        this.bookName = name;
        this.bookId = id;

        Library.totalBooks++;
    }

    public static showLibrary(): void {
        console.log(`Welcome to ${this.libraryName}`);
    }

    public showBook(): void {
        console.log(`Book Name: ${this.bookName}`);
        console.log(`Book ID: ${this.bookId}`);
    }
}

console.log(Library.libraryName);
Library.showLibrary();

let libBook1 = new Library("Java", "B101");
let libBook2 = new Library("TypeScript", "B102");

libBook1.showBook();
libBook2.showBook();

console.log(libBook1.bookId);

console.log(`Total Books: ${Library.totalBooks}`);

export {};