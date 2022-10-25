var http = require('http');
http.createServer(function(req,res){
    res.writeHead(200,{'content-type': 'text/html'});
    res.end('hello world');
}).listen(8080);
console.log('Server running at http://127.0.0.1:8080/ and http://localhost:8080/');
