let binary: number = 1101;
let decimal: number = 0;
let base: number = 1;

while (binary > 0) {
    let digit = binary % 10;
    decimal = decimal + digit * base;
    base = base * 2;
    binary = Math.floor(binary / 10);
}

console.log("Decimal Number = " + decimal);
