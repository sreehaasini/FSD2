class Student {
    static collegeName: string = "Shri Vishnu College";

    static showCollege(): void {
        console.log("College Name: " + Student.collegeName);
    }
}
Student.showCollege();