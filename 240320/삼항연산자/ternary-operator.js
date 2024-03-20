const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let a = Number(input);

let c = (a === 100) ? "pass" : "failure";

console.log(c);