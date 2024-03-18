const fs = require("fs");
let a = fs.readFileSync(0).toString();
let arr = a.split(" ");

let n = arr[0];
let m = arr[1];

console.log(n*m);


/*변수 선언, 입력
const fs = require("fs");
let input = fs.readFileSync(0).toString().split(" ");

let a = Number(input[0]);
let b = Number(input[1]);

// 출력
console.log(a * b); */