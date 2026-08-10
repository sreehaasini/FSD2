let str: string = "programming";
let result: string = "";

for (let i = 0; i < str.length; i++) {
    if (!result.includes(str[i])) {
        result = result + str[i];
    }
}

console.log("Original String = " + str);
console.log("After Removing Duplicates = " + result);
