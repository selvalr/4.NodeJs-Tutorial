var mysql=require('mysql');

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root"
});
con.connect(function(err){
    if(err) throw err;
    console.log("connwct");
    con.query("CREATE DATABASE mydb1",function(err,data){
        if (err) throw err;
        console.log("Database created");
    });
});