// 입력 및 변수 선언
const fs = require("fs");
let n = Number(fs.readFileSync(0).toString().trim());
if (n<5) {
    console.log("tiny");
}
else{
    console.log(n*n);
}