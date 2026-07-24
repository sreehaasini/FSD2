let customerName: string = "Haasini";
let customerAge: number = 20;
let hasSubscription: boolean = true;

console.log("data type of customerName is --> " + typeof customerName);
console.log("data type of customerAge is --> " + typeof customerAge);
console.log("data type of hasSubscription is --> " + typeof hasSubscription);

function showCustomerDetails(name: string, age: number, subscribed: boolean): void {
    console.log(`User: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Status: ${subscribed ? "active" : "inactive"}`);
}
showCustomerDetails(customerName, customerAge, hasSubscription);