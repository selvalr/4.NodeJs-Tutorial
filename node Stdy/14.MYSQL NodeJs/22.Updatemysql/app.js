var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "mydb1"
});

con.connect(function(err) {
  if (err) throw err;
  var sql = "UPDATE Cust SET name = 'selva' WHERE name = 'Valley 345'";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result.affectedRows + " record(s) updated");
  });
});
