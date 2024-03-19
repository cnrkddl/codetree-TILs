// 변수 선언, 입력
const fs = require("fs");
let s = fs.readFileSync(0).toString().trim().split("\n");
let c = s[0];
let b= Number(s[1]);
let a = Number(s[2])
// 출력
console.log(c);
console.log(b.toFixed(2));
console.log(a.toFixed(2));