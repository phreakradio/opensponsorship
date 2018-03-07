// Setup
var express     = require('express');
var app         = express();
var mongoose    = require('mongoose');
var port        = process.env.PORT || 3000;
var database    = process.env.MONGODB_URI || require('./config/database');

var morgan = require('morgan');                     // Log requests to console
var bodyParser = require('body-parser');            // Pull information from POST
mongoose.connect(database.url);                     // Connect to DB

app.use(express.static(__dirname + '/public'))      //Static location
app.use(morgan('dev'));                             //Debug all requests
app.use(bodyParser.urlencoded({'extended':'true'}));//Parse application/x-www-form-urlencoded
app.use(bodyParser.json());                         //Parse application/json
app.use(bodyParser.json({ type:'application/vnd.api+json' })); //parse application/vnd.api+json as json

// Set up routes
require('./app/routes.js')(app);

//Launch app
app.listen(port,function(){
    console.log("App is live on port: " + port);
});