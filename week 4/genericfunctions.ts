 function getFirst<T>(arr: T[]): T {
    return arr[0];
}

function storeItem<T>(value: T): { item: T; time: Date } {
    return {
        item: value,
        time: new Date()
    };
}

let names = ["Haasini", "Rithik", "Akhil"];
let firstName = getFirst<string>(names);
console.log("First Name: " + firstName);

let markList = [85, 90, 95];
let firstMark = getFirst<number>(markList);
console.log("First Mark: " + firstMark);

interface BookInfo {
    title: string;
    price: number;
}

let book: BookInfo = {
    title: "Java",
    price: 500
};

let box = storeItem<BookInfo>(book);

console.log("Book Name: " + box.item.title);
console.log("Stored Time: " + box.time);

let auto = getFirst(names);

export {};
