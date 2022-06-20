var fs = require('fs');

fs.rename('new.txt','rename.txt',function(err){
    if (err) throw err;
    console.log('rename chnaged....');
})