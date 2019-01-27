var buf = new Buffer(10);

var buf = new Buffer([10, 20, 30, 40, 50]);

var buf = new Buffer("Simple Easy Learning","utf-8");
//var buf = new Buffer(256);
len = buf.write("simple easy learning");

console.log("Octets written: "+len);