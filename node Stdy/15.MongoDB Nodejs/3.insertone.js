/*
var MongoClient=require('mongodb').MongoClient;
var url='mongodb://localhost:/';

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo=db.db("selva");
    var myobj={name:"selva",age:24,place:"tenkasi"};
    dbo.collection("place").insertOne(myobj,function(err,res){
        if (err) throw err;
        console.log("One row inserted");
    });
});
*/


var MongoClient=require('mongodb').MongoClient;
var url='mongodb://localhost:/';

MongoClient.connect(url,function(err,db){
    if(err) throw err;
    var dbo=db.db("selva");
    var myobj=[{name:"selva",age:24,place:"tenkasi"},{name:"ronaldo",job:"footballer"}];
    dbo.collection("place").insertMany(myobj,function(err,res){
        if (err) throw err;
        console.log("row inserted");
    });
});