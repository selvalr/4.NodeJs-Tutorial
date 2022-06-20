var http=require('http');
var fs=require('fs'); //your computer file access in fs

http.createServer(function(req,res){ //client request and respponse
    fs.readFile('1enter.html',function(err,data){  //file in fs error and data 
        res.writeHead(200,{'Content-Type':'text/html'}); //write html
        res.write(data);//client true reponce a data
        return res.end();//responce end

    });
    
}).listen(8080);