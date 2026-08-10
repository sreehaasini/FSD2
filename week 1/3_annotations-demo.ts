let phoneName: string = "iPhone";
let year: number = 2026;

function showDetails(name: string, release: number): string {
    return `${name} is the new model released in ${release}.`;
}

let names: string[] = ["Haasini"];

let result: string = showDetails(phoneName, year);

console.log(result);
console.log(`Starring: ${names.join(", ")}`);
