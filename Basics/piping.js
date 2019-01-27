var fs = require("fs");

var readStream = fs.createReadStream('pipout.txt');

var writeStream = fs.createWriteStream('pipin.txt');

readStream.pipe(writeStream);

console.log("Program Ended!");