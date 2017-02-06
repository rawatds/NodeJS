var http = require('http');

var server = http.createServer( function(req, res){
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("Hey <b>DSR!</b>");
});

server.listen(3000);
console.log("The server is started at port 3000");