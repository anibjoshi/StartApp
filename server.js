var express 		= require('express'),
	app 			= express(),
	bodyParser 		= require('body-parser'),
	mongoose		= require('mongoose'),
	userController  = require('./server/controllers/userController')


mongoose.connect('mongodb://localhost:27017/startApp');
app.use(bodyParser());

app.get('/',function(req,res) {
	res.sendFile(__dirname+'/client/views/index.html');
});

app.use('/scripts',express.static(__dirname + '/client/scripts'));
app.get('/api/users',userController.list);
app.post('/api/users',userController.create);
app.listen(3000,function() {
	console.log('Server listening on port 3000..');
});