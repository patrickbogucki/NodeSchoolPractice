// Number 5
var fs = require('fs');
fs.readdir(process.argv[2], function(err, files) {
	var extension = process.argv[3];
	files.forEach(function(file) {
		if (file.substr(file.lastIndexOf('.') ) === '.' + extension) {
			console.log(file);
		}
	});
});

// // Number 4
// var fs = require('fs');
// fs.readFile(process.argv[2], function(err, data) {
// 	if (err) throw err;
// 	var buff = data.toString();
// 	buff = buff.split('\n');
// 	console.log(buff.length - 1);
// });


// // Number 3
// var fs = require('fs');
// var buff = fs.readFileSync(process.argv[2]);
// buff = buff.toString();
// buff = buff.split('\n');
// console.log(buff.length - 1); // Last line of code does not contain EOF so length is too long by one

// // Number 2
// var sum = 0;
// for(var i = 2; i < process.argv.length; i++) {
// 	var num = Number(process.argv[i]);
// 	sum += num;
// }
// console.log(sum);

// // Number 1
// console.log('HELLO WORLD');