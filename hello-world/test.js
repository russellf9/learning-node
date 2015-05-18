var http = require('http');


// the url we want plus the path and options we need
var options = {
	host: 'localhost',
	port: 8125,
	path: '/?file=secondary',
	method: 'GET'
};

var processPublicTimeline = function(response) {
	// finished? ok, write data to a file
	console.log('finished request');
};

for(var i=0; i<200; i++) {
	// make the request, and then end it, to close the connection
	http.request(options, processPublicTimeline).end();
};