// load http module
var http = require('http');


// create the htttp server
http.createServer(function(req, res) {
	// content header
	res.write(200, {'content-type':'text/plain'});
	
	// write message and signal communication is complete
	res.end('Hello, World\n');
}).listen(8124); 