// Number 3
var fs = require('fs');
var buff = fs.readFileSync('/Users/patrickbogucki/Documents/WebDev/Temp/Node/learnyounode/program.js');
var splitbuff = buff.toString().split();
console.log((splitbuff.toString().match(/\n\n/g) || []).length);
// console.log((splitbuff.toString().match(/,/g) || []).length);

// // Number 2
// var sum = 0;
// for(var i = 2; i < process.argv.length; i++) {
// 	var num = Number(process.argv[i]);
// 	sum += num;
// }
// console.log(sum);

// // Number 1
// console.log('HELLO WORLD');