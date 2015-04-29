var ejs = require("ejs");
var mysql = require('./mysql');

function pizzaPage(req,res)
{
	
	ejs.renderFile('./views/pizza.ejs',function(err, result) {
  		// render on success
        if (!err) {
            res.end(result);
        }
        // render or error
        else {
            res.end('An error occurred');
            console.log(err);
        }
	 });
}

function buildYourOwnPage(req,res)
{
	
	ejs.renderFile('./views/buildYourOwn.ejs',function(err, result) {
  		// render on success
        if (!err) {
            res.end(result);
        }
        // render or error
        else {
            res.end('An error occurred');
            console.log(err);
        }
	 });
}

function sidesPage(req,res)
{
	
	ejs.renderFile('./views/sides.ejs',function(err, result) {
  		// render on success
        if (!err) {
            res.end(result);
        }
        // render or error
        else {
            res.end('An error occurred');
            console.log(err);
        }
	 });
}

function dealsPage(req,res)
{
	
	ejs.renderFile('./views/deals.ejs',function(err, result) {
  		// render on success
        if (!err) {
            res.end(result);
        }
        // render or error
        else {
            res.end('An error occurred');
            console.log(err);
        }
	 });
}

function findUsPage(req,res)
{
	
	ejs.renderFile('./views/findUs.ejs',function(err, result) {
  		// render on success
        if (!err) {
            res.end(result);
        }
        // render or error
        else {
            res.end('An error occurred');
            console.log(err);
        }
	 });
}

function faqsPage(req,res)
{
	
	ejs.renderFile('./views/faqs.ejs',function(err, result) {
  		// render on success
        if (!err) {
            res.end(result);
        }
        // render or error
        else {
            res.end('An error occurred');
            console.log(err);
        }
	 });
}

function ourStoryPage(req,res)
{
	
	ejs.renderFile('./views/ourStory.ejs',function(err, result) {
  		// render on success
        if (!err) {
            res.end(result);
        }
        // render or error
        else {
            res.end('An error occurred');
            console.log(err);
        }
	 });
}

function contactUsPage(req,res)
{
	
	ejs.renderFile('./views/contactUs.ejs',function(err, result) {
  		// render on success
        if (!err) {
            res.end(result);
        }
        // render or error
        else {
            res.end('An error occurred');
            console.log(err);
        }
	 });
}

function checkOutPage(req,res)
{
	console.log("here")
	ejs.renderFile('./views/checkOut.ejs',function(err, result) {
  		// render on success
        if (!err) {
            res.end(result);
        }
        // render or error
        else {
            res.end('An error occurred');
            console.log(err);
        }
	 });
}

function placeOrder(req,res)
{
	var query = "insert into customerinfo values('','"+req.param("date")+"','"+req.param("state")+"','"+req.param("city")+"','"+req.param("zip")+"')";
	console.log("Query is:"+query);
	
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			  var orderid = results.insertId;
			  //res.send({"order":"successfull"});
			  var orders=JSON.parse(req.param("orderDetails"));
				console.log(orders);
				var orderLength=orders.length;
				for (var i =0; i<orderLength; i++)
				{
					console.log(orders[i].name);
					var insertUserQuery="insert into orderinfo value(null,"+orderid+",'"+orders[i].vegnv+"','"+orders[i].crust+"','"+orders[i].topping1+"','"+orders[i].topping2+"','"+orders[i].topping3+"','"+orders[i].topping4+"','"+orders[i].topping5+"','"+orders[i].topping6+"','"+orders[i].topping7+"','"+orders[i].topping8+"','"+orders[i].side+"',"+orders[i].cost+",'"+orders[i].name+"')";
					console.log("Query is:"+insertUserQuery);
					mysql.fetchData(function(err,results){
						if(err){
							throw err;
						}
						else 
						{
							res.send({"order":"successfull"});
						}  
					},insertUserQuery);
				}
		}  
	},query);
	
}

function likeUs(req,res)
{
	var getLikes="select password from adminlogin where name='likes'";
	console.log("Query is:"+getLikes);
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			var likes=+(results[0].password) + +1;
			console.log(likes);
			var putLikes="update adminlogin set password="+likes+" where name='likes'";
			console.log("Query is:"+putLikes);
			
			mysql.fetchData(function(err,results){
				if(err){
					throw err;
				}
				else 
				{
					res.send({"liked":"successfull"});
				}
			},putLikes);
		}
	},getLikes);
}

function pageVisits(req,res)
{
	var getVisits="select password from adminlogin where name='count'";
	console.log("Query is:"+getVisits);
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			var visits=+(results[0].password) + +1;
			console.log(visits);
			var putVisits="update adminlogin set password="+visits+" where name='count'";
			console.log("Query is:"+putVisits);
			
			mysql.fetchData(function(err,results){
				if(err){
					throw err;
				}
				else 
				{
					res.send({"visits":"updates"});
				}
			},putVisits);
		}
	},getVisits);
}

function insertUser(req,res)
{
	console.log("hi");
	req.session.name=req.param("username");
	console.log("session name:"+req.session.name);
	var insertUserQuery="insert into people value('"+req.param("username")+"')";
	console.log("Query is:"+insertUserQuery);
	mysql.fetchData(function(err,results){
		if(err){
			throw err;
		}
		else 
		{
			res.render('successInsert', { name: req.param("username") });
		}  
	},insertUserQuery);
}

function successInsert(req,res){
	  res.render('successInsert', { name: req.session.name });
	};


	
exports.pizzaPage=pizzaPage;
exports.buildYourOwnPage=buildYourOwnPage;
exports.sidesPage=sidesPage;
exports.dealsPage=dealsPage;
exports.findUsPage=findUsPage;
exports.faqsPage=faqsPage;
exports.ourStoryPage=ourStoryPage;
exports.contactUsPage=contactUsPage;
exports.checkOutPage=checkOutPage;
exports.placeOrder=placeOrder;
exports.likeUs=likeUs;
exports.pageVisits=pageVisits;
exports.insertUser=insertUser;
exports.successInsert=successInsert;