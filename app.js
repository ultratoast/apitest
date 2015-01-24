var express = require('express'),
	app = express(),
	// partials = require('express-partials'),
	path = require('path'),
	config = require('./config/config'),
	home = require('./routes/home'),
	api = require('./routes/api'),
	admin = require('./routes/admin')


app.set('views','views')
app.set('view engine','ejs')

app.use('/bower_components', express.static('bower_components'))
app.use('/static', express.static('static'))

app.use('/',home)
app.use('/home',home)
app.use('/api',api)
app.use('/admin',admin)



var server = app.listen(config.domain.port, config.domain.ip, function(error){
	var host = server.address().address,
		port = server.address().port
	console.log('api app started successfully, listening at http://'+host+':'+port)
	if (error) {
		console.log('error code: '+error)
	}
})