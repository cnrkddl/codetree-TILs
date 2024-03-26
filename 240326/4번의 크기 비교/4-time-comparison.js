let fs = require("fs");
let input = fs.readFileSync(0, "utf8").trim().split("\n");
let a = parseInt(input[0]);
let values = input[1].split(" ").map(Number);

console.log(values.map(val => a > val ? 1 : 0).join("\n"));