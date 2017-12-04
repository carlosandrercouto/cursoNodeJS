var app = require('./config/server');

var rotaNoticias = require('./app/routes/noticia')(app);

var rotaHome = require('./app/routes/home')(app);

var rotaAdmin = require('./app/routes/admin')(app);

app.listen(3000, function(){
	console.log("Servidor Rodando!!!");
});
