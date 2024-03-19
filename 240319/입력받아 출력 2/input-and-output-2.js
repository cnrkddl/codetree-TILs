const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("-");
a=input[0];
b=input[1];
console.log(a+b);