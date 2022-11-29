var db = require('../Dbconnection');
var Orders={
	getAllOrders:function(callback){
		return db.query("Select * from orders",callback);
	},
	getOrdersById:function(id,callback){
		return db.query("select * from orders where Id=?",[id],callback);
	},
	addOrders:function(orders,callback){
		return db.query("Insert into orders(name,address,day) values(?,?,?)",[orders.name,orders.address,orders.day],callback);
	},
	deleteOrders:function(id,callback){
		return db.query("delete from orders where Id=?",[id],callback);
	},
	updateOrders:function(id,orders,callback){
		return db.query("update orders set name=?,address=?,day=? where Id=?",[orders.name,orders.address,orders.day,id],callback);
	}
};
module.exports=Orders;
