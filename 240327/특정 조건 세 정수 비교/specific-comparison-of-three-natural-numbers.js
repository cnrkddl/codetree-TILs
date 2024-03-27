const fs = require("fs");
let v = fs.readFileSync(0).toString().trim().split("");
let a=Number(v[0]);
let b=Number(v[1]);
let c=Number(v[2]);
let result1;
let result2;
if(a<=b && a<=c){
    result1=1;
}

else{
     result1=0;
}



if(a==b && b==c && c==a){
    result2=1;
}
else{
    result2=0;
}

console.log(result1, result2);