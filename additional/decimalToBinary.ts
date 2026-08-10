let decimal: number = 13;
let binary: string = "";

while (decimal > 0) {
    let remainder = decimal % 2;
    binary = remainder + binary;
    decimal = Math.floor(decimal / 2);
}

console.log("Binary Number = " + binary);
