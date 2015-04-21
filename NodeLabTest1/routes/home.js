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
exports.insertUser=insertUser;
exports.successInsert=successInsert;