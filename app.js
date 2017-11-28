var express =  require('express');
var msg = require('./nod_teste');

var app =  express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
		res.render("home/index");
});

app.get('/admin', function(req, res){
	res.render("admin/form_add_noticia");
});

app.get('/noticia', function(req, res){
	res.render("noticias/noticias");
});

app.listen(3000, function(){
	console.log(msg());
});
