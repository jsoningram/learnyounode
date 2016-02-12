module.exports = function(directory, extension, callback) {

	var fs     = require('fs'),
		path   = require('path'),
		list   = [];

	fs.readdir(directory, function(err, data) {
		if (err) {
			return callback(err);
		}
		for (var i = 0; i < data.length; i++) {
			if (path.extname(data[i]) == ('.' + extension)) {
				list.push(data[i]);
			}
		}
		return callback(null, list);	
	});
}
