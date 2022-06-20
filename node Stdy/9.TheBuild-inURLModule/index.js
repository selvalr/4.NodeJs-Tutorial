var url=require('url');

var addr="http://localhost:8080/defa.html?year=2018&month=june";
//Parse the address:
var q=url.parse(addr,true);

/*The parse method returns an object containing url properties*/


console.log(addr);
console.log(q.host);
console.log(q.path);
console.log(q.search);

/*The query property returns an object with all the querystring parameters as properties:*/

var qdata=q.query;
console.log(qdata.month);