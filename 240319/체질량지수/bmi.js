// 입력 및 변수 선언
const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split(" ");
let cm = Number(input[0]);
let m= cm/100;
let kg = Number(input[1]);
let bmi= kg/((m*m));
// 출력
console.log(Math.floor(bmi));
if (bmi>=25) {
    console.log("Obesity");
}