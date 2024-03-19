const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("-");
let year = Number(input[2]);
let month= Number(input[0]);
let day = Number(input[1]);

console.log(year+"."+month+"."+day);