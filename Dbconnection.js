var mysql=require('mysql');

var connection=mysql.createPool({
 
host:'localhost',
 user:'root',
 password:'',
 database:'myorders_1'
 
});

module.exports=connection;