
var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/quidapp');
var db = mongoose.connection;

var TournamentSchema = mongoose.Schema({
    name: {
        type: String,
    },
    league: {
        type: String,
    },
    date: {
        type: String, 
    },
    location: {
        type: String,
    },
    registeredTeams: [
        {
            type: Schema.Types.ObjectId,
            ref: "Tournament"
        }
    ]
});

var Tournament = module.exports = mongoose.model('Tournament', TournamentSchema);

module.exports.createTournament = function(newTournament, callback){
   newTournament.save(callback);
}

module.exports.getTournamentByName = function(name, callback){
    var query = {name: name};
    Tournament.findOne(query, callback);
}

module.exports.getTournamentById = function(id, callback){
    Tournament.findById(id, callback);
}