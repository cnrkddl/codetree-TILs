const fs = require("fs");
let v = fs.readFileSync(0).toString().trim().split(" ");
let a=Number(v[0]);
let b=Number(v[1]);
let c=Number(v[2]);
let result;

if(b>a && b<c){
    result=1;
}

else {
     result=0;
}



console.log(result);