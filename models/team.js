



var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

  mongoose.connect('mongodb://localhost/quidapp');
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
            ref: "User"
        }
    ],
    chats: [
        {
            type: Schema.Types.ObjectId,
            ref: "Chat"
        }
    ],
    owner: [
        {
            type: Schema.Types.ObjectId,
            ref: "User"
        }
    ]
});

var Team = module.exports = mongoose.model('Team', TeamSchema);

module.exports.createTeam = function(newTeam, callback){
    newTeam.save(callback);
}

module.exports.getTeamByName = function(name, callback){
    var query = {name: name};
    Team.findOne(query, callback);
}

module.exports.comparePassword = function(userID, candidatePassword, team, callback){
    console.log("module team candidatePassword")
    console.log(candidatePassword)
    console.log("module team team.password")
    console.log(team.password)
    if(candidatePassword == team.password){
        console.log("module team passwords MATCH")
        callback(null, true);
    } else {
        console.log("module team passwords don't match")
    }
}

module.exports.getTeamById = function(id, callback){
    Team.findById(id, callback);
}