var utils = require('./utils.js'),
    _ = require('underscore');

var routes = {
    "/": function root (req){

    }
};

function route (req, httpResponse) {
    var defaultResponse = {
        status: 200,
        headers: {
            'Content-Type': "application/json",
        },
        body: { success: true }
    }, res;

    console.log(req.url, routes)
    if(routes[req.url]){
        res = routes[req.url](req);
    }
    else {
        res = {status: 404, body: {detail: "Not found"}};
    }

    res = utils.recursiveSimpleExtend(defaultResponse, res);

    if(res.contentType === 'application/json'){
        res.body = JSON.stringify(res.body);
    }

    httpResponse.writeHead(
        res.status, 
        res.headers
    );
    httpResponse.end(res.body, 'utf-8');
};


module.exports = {
    route: route
};