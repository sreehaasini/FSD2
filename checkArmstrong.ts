let num: number = 153;
let originalNum: number = num;
let sum: number = 0;
let digits: number = num.toString().length;

while (num > 0) {
    let digit: number = num % 10;
    sum = sum + Math.pow(digit, digits);
    num = Math.floor(num / 10);
}
if (sum === originalNum) {
    console.log(originalNum + " is an Armstrong number.");
} else {
    console.log(originalNum + " is not an Armstrong number.");
}