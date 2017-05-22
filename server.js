var express = require('express');
var path = require('path');
var passport = require('passport');
var localStrategy = require('passport-local').Strategy;
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var mongoose = require('mongoose');

var db = mongoose.connection;

    // "bcryptjs": "^2.4.3",
    // "express-messages": "^1.0.1",
    // "passport-http": "^0.3.0",


// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
//var logger = require("morgan");

var mongoose = require("mongoose");
//var Player = require("./models/Player.js");
//var Tournament = require("./models/Tournament.js");

var request = require('request');



// Initialize Express
var app = express();


// Use morgan and body parser with our app
//app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Make public a static dir
app.use(express.static("public"));

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname + "/home.html"))
})

// =========  Database configuration with mongoose ===============
// ---------  define local MongoDB URI ----------

//var databaseUri = 'mongodb://heroku_7787qsks:gp9jm8tkki1fks0g95rnac6of2@ds147551.mlab.com:47551/heroku_7787qsks';

// if (process.env.MONGODB_URI){
//     // this executes if this is being executed in heroku app
//     mongoose.connect(process.env.MONGODB_URI);
// } else {
//     // this ececutes if this is being executed on local machine
//     mongoose.connect(databaseUri);
// }

mongoose.connect('mongodb://localhost/quidapp');

// =========  End databse configuration  ================

var db = mongoose.connection;

// Show any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// Once logged in to the db through mongoose, log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});



// Listen on port 8001
app.listen(8020, function() {
  console.log("App running on port 8020");
});
