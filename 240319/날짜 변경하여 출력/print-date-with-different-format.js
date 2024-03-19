// 변수 선언, 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(".");
let year = Number(input[0]);
let month = Number(input[1]);
let day = Number(input[2]);
// 출력
console.log(`${month}-${day}-${year}`);