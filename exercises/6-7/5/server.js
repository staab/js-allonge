var http = require('http'),
    io = require('socket.io'),
    url = require('url'),
    fs = require('fs'),
    path = require('path'),
    _ = require('underscore'),
    server;

server = http.createServer(function listen(request, response){
    response.writeHead(200, {"Content-Type": 'text/html'});
    response.write(fs.readFileSync(path.resolve(__dirname, 'client.html')));
    response.end();
}).listen(8888);

socketServer = io(server);

socketServer.on('connection', function(socket){
    socket.on('calculate', function(data){
        socket.emit('calculation', {value: data.value * 10});
    });
});