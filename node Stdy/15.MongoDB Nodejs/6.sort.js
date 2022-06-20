

var MongoClient=require('mongodb').MongoClient;

var url='mongodb://localhost:/';

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo=db.db("selva");
    var sort={name:1}; // 1 is assending, -1 is decending
    dbo.collection("place").find().sort(sort).toArray(function(err,res){
        if (err) throw err;
        console.log(res);
    });
});