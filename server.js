
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
var request = require("request");
var app = express();
var PORT = process.env.PORT || 4000;

//////////////////////////MODELS/////////////////////////////

//var Model = require("model from model folder");
var Class = require('./models/Classes.js')
var Club = require('./models/Clubs.js')
var Comment = require('./models/Comments.js')
var Event = require('./models/Events.js')
var Post = require('./models/Posts.js')
var School = require('./models/Schools.js')
var User = require('./models/Users.js')


/////////////////////APP USES/////////////////////////////////
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(function(req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
//and remove cacheing so we get the most recent comments
  res.setHeader("Cache-Control", "no-cache");
  next();
});
app.use(express.static("public"));
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
    extended: false
}));


mongoose.Promise = Promise;

/////////////////////////LOCAL HOST MONGOOSE CONNECTION////////////////////////////

mongoose.connect("mongodb://localhost/rottenpotatoes", {
    useMongoClient: true
});

//////////////////////////MLAB MONGOOSE CONNECTION///////////////////////////////////


// mongoose.connect("mongodb://USERNAME:PASSWORD@ds155424.mlab.com:55424/rottenpotatoes", {
//     useMongoClient: true
// });


var db = mongoose.connection;

///////////////////////////// Show any mongoose errors///////////////////////////


db.on("error", function(error) {
    console.log("Mongoose Error: ", error);
});

db.once("open", function() {
    console.log("Mongoose connection successful.");
});


////////////////////////////////DB ROUTES///////////////////////////////////

//app.get("/api", function (req,res){
	//Potato.find({}).sort( { image: -1 , "_id": 1} ).then(function(data){
		//res.send(data);
	//});
//});


////////////////////////////////PORT LISTENER/////////////////////////////////

app.listen(PORT, function() {
  console.log("App running on port 4000!");
});
