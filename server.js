const http = require('http');
const url = require('url');
const PORT = 3000;

const server = http.createServer(function(req, res){
    var parsedURL = url.parse(req.url, true);
    var path = parsedURL.pathname;
    var trimmedPath = path.replace(/^\/+|\/+$/g, "");

    var queryStringObject = parsedURL.query;

    var method = req.method.toUpperCase();

    var headers = req.headers;


    res.end("Hello, World\n");

    console.log('Requested | localhost:' + PORT + "/" + trimmedPath + "\n" + "Path |  " + trimmedPath + "\n" + "Method | " + method + "\n");
    console.log(queryStringObject);
    console.log(headers);
});

server.listen(PORT, function(){
    console.log("Listening on port " + 3000);
});