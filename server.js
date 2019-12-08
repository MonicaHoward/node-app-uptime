const http = require('http');
const PORT = 3000;


const server = http.createServer(function(req, res){
    res.end("Hello, World\n");
});


server.listen(PORT, function(){
    console.log("Listening on port " + 3000);
})