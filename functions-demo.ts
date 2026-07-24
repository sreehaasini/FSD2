function printName(name: string): string {
    return `hello, ${name}!`;
}

function printPlace(place: string = "Bhimavaram"): string {
    return `location: ${place}`;
}

function message(num: number, msg?: string): void {
    console.log(`sending SMS to ${num}...`);

    if (msg) {
        console.log(`content: ${msg}`);
    }
}

function total(...num: number[]): number {
    return num.reduce((a, b) => a + b, 0);
}

console.log(printName("Haasini"));
console.log(printPlace());
console.log(printPlace("Bhimavaram"));

message(9876543210);

let ans = total(10, 20, 20, 40);
console.log(`total score: ${ans}`);