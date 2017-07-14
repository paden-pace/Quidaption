


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


router.get('/all', function (req,res){
    console.log("req.user")
    console.log(req.user)
    Tournament.find({}).populate("registeredTeams")
    .exec(function (error, doc) {
        // Send any errors to the browser
        if (error) {
            res.send(error);
        }
        // Or send the doc to the articles in handlebars
        else {
            res.send(doc);
        }
    })
})


router.get('/user', function (req, res) {
    console.log("req.user from routes/tournaments/user")
    console.log(req.user)
    if (req.user){
        User.findOne({_id: req.user._id}).populate("tournaments")
        .exec(function (error, doc) {
            // Send any errors to the browser
            if (error) {
                res.send(error);
            }
            // Or send the doc to the articles in handlebars
            else {
                res.send(doc);
            }
        })
    }
});


router.get('/userattend', function (req, res) {
    console.log("req.user from routes/tournaments/userattend")
    console.log(req.user)
    if (req.user){
        User.findOne({_id: req.user._id}).populate("attendingTournaments")
        .exec(function (error, doc) {
            // Send any errors to the browser
            if (error) {
                res.send(error);
            }
            // Or send the doc to the articles in handlebars
            else {
                res.send(doc);
            }
        })
    }
});

router.get('/checkUser', function (req, res) {
    console.log("/checkUser req.user")
    console.log(req.user)
    User.findOne({_id: req.user._id})
    .exec(function (error, doc) {
        // Send any errors to the browser
        if (error) {
            res.send(error);
        }
        // Or send the doc to the articles in handlebars
        else {
            res.send(doc);
        }
    })
});
    


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
    var email = req.body.email;
    var password = req.body.password;
    var password2 = req.body.password2;
    var league = req.body.league;
    var date = req.body.date;
    var location = req.body.location;
    var information = req.body.information;

    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
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
            email: email,
            password: password,
            league: league,
            date: date,
            location: location, 
            information: information
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

        res.redirect('/');
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



// Join Team
router.post('/attend',
    function(req, res) {
        console.log("res in tournament/attend");
        //console.log(res);
        console.log("req.user in tournament/attend");
        console.log(req.user);
        console.log("req.body in tournament/attend");
        console.log(req.body);

        var tournamentID = req.body.tournamentID;
        // var teamPassword = req.body.teamPassword;
        var userID = req.user._id;

        Tournament.getTournamentById(tournamentID, function(err,tournament){
            if(err) throw err;
            if(!tournament){
                console.log("Not a Team");
                alert("It appears you have not registered that username yet");  
                res.redirect('/');
                return done(null, false, {message: 'Unknown Team'});
            } else {
                console.log("That is the right password.")
                User.findOneAndUpdate({ "_id": userID }, {$push: {"attendingTournaments": tournament}})
            // Execute the above query
                .exec(function(err, doc) {
                    console.log("User Push attending tournament worked")
                    if (err) {
                        console.log(err);
                    }
                    else {
                        Tournament.findOneAndUpdate({ "_id": tournamentID }, {$push: {"attendees": userID}})
                        console.log("Tournament Push attendees worked")
                        //res.send(doc);
                        //res.redirect('/');
                    }
                });
            }
        });
        // If this function gets called, authentication was successful.
        // `req.user` contains the authenticated user.
        //res.redirect('/users/' + req.user.username);
        res.redirect('/');
    }
);

// var tournamentChecker = function(userID, teamName, teamPassword, done) {
//     Team.getTeamByName(teamName, function(err, team){
//         if(err) throw err;
//         if(!team){
//             console.log("Not a Team");
//             //alert("It appears you have not registered that username yet");  
//             //res.redirect('/tournaments');
//             return done(null, false, {message: 'Unknown Team'});
//         } else {
//             Team.comparePassword(userID, teamPassword, team, function(err, isMatch){
//                 console.log("teamPassword from Team.comparePassword")
//                 console.log(teamPassword)
//                 console.log("team.password from Team.comparePassword")
//                 console.log(team.password)
//                 if(err){
//                     console.log("err from Team.comparePassword")
//                     console.log(err)
//                 };
//                 if(isMatch){
//                     console.log("That is the right password.")
//                     User.findOneAndUpdate({ "_id": userID }, {$push: {"teams": team}})
//                 // Execute the above query
//                     .exec(function(err, doc) {
//                         if (err) {
//                             console.log(err);
//                         }
//                         else {
//                             //res.send(doc);
//                             //res.redirect('/tournaments');
//                         }
//                     });
//                 } else {
//                     console.log("Not the right password.")
//                     //return done(null, false, {message: 'Invalid password.'});
//                 }
//             });
//         }
//     });
//   };



module.exports = router;

