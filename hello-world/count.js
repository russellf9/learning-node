var http = require('http');

var fs = require('fs');

// write out numbers
function writeNumbers(res) {
	
	var counter = 0;
	
	// incremental global, write to client
	for(var i=0; i<100; i++) {
		counter++;
		res.write(counter.toString() + '\n');
	}
}

// create HTTP server
http.createServer(function(req, res) {
	
	var query	= require('url').parse(req.url).query;
	
	var app		= require('querystring').parse(query).file + ".txt";
	
	// content header
	res.writeHead(200, {'Content-Type':'text/plain'});
	
	// write out numbers
	writeNumbers(res);
	
	// timer to open file and read contents
	setTimeout(function() {
		
		console.log('opening: ', app);
		
		// open and read in file contents
		fs.readFile(app, 'utf8', function(error, data) {
			if (error) {
				res.write('Could not find or open file for reading\n');
			} else {
				res.write(data);
			}
			// response is done
			res.end()
		})
			
	}, 2000);
}).listen(8124);

