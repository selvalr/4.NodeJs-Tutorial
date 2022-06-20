var http=require('http');
var fs=require('fs');

http.createServer(function(req,res){
    fs.readFile('index.html',function(err,data){
        if(err){
            res.writeHead(404,{'Content-type':'text/html'});
            res.write('404 error');
            res.end();
        }
        res.writeHead(200,{'COntent-Type':'text/html'});
        res.write(data);
        res.end();
    })
}
).listen(8080);