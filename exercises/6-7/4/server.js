var http = require('http'),
    url = require('url'),
    fs = require('fs'),
    path = require('path'),
    _ = require('underscore'),
    server;

server = http.createServer(function listen(request, response){
    var pathname = url.parse(request.url).pathname,
        contentType = 'application/json',
        responseBody = JSON.stringify({message: "Hi there."});

    if(pathname === '/'){
        contentType = 'text/html';
        responseBody = fs.readFileSync(path.resolve(__dirname, 'client.html'));
    }

    response.writeHead(200, {"Content-Type": contentType});
    response.write(responseBody);
    response.end();
}).listen(8888);