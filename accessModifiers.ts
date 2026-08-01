class Employee {
    public name: string;
    private salary: number;
    protected department: string;
    constructor(name: string, salary: number, department: string) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    public display(): void {
        console.log("Name: " + this.name);
        console.log("Salary: " + this.salary);
        console.log("Department: " + this.department);
    }
}
let emp = new Employee("Rithik", 50000, "IT");

console.log(emp.name);
emp.display();