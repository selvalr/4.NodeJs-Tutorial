var fs =require('fs');

//appendfile is a no file in a folder in created a file and type to a text content

fs.appendFile('hello.html','hai selva',function(err){ //html page created
    if(err) throw err; 
    console.log("file saved"); //file saved
});