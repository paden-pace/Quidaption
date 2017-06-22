



var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

  mongoose.connect('mongodb://localhost/rollinit');
  var db = mongoose.connection;

var TeamSchema = mongoose.Schema({
    name: {
        type: String,
        index: true
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    tournaments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Tournament"
        }
    ],
    members: [
        {
            type: Schema.Types.ObjectId,
            ref: "Member"
        }
    ],
    chats: [
        {
            type: Schema.Types.ObjectId,
            ref: "Chat"
        }
    ],
    captains: [
        {
            type: Schema.Types.ObjectId,
            ref: "Captain"
        }
    ]

    //},
    // dm: {
    //     type: Boolean,
});

var Team = module.exports = mongoose.model('Team', TeamSchema);

module.exports.createTeam = function(newTeam, callback){
    bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newTeam.password, salt, function(err, hash) {
            newTeam.password = hash;
            newTeam.save(callback);
        });
    });
}

module.exports.getTeamByName = function(name, callback){
    var query = {name: name};
    Team.findOne(query, callback);
}

module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if(err) throw err;
        callback(null, isMatch);
    });
}

module.exports.getTeamById = function(id, callback){
    Team.findById(id, callback);
}