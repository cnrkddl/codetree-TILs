const fs = require("fs");
let v = fs.readFileSync(0).toString().trim().split(" ");
let a=Number(v[0]);
let b=Number(v[1]);
let c=Number(v[2]);
let result;

if(a<=b && a<=c){
    result=a;
}

if(b<=a && b<=c){
    result=b;
}


else{
     result=c;
}



console.log(result);