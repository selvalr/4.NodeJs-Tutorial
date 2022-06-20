var fs=require('fs');
//Replace the file with a new one:
fs.writeFile('new.txt','this is repllae',function(err){
    if (err) throw err;
    console.log('Replaced....');
})