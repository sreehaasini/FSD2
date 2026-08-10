    class Box<T> {
    private item: T;

    constructor(value: T) {
        this.item = value;
    }

    public getValue(): T {
        console.log("Getting value...");
        return this.item;
    }

    public setValue(value: T): void {
        this.item = value;
        console.log("Value updated.");
    }
}

let numBox = new Box<number>(100);
let num = numBox.getValue();
console.log("Number: " + num);

let strBox = new Box<string>("Hello Haasini");
console.log("String: " + strBox.getValue());

interface StudentInfo {
    name: string;
    score: number;
}

let studentBox = new Box<StudentInfo>({
    name: "Haasini",
    score: 95
});

let studentData = studentBox.getValue();
console.log("Student Name: " + studentData.name);
console.log("Marks: " + studentData.score);

export {};
