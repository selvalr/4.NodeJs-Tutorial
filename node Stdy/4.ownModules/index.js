var http=require('http');
var date1=require('./module');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write('today is'+date1.myfunction());
    res.end();
}).listen(8080);