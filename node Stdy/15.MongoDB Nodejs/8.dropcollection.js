/*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("selva");
  dbo.createCollection("customers",function(err,res){
  if (err) throw err;
    
   console.log("Collection ");
    db.close();
  });
});
*/


var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("selva");
  dbo.collection("customers").drop(
  function(err,delOk){
  if (err) throw err;
    if(delOk)
   console.log('dele');
    db.close();
  });
});