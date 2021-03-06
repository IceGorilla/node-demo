// node resolve path to express in node_modules,
// you can use logger the same way if you put logger in node_modules
var express = require('express');

// path to module folder, logger here is the single function that we exported in the module
var logger = require('./logger');

// auth is an object with functions defined based on the one's we exported
var auth = require('./auth_module');

var app = express();

// request -> middleware (as many as you want) -> node server response
app.use(logger);

// what happens if we don't call next?
// app.use(auth.goNoFurther);

// stop requests at the point where it's added in middleware stack
app.use(auth.denied);


// after the middleware, the router is called and handles the request
// but in this case auth.denied stops us from getting here
// try commenting out the auth.denied middleware
app.get('/', function(req, res) {
	res.send('Hello World!');
});

var server = app.listen(3000, function() {
	console.log("Listening on port %d", server.address().port);
});
