var http=require('http');
var fs=require('fs');
var url=require('url');

http.createServer(function(req,res){ //http:local
    var weblink=url.parse(req.url,true); //local  //pathname 
    var send="."+weblink.pathname; // /loca.host:8080/2selecttag
    fs.readFile(send,function(err,data){
        if(err){
            res.writeHead(404,{'content-type':'text-html'});
           return res.end();
        }
        res.writeHead(200,{'content-type':'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);