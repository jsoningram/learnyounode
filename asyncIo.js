var fs = require('fs'),
	str;

fs.readFile(process.argv[2], {'encoding': 'utf8'}, function(err, data) {
	if (err) {
		throw err;
	}
	str = data.toString().split('\n').length -1;
	console.log(str);
});
