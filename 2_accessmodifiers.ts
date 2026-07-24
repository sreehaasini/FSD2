class Student {
    public name: string;
    private marks: number;
    private password: number;
    protected bonusMarks: number = 0;

    constructor(name: string, marks: number, password: number) {
        this.name = name;
        this.marks = marks;
        this.password = password;
    }

    public updateMarks(newMarks: number, pass: number): void {
        if (this.checkPassword(pass)) {
            this.marks = newMarks;
            console.log("Marks updated successfully.");
            console.log("Current Marks: " + this.marks);
        } else {
            console.log("Wrong Password!");
        }
    }

    private checkPassword(pass: number): boolean {
        return this.password === pass;
    }
}

class Topper extends Student {
    public addBonus(): void {
        this.bonusMarks += 10;
        console.log("Bonus Marks: " + this.bonusMarks);
    }
}

let s1 = new Student("Madhu", 80, 1234);

s1.updateMarks(90, 1234);

let s2 = new Topper("Rahul", 85, 5678);

s2.addBonus();