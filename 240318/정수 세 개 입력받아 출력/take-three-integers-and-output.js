const fs = require('fs');

// 표준 입력을 문자열로 읽어들임
let inputString = fs.readFileSync(0);

// 문자열로 변환 후 공백을 기준으로 문자열을 분리하여 배열로 저장
let inputArray = inputString.toString().split(' ');

// 개행 문자를 기준으로 문자열을 분리하여 배열로 저장
let inputLines = inputString.toString().split('\n');

let a = Number(inputArray[0]);
let b = Number(inputArray[1]);
let c = Number(inputLines[1]);

console.log(a, b, c);