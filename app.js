//  EXAMPLE #1

// const http = require('http');

// const server = http.createServer((req,res) => {
//     res.writeHead(200,{'Content-Type':'text/plain'});
//     res.end('hello world!\n');
// });

// const PORT = 3000;
// server.listen(PORT, () =>{
//     console.log('server listening on port '+ PORT);
// });

// EXAMPLE #2

// var http = require('http');

// http.createServer(function (req,res){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(req.url);
//     res.end();
// }).listen(8080);

// EXAMPLE #3

// var http = require('http');
// var fs = require('fs');

// const currentDate = new Date();
// const currentDateString = currentDate.toLocaleString();

// http.createServer(function (req,res){
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(currentDateString);
//     res.end();
// }).listen(8080, function(){
//     console.log('server listening on port 8080');
// });
