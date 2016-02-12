var mymodule = require('./modules/extFilter');

mymodule(process.argv[2], process.argv[3], function(err, data) {
	if (err) {
		throw err;
	}	
	data.forEach(function(element, index, data) {
		console.log(element);
	});
});
