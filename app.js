var express = require('express');
var path = require('path');
var mongoose = require('mongoose');
var config = require('./config/database');
var bodyParser = require('body-parser');
//connect to DB
mongoose.connect(config.database);
var db= mongoose.connection;
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function(){
    console.log('Connected to MongoDB')

})

// Init app
var app=express();

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Set public folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.send('working...');
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Start the server
var port = 3000;
app.listen(port, function() {
  console.log('Server started on port ' + port); 
})