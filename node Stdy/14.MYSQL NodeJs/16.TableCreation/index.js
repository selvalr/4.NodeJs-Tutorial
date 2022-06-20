var mysql=require("mysql");
 
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"mydb1"
});

con.connect(function(err,result){
    if (err) throw err;
    console.log("connect");
    var sql="CREATE TABLE Cust(name VARCHAR(20))";
    con.query(sql,function(err,data){
        if(err) throw err;
        console.log("table cre");
    });
   
})