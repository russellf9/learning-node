// load http module
var http = require('http');

var fs = require('fs');

// create the htttp server
http.createServer(function(req, res) {
	// read the file
	fs.readFile('hello-world.js', 'utf8', function(error, data) {
		
		// content header
		res.writeHead(200, {'content-type':'text/plain'});
		
		if(error) {
			res.write('Could not find or open file for reading\n');
		} else {
			// if no error write JS file to client
			res.write(data);
		}
		res.end();
	});
	

	// write message and signal communication is complete
	//res.end('Hello, World!\n');
}).listen(8124); 


/*

#`...could have used another method, write:
res.write("Hello, World!\n");

# and then:
res.end();

*/