    namespace College {
    const minMarks = 35;
    export function checkPass(marks: number): boolean {
        return marks >= minMarks;
    }

    export function checkAttendance(attendance: number): boolean {
        return attendance >= 75;
    }

    export namespace Result {
        export function calculatePercentage(total: number, obtained: number): number {
            return (obtained / total) * 100;
        }
    }
}

let marks = 80;
let attendance = 90;

console.log(`Pass: ${College.checkPass(marks)}`);
console.log(`Attendance OK: ${College.checkAttendance(attendance)}`);

let totalMarks = 500;
let obtainedMarks = 420;

let percentage = College.Result.calculatePercentage(totalMarks, obtainedMarks);

console.log(`Percentage: ${percentage}%`);
