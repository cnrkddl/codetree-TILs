const fs = require("fs");
let input = Number(fs.readFileSync(0).toString().trim().split(" "));

let a = input;

let c = (a = 100) ? "pass" : "failure";

console.log(c);