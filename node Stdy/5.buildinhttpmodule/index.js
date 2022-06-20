var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});//html content
  res.write(req.url);//  /summar/hello
  
  res.end();//ending responce
}).listen(8081);//http:localhost:8081
