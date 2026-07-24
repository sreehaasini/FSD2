function totalAmount(price: number, tax: number): number {
    return price + (price * tax);
}

const totalPrice = (price: number, tax: number): number => {
    return price + (price * tax);
};

const welcome = (name: string): string =>
    `Welcome to ${name} Cinemas!`;

const price = 250;
const tax = 0.18;

console.log(welcome("PVR"));

let ans1 = totalAmount(price, tax);
console.log(`total(Traditional): ${ans1}`);

let ans2 = totalPrice(price, tax);
console.log(`total(Arrow): ${ans2}`);