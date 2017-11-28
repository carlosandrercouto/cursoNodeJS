var express =  require('express');
var app =  express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.send("<html><body><h1>Portal de Noticias</h1><body></html>");
});

app.get('/tecnologia', function(req, res){
	res.render("secao/tecnologia");
});

app.listen(3000, function(){
	console.log("Servidor rodando com express");
}); 
