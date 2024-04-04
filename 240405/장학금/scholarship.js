const fs = require("fs");
let a = fs.readFileSync(0).toString().trim().split(" ");

let result1;
let result2;

if (95<=a[0] &&a<=100) {
    result1= 100000;
}
else if(90<=a[0]){
    result1=50000;
}
else{
    result1=0;
}

if (a[0]>=90 && (95<=a[1] &&a<=100)) {
    result2= 100000;
    }
else if(a[0]>=90 && 90<=a[1]){
    result2=50000;
    }
else{
     result2=0;
    }
console.log(result1 + result2);