const fs = require("fs");
let a = fs.readFileSync(0).toString().trim();

if (3<=a &&a<=5) {
    console.log("Spring");
}
else if (6<=a && a<=8) {
    console.log("Summer");
}
else if (9<=a && a<=11) {
    console.log("Fall");
}
else{
    console.log("Winter");
}