var fs=require('fs');
//The fs.writeFile() method replaces the specified file and content if it exists.
// If the file does not exist, a new file, containing the specified content, will be created:


fs.open('index.txt','w',function(err){
    if (err) throw err;
    console.log('opemed');
});