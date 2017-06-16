// *********************************************************************************
// html-routes.js - this file offers a set of routes for sending users to the various html pages
// *********************************************************************************

// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function (app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html


  app.get("/", function(req, res){
    res.sendFile(path.join(__dirname+ "./../public/home.html"))
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

  app.get("/login", function(req, res){
    res.sendFile(path.join(__dirname + "./../public/html/login.html"))
  });

  app.get("/register", function(req, res){
    res.sendFile(path.join(__dirname + "./../public/html/register.html"))
  });


};