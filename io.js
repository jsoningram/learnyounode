var fs = require('fs'),
	str,
	buf,
	array;

buf = fs.readFileSync(process.argv[2]);
str = buf.toString();
array = str.split('\n');

console.log(array.length -1);
