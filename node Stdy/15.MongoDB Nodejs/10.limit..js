var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("selva");
  //Return the first 1 place:
  dbo.collection("place").find().limit(1).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
