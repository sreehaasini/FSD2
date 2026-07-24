let value: any = 71;
value = "now i am a string";
value = true;

let text: unknown = "hello Haasini";

if (typeof text === "string") {
    console.log("Length of string: " + text.length);
}
function showMsg(msg: string): void {
    console.log("ALERT: " + msg);
}
showMsg("Environment setup complete!");