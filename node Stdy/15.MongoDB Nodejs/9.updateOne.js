//updateOne
/*
var MongoClient=require('mongodb').MongoClient;

var url='mongodb://localhost:/';

MongoClient.connect(url,function(err,db){
    if (err) throw err;
    var dbo=db.db("selva");
    var query={name:"ronaldo"};
    var newvalue={$set:{name:"cristiano ronaldo"}};
    dbo.collection("place").updateOne(query,newvalue,function(err,res){
        if (err) throw err;
        console.log("1 douc updated");
        db.close();
    });
});
*/

//updateMany


var MongoClient=require('mongodb').MongoClient;

var url='mongodb://localhost:/';

MongoClient.connect(url,function(err,db){
    if (err) throw err;
    var dbo=db.db("selva");
    var query={name:/^s/};

    var newvalue={$set:{name:"selvamanan"}};
    dbo.collection("place").updateMany(query,newvalue,function(err,res){
        if (err) throw err;
        console.log(res+" douc updated");
        db.close();
    });
});
