let str: string = "hello world";

let frequency: { [key: string]: number } = {};

for (let char of str) {
    if (frequency[char]) {
        frequency[char]++;
    } else {
        frequency[char] = 1;
    }
}

console.log(frequency);
