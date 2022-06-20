var fs =require('fs');

//append content at the end of the file:
fs.appendFile('hello.html','i am form avr',function(err){ //html page created
    if(err) throw err; 
    console.log("updated"); //file saved
});