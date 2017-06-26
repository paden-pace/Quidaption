


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
            }
        });

        //req.flash('success_msg', "You are registered and can now log-in");

        res.redirect('/teams');
    }
});


// passport.use(new LocalStrategy(
//   function(name, password, done) {
//     Team.getTeamByName(name, function(err, team){
//         if(err) throw err;
//         if(!team){
//             console.log("Not a user"); 
//             //return done(null, false, {message: 'Unknown User'});
//         }

//         Team.comparePassword(password, team.password, function(err, isMatch){
//             if(err) throw err;
//             if(isMatch){
//                 return done(null, team);
//             } else {
//                 console.log("Not the right password.")
//                 //return done(null, false, {message: 'Invalid password.'});
//             }
//         });
//     });
//   }
// ));

module.exports = router;

