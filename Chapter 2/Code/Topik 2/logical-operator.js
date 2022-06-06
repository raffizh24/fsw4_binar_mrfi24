console.log("<-- Logical Operator -->");

console.log(1 && 10); // 10
console.log(0 || 100); // 100
console.log(true && false); // False
console.log((true && false) || "Hello World"); // Hello World

const g = 10;
const h = 100;

if ((g * h) % 100 === 0) console.log("OK!");