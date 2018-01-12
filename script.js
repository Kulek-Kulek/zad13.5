var http = require('http');
var fs = require('fs');

var server = http.createServer();

server.on('request', function (request, response) {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    if (request.method === 'GET' && request.url === '/') {
    	fs.readFile('index.html', function(err, html) {
        response.write(html);
        response.end();
    });


    } else {
    		response.statusCode = 404;
            response.write('<h1>404: Zła ścieżka!</h1>');
    		fs.readFile('./images/cat.jpg', function(err, img) {
        	response.write(img, "jpg");
        	response.end();
    		});     
    }
});

server.listen(8080);