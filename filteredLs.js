var fs     = require('fs'),
	path   = require('path'),
	myPath = process.argv[2],
	ext    = process.argv[3],
	i;

fs.readdir(myPath, function(err, data) {
	if (err) {
		throw err;
	}
	for (i = 0; i < data.length; i++) {
		if (path.extname(data[i]) == ('.' + ext)) {
			console.log(data[i]);
		}
	}
	return;	
});
