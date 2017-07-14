var mongoose = require('mongoose');
var bcrypt = require('bcryptjs');
var Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/quidapp');
var db = mongoose.connection;

var CommentSchema = mongoose.Schema({
    user: {
        type: String,
        index: true
    },
    body: {
        type: String
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    tournament:{
        type: String
    }
});

var Comment = module.exports = mongoose.model('Comment', CommentSchema);

// module.exports.createComment = function(newComment, callback){
//     newComment.save(callback);
// }

// module.exports.getUserById = function(id, callback){
//     User.findById(id, callback);
// }