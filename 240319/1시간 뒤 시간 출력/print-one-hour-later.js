const fs = require("fs");
let input = fs.readFileSync(0).toString().trim();
let arr= input.split(":");
let hour= Number(arr[0]);
let min=Number(arr[1]);

console.log((hour+1)+":"+min);