
// Require mongoose
var mongoose = require("mongoose");
// Create a schema class
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');
mongoose.connect('mongodb://localhost/quidapp');

  var db = mongoose.connection;

// Create the Comment schema
var ChatSchema = new Schema({
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
    team: {
      type: String
    }
});


// Create the Chat model with the ChatSchema
var Chat = mongoose.model("Chat", ChatSchema);

// Export the Chat model
module.exports = Chat; 