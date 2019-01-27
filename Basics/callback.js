var fs = require("fs");
var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Program Ended");


console.log("-------------------");


var fs = require("fs");

fs.readFile('input.txt',function(err, data){
    if(err) return console.error(err);
    console.log(data.toString());
});
console.log("Program Ended");

/* 
Output:

Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!
Program Ended
-------------------
Program Ended
Tutorials Point is giving self learning content
to teach the world in simple and easy way!!!!!
Jaydeeps-MacBook-Pro:Callback jaydeepkhambholja$
*/