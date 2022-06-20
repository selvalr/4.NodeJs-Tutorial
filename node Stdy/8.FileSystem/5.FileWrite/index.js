var fs=require('fs');
//create a file named mynewfile3.txt:
fs.writeFile('new.txt','hello selva',function(err){
    if (err) throw err;
    console.log('saved....');
})