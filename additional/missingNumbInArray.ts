let arr: number[] = [1, 2, 4, 5];
let n: number = 5;
let totalSum: number = (n * (n + 1)) / 2;
let arraySum: number = 0;

for (let i = 0; i < arr.length; i++) {
    arraySum = arraySum + arr[i];
}
let missingNumber = totalSum - arraySum;
console.log("Missing Number = " + missingNumber);
