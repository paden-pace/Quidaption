// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");     

// Helper functions for making API Calls
var helpers = {

    // This function hits our own server to retrieve the record of query results
    getTournaments: function() {
        console.log("helpers.getTournament Activated")
        return axios.get("/tournaments/all");
    },

    getUserTournaments: function(){
        console.log("helpers.getTournament Activated")
        return axios.get("/tournaments/user");
    },

    checkUser: function(){
        console.log("helpers.checkUser Activated");
        return axios.get("/tournaments/user");
    },

    userLogout: function(){
        console.log("helpers.userLogOut Activated");
        return axios.get("/users/logout")
    }, 

    userLogin: function(){
        console.log("helpers.userLogOut Activated");
        return axios.get("/users/login")
    }, 

    userRegister: function(){
        console.log("helpers.userLogOut Activated");
        return axios.get("/users/register")
    }


};


// We export the API helper
module.exports = helpers;
