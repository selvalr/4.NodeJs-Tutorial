var fs=require('fs');
//fsunlink is a file delected
fs.unlink('new.txt',function(err){
    if(err) throw err;
    console.log("delected");
})