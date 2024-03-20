const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();

let a = Number(input[0]);

let c = (a = 100) ? "pass" : "failure";

console.log(c);