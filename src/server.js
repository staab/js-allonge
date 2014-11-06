// Imports
var http = require('http'),
    qs = require('querystring'),
    _ = require('underscore'),
    router = require('./router.js');


function main (req, res) {
    var body = '';

    // Process GET data
    (function(splitAt){
        req.data = qs.parse(req.url.slice(splitAt));

        // Only modify the url if there actually was GET data
        if(splitAt > 0){
            req.url = req.url.slice(0, splitAt);
        }
    }(req.url.lastIndexOf('?') + 1));

    // From http://stackoverflow.com/a/4310087/1467342
    if (req.method === 'POST') {
        request.on('data', function (data) {
            body += data;

            // Too much POST data, kill the connection!
            if (body.length > 1e6){
                req.connection.destroy();
            }
        });
        request.on('end', function () {
            request.data = _.extend(request.data, qs.parse(body));
            router.route(req, res);
        });
    }
    else {
        router.route(req, res);
    }
};

var server = http.createServer(main);
server.listen(8000);