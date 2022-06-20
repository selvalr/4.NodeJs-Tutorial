var mysql=require('mysql');

var con=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"mydb1"
});

con.connect(function(err){
    if(err) throw err;
    var sql=("DELETE FROM Cust WHERE name='selva'");
    con.query(sql,function(err,res){
        if(err) throw err;
        console.log('dele'+res.affectedRows);

    });
});