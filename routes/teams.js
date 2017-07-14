


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
var Team = require('../models/team');
var Chat = require('../models/chat');


// Register Team
router.post('/register', function(req,res){
    console.log('req');
    console.log(req);
    var userID = req.user._id;
    console.log("userID1");
    console.log(userID);
    
    var name = req.body.name;
    var email = req.body.email;
    var password = req.body.password;
    var password2 = req.body.password2;
    // var dm = req.body.dm;

    console.log(req.body);

    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('password', 'Password is required').notEmpty();
    req.checkBody('password2', 'Passwords do not match').equals(req.body.password);

    var errors = req.validationErrors();
    if(errors){
        // res.render('register',{
        //     errors:errors
        // });
        console.log('yes errors')
        console.log(errors);
        for (i=0; i < errors.length; i++){
            console.log(errors[i].msg);
        }
    } else {
        var newTeam = new Team({
            name: name, 
            email: email, 
            password: password,
        });

        Team.createTeam(newTeam, function(err, team){
            console.log("team")
            console.log(team)
            if (err) {
                console.log(err);
                }
                // Otherwise
            else {
                console.log("userID2");
                console.log(userID);
                User.findOneAndUpdate({ "_id": userID }, {$push: {"teams": team}})
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
                User.findOneAndUpdate({ "_id": userID }, {$push: {"createdTeams": team}})
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


router.get('/user', function (req, res) {
    console.log("req.user from routes/teams/user")
    console.log(req.user)
    if (req.user){
        User.findOne({_id: req.user._id}).populate("teams")
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


router.get('/usercreated', function (req, res) {
    console.log("req.usercreated from routes/teams/user")
    console.log(req.user)
    if (req.user){
        User.findOne({_id: req.user._id}).populate("createdTeams")
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


// Join Team
router.post('/join',
    function(req, res) {
        console.log("res in team/join");
        //console.log(res);
        console.log("req.user in team/join");
        console.log(req.user);
        console.log("req.body in team/join");
        console.log(req.body);

        var teamName = req.body.teamName;
        var teamPassword = req.body.teamPassword;
        var userID = req.user._id;

        teamChecker(userID, teamName, teamPassword);
        

        if(teamName){
            console.log("Yes there is a teamName in team/join");
            
        } else {
            console.log("No there is not a teamName in team/join");
        }
        // If this function gets called, authentication was successful.
        // `req.user` contains the authenticated user.
        //res.redirect('/users/' + req.user.username);
        res.redirect('/');
    }
);

var teamChecker = function(userID, teamName, teamPassword, done) {
    Team.getTeamByName(teamName, function(err, team){
        if(err) throw err;
        if(!team){
            console.log("Not a Team");
            //alert("It appears you have not registered that username yet");  
            //res.redirect('/tournaments');
            return done(null, false, {message: 'Unknown Team'});
        } else {
            Team.comparePassword(userID, teamPassword, team, function(err, isMatch){
                console.log("teamPassword from Team.comparePassword")
                console.log(teamPassword)
                console.log("team.password from Team.comparePassword")
                console.log(team.password)
                if(err){
                    console.log("err from Team.comparePassword")
                    console.log(err)
                };
                if(isMatch){
                    console.log("That is the right password.")
                    User.findOneAndUpdate({ "_id": userID }, {$push: {"teams": team}})
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
                } else {
                    console.log("Not the right password.")
                    //return done(null, false, {message: 'Invalid password.'});
                }
            });
        }
    });
  };

// passport.serializeUser(function(user, done) {
//    // if(user){console.log("passport.serializeUser user: " + user)};
//      done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
//   User.getUserById(id, function(err, user) {
//     done(err, user);
//   });
// });




// router.post('/login',
//     passport.authenticate('local'),
//     function(req, res) {
//         console.log("res in users/login");
//         //console.log(res);
//         console.log("req.user in users/login");
//         console.log(req.user);
//         if(req.user){
//             console.log("Yes there is a req.user in users/login");
//         } else {
//             console.log("No there is not a req.user in users/login");
//         }

//         // If this function gets called, authentication was successful.
//         // `req.user` contains the authenticated user.
//         //res.redirect('/users/' + req.user.username);

//         res.redirect('/');
//     }
// );



module.exports = router;

