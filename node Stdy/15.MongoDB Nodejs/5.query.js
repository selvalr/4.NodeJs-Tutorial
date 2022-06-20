const { FindCursor } = require('mongodb');

var MongoClient=require('mongodb').MongoClient;

var url='mongodb://localhost:/';

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo=db.db("selva");
    var query={name:"selva"};
    dbo.collection("place").find(query).toArray(function(err,res){
        if (err) throw err;
        console.log(res);
    });
});