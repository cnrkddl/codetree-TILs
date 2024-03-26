// 변수 선언 및 입력
const fs = require('fs');
let input = Number(fs.readFileSync(0).toString().trim());

if (input % 2 === 1) {
    input += 3;
}

if (input % 3 === 0) {
    input/=3;
}

// 출력
console.log(input);