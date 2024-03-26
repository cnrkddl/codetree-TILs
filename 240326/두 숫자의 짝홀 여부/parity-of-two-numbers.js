let fs = require("fs");
let a = (fs.readFileSync(0).toString().trim().split(" "));

if (Number(a[0]) % 2 === 0) {
    console.log("even");
}
else {
    console.log("odd");
}

if (Number(a[1])%2=== 0) {
    console.log("even");
}
else {
    console.log("odd");
}