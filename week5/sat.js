var http = require('http');
var fs = require('fs');

function handleRequest (request, response) {

  fs.readFile('.' + request.url, function(err, content){
    if (err){
      response.writeHead(404);
      response.end();
    } else {
      response.writeHead(200, {'Content-Type' : 'text/html'});
      response.end(content, 'utf-8');
    }
  })

  console.log("request has been made" + request.url);

};

http.createServer(handleRequest).listen(1337);
console.log("server now running")