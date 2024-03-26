const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");
let a = input[0].split(" ");
let am = Number(a[0]);
let ae = Number(a[1]);

let b = input[1].split(" ");
let bm = Number(b[0]);
let be = Number(b[1]);


if ((am>bm) && (ae>be)) {
    console.log("1");
}
else {
    console.log("0");
}