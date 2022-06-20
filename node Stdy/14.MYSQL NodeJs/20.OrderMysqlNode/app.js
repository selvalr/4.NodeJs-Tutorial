var mysql=require('mysql');
var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"mydb1"
});

con.connect(function(err,res,fields){
    if (err)
    throw err;
    con.query("SELECT * FROM Cust ORDER BY name",function(err,res){
        if(err)throw err;
        console.log(res);
    });
});