// 변수 선언, 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let a = input[1];
let b = input[0];

// 출력
console.log(a)
console.log(b);