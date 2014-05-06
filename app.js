var express = require('express');
var _ = require('underscore');
var fs = require('fs');
var app = express();


app.get('/', function(req, res) {
	res.send('<h1>Hello Boulder</h1>');
});

app.get('/hi', function(req, res) {
	res.send('<h1>Welcome to this side of the internet!</h1>');
});

app.get('/mood', function(req, res) {
	var currentMood = _.sample(['happy','sad','anxious','weepy','despondent','GUZZLING BEERS!']);
	res.send("The mood of the second is: "+currentMood);
});

app.get('/game', function(req, res) {
	res.send('<h1>Do you want to play a game!?</h1>');
});

app.get('/success', function(req,res) {
	res.send('Good job!! Form Submittal successful!');
})

app.get('/form', function(req,res) {
	fs.readFile('index.html',function(err,data) {
		if (err) throw err;
 		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(data);
	});
});
app.post('/formsubmit', function(req,res) {
	res.redirect('/success');
})
var server = app.listen(8952, function() {
	console.log('Express server listening on port ' + server.address().port);
});
