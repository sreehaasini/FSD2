class Box<T> {
    data: T;
    constructor(data: T) {
        this.data = data;
    }
    display(): void {
        console.log(this.data);
    }
}
let numberBox = new Box<number>(100);
let stringBox = new Box<string>("Hello");
let booleanBox = new Box<boolean>(true);
numberBox.display();
stringBox.display();
booleanBox.display();
