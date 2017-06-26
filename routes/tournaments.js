


var currentUser = {};

var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');

mongoose.connect('mongodb://localhost/quidapp');
var db = mongoose.connection;

var User = require('../models/user');
var Tournament = require('../models/tournament');


// router.get('/all', function (req, res) {
//     console.log("req.user")
//     console.log(req.user)
//     User.findOne({_id: req.user._id}).populate("tournaments")
//     .exec(function (error, doc) {
//         // Send any errors to the browser
//         if (error) {
//             res.send(error);
//         }
//         // Or send the doc to the articles in handlebars
//         else {
//             res.send(doc);
//         }
//     })
// });
    


// Add Tournament
router.post('/add', function(req,res){
    console.log('req.user');
    console.log(req.user);
    var userID = req.user._id;
    console.log("userID1");
    console.log(userID);

    console.log('req.body');
    console.log(req.body);

    
    var name = req.body.name;
    var password = req.body.password;
    var password2 = req.body.password2;
    var league = req.body.league;
    var date = req.body.date;
    var location = req.body.location;

    console.log(req.body);

    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('password2', 'Passwords do not match').equals(req.body.password);
    req.checkBody('league', 'League is required').notEmpty();
    req.checkBody('date', 'Date is required').notEmpty();
    req.checkBody('location', 'Location is required').notEmpty();
    

    var errors = req.validationErrors();
    if(errors){
        console.log('yes errors')
        console.log(errors);
        for (i=0; i < errors.length; i++){
            console.log(errors[i].msg);
        }
    } else {
        var newTournament = new Tournament({
            name: name, 
            password: password,
            league: league,
            date: date,
            location: location
        });

        Tournament.createTournament(newTournament, function(err, tournament){
            console.log("tournament");
            console.log(tournament);
            if (err) {
                console.log(err);
                }
                // Otherwise
            else {
                console.log("userID2");
                console.log(userID);
                User.findOneAndUpdate({ "_id": userID }, {$push: {"tournaments": tournament}})
                // Execute the above query
                .exec(function(err, doc) {
                    if (err) {
                        console.log(err);
                    }
                    else {
                        //res.send(doc);
                        //res.redirect('/tournaments');
                    }
                });
            }
        });

        //req.flash('success_msg', "You are registered and can now log-in");

        res.redirect('/tournaments');
    }
});

router.get("/delete/:id", function(req, res) {
  Tournament.findByIdAndRemove(req.params.id, function (err, doc){
    if(err) { 
      throw err; 
    } else {
      res.redirect('/tournaments');
    };
  });
});


module.exports = router;

