    interface Lengthwise {
    length: number;
}

function printLength<T extends Lengthwise>(item: T): number {
    return item.length;
}

console.log(printLength("TypeScript"));
console.log(printLength([1, 2, 3]));