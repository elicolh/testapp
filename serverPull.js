let http = require('http');
const exec = require('child_process').exec


http.createServer(function (req, res) {
    req.on('data', function(chunk) {
        exec('cd C:\\Users\\Eli\\Documents\\PROGRAMMATION\\JAVASCRIPT\\serveur box\\testapp && git pull');
        console.log("pulled")
    });
    res.end();
}).listen(2832);
