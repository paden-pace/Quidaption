
// Require mongoose
var mongoose = require("mongoose");
// Create a schema class
var Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');
mongoose.connect('mongodb://localhost/quidapp');

  var db = mongoose.connection;

// Create the Comment schema
var AttendeeSchema = new Schema({
    name: {
        type: String,
        index: true
    }
});


// Create the Chat model with the ChatSchema
var Attendee = mongoose.model("Attendee", AttendeeSchema);

// Export the Chat model
module.exports = Attendee;