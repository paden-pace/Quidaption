
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/quidapp');
var db = mongoose.connection;

var TournamentSchema = mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
    league: {
        type: String
    },
    date: {
        type: String
    },
    location: {
        type: String
    },
    information: {
        type: String
    },
    registeredTeams: [
        {
            type: Schema.Types.ObjectId,
            ref: "Team"
        }
    // ],
    // attendees: [
    //     {
    //         name: String,
    //     }
    // ],
    // comments: [
    //     {
    //         type: Schema.Types.ObjectId,
    //         ref: "Comment"
    //     }
    ]
});

var Tournament = module.exports = mongoose.model('Tournament', TournamentSchema);

module.exports.createTournament = function(newTournament, callback){
    bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(newTournament.password, salt, function(err, hash) {
            newTournament.password = hash;
            newTournament.save(callback);
        });
    });
}


module.exports.comparePassword = function(candidatePassword, hash, callback){
    bcrypt.compare(candidatePassword, hash, function(err, isMatch) {
        if(err) throw err;
        callback(null, isMatch);
    });
}
module.exports.getTournamentByName = function(name, callback){
    var query = {name: name};
    Tournament.findOne(query, callback);
}

module.exports.getTournamentById = function(id, callback){
    Tournament.findById(id, callback);
}