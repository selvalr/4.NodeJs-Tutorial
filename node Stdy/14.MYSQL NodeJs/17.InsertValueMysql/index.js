var mysql=require('mysql');

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"mydb1",
    
});

con.connect(function(err,res){
    if(err) throw err
    console.log("connr");
    var sql="INSERT INTO  Cust(name,address) VALUES ?";
    var values=[['selva'],['abi'],['bala'],['karthi'],['bass']];
    con.query(sql,[values],function(err,res){
        if(err) throw err;
        console.log(res.affectedRows+' row added');
    });
});