var fs = require("fs");
var data = "";
var eventEmitter = require('events');

var readStream = fs.createReadStream("input.txt");
readStream.on('open', function(){
    console.log("Open");
});

readStream.setEncoding("UTF8");

readStream.on('data', function(chunk){
    data += chunk;
});

readStream.on('end',function(){
    console.log(data);
});

readStream.on('error', function(err){
    console.log(err.stack);
});

readStream.on('close',function(){
    console.log("Closed");
});


console.log("Program Ended!");

data = "Hello.\nEnded."
var writerStream = fs.createWriteStream('output.txt');

writerStream.write(data,'UTF8');

writerStream.end();

writerStream.on('finish', function() {
    console.log("Write completed.");
 });
 
 writerStream.on('error', function(err) {
    console.log(err.stack);
 });


 console.log("Program Ended");
