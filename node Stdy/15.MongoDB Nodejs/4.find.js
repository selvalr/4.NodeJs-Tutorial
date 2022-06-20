//FINDOne
/* 

var MongoClient=require('mongodb').MongoClient;

var url='mongodb://localhost:/';

MongoClient.connect(url,function(err,db){
    if (err) throw err;
    var dbo=db.db("selva");
    dbo.collection("place").findOne({},function(err,res){
        if(err) throw err;
        console.log(res);
        db.close();
    });
});

*/
//find
/*
var MongoClient=require('mongodb').MongoClient;

var url='mongodb://localhost:/';

MongoClient.connect(url,function(err,db){
    if (err) throw err;
    var dbo=db.db("selva");
    dbo.collection("place").find({}).toArray(function(err,res){
        if(err) throw err;
        console.log(res);
        db.close();
    });
});
*/

//projection

var MongoClient=require('mongodb').MongoClient;

var url='mongodb://localhost:/';

MongoClient.connect(url,function(err,db){
    if (err) throw err;
    var dbo=db.db("selva");
    dbo.collection("place").find({}, { projection: { age: 0 } }).toArray
        (function(err,res){
        if(err) throw err;
        console.log(res);
        db.close();
    });
});



