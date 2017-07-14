


var currentUser = {};

var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

var User = require('../models/user');

var callbackFunc = function(cbMessage){
    console.log(cbMessage)
}

// Get Register
router.get('/register', function(req,res){
    res.render('register');
});

// Get Login
router.get('/login', function(req,res){
    res.render('login');
});

// Register User
router.post('/register', function(req,res){
    var name = req.body.name;
    var email = req.body.email;
    var username = req.body.username;
    var password = req.body.password;
    var password2 = req.body.password2;
    // var dm = req.body.dm;

    console.log(req.body);

    req.checkBody('name', 'Name is required').notEmpty();
    req.checkBody('email', 'Email is required').notEmpty();
    req.checkBody('email', 'Email is not valid').isEmail();
    req.checkBody('username', 'Username is required').notEmpty();
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
        var newUser = new User({
            name: name, 
            email: email, 
            username: username,
            password: password,
            // profile: {}
            // dm: dm
        });

        User.createUser(newUser, function(err, user){
            if(err) throw err;
            console.log(user);
        });

        //req.flash('success_msg', "You are registered and can now log-in");

        res.redirect('/tournaments');
    }
});


passport.use(new LocalStrategy(
  function(username, password, done) {
    User.getUserByUsername(username, function(err, user){
        if(err) throw err;
        if(!user){
            console.log("Not a user");
            //alert("It appears you have not registered that username yet");  
            //res.redirect('/tournaments');
            return done(null, false, {message: 'Unknown User'});
        } else {
            User.comparePassword(password, user.password, function(err, isMatch){
                if(err){
                    console.log("err from user.comparePassword")
                    console.log(err)
                };
                if(isMatch){
                    return done(null, user);
                } else {
                    console.log("Not the right password.")
                    return done(null, false, {message: 'Invalid password.'});
                }
            });
        }
    });
  }
));

// ============ This is the basic from Passport ============
// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({ username: username }, function(err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));

passport.serializeUser(function(user, done) {
   // if(user){console.log("passport.serializeUser user: " + user)};
     done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.getUserById(id, function(err, user) {
    done(err, user);
  });
});




router.post('/login',
    passport.authenticate('local'),
    function(req, res) {
        console.log("res in users/login");
        //console.log(res);
        console.log("req.user in users/login");
        console.log(req.user);
        if(req.user){
            console.log("Yes there is a req.user in users/login");
        } else {
            console.log("No there is not a req.user in users/login");
        }

        // If this function gets called, authentication was successful.
        // `req.user` contains the authenticated user.
        //res.redirect('/users/' + req.user.username);

        res.redirect('/');
    }
);

// router.post('/login', function(req, res, next) {
//   passport.authenticate('local', function(err, user, info) {
//     if (err) { return next(err); }
//     if (!user) { return res.redirect('/login'); }
//     req.logIn(user, function(err) {
//       if (err) { return next(err); }
//       return res.redirect('/users/' + user.username);
//     });
//   })(req, res, next);
// });

router.get('/logout', function(req, res){
    req.logout();
    req.flash('success_msg', 'You are logged out. Come again soon!')
    res.redirect('/tournaments');
})

module.exports = router;

