    class Book {
    public bookName: string;
    public price: number;
    public pages: number;
    public author: string;

    constructor(name: string, cost: number);
    constructor(name: string, cost: number, pages: number, author: string);

    constructor(name: string, cost: number, pages?: number, author?: string) {
        this.bookName = name;
        this.price = cost;

        if (pages !== undefined && author !== undefined) {
            this.pages = pages;
            this.author = author;
        } else {
            this.pages = 100;
            this.author = "Unknown";
        }
    }

    public getPrice(): number {
        return this.price;
    }

    public showDetails(): void {
        console.log("----- Book Details -----");
        console.log("Book Name : " + this.bookName);
        console.log("Price     : " + this.price);
        console.log("Pages     : " + this.pages);
        console.log("Author    : " + this.author);
        console.log("------------------------");
    }
}

let book1 = new Book("Java", 500);

let book2 = new Book(
    "TypeScript",
    800,
    350,
    "ABC"
);

book1.showDetails();

book2.showDetails();

book2.price = 900;

console.log("Updated Price: " + book2.getPrice());