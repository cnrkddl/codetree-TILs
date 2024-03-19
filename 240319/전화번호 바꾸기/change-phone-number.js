// 변수 선언, 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("-");
let first = input[0];
let second = Number(input[1]);
let third= Number(input[2])
// 출력
console.log(`${first}-${third}-${second}`);