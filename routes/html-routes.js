// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

mongoose.connect('mongodb://localhost/rollinit');
var db = mongoose.connection;

var Tournament = require('../models/tournament');
var User = require('../models/user');

// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html


  app.get("/", function(req, res){
    if(req.user){
      console.log("yes user")
      console.log(req.user)
      res.sendFile(path.join(__dirname+ "./../public/home.html"))
    } else {
      console.log("no user")
      res.sendFile(path.join(__dirname+ "./../public/home.html"))
    }
  });

  app.get("/game", function(req, res){
    res.sendFile(path.join(__dirname + "./../public/html/game.html"))
  });

  app.get("/gameMLQ", function(req, res){
    res.sendFile(path.join(__dirname + "./../public/html/gameMLQ.html"))
  });

  app.get("/tournaments", function(req, res){
    res.sendFile(path.join(__dirname + "./../public/html/tournaments.html"))
  });

  app.get("/profile", function(req, res){
    res.sendFile(path.join(__dirname + "./../public/html/profile.html"))
  });

  app.get("/login", function(req, res){
    res.sendFile(path.join(__dirname + "./../public/html/login.html"))
  });

  app.get("/teams", function(req, res){
     res.sendFile(path.join(__dirname + "./../public/html/teams.html"))
   });

  app.get("/register", function(req, res){
    res.sendFile(path.join(__dirname + "./../public/html/register.html"))
  });


};