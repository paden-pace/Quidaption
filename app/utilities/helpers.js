// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");     

var callbackFunc = function(cbMessage){
    console.log(cbMessage)
}

// Helper functions for making API Calls
var helpers = {

    // This function hits our own server to retrieve the record of query results
    getTournaments: function() {
        console.log("helpers.getTournament Activated")
        return axios.get("/tournaments/user");
    },

    getAllTournaments: function() {
        console.log("helpers.getAllTournament Activated")
        return axios.get("/tournaments/all");
    },

    getUserAttendTournaments: function(){
        console.log("helpers.getTournament Activated")
        return axios.get("/tournaments/userattend");
    },

    getUserTournaments: function(){
        console.log("helpers.getTournament Activated")
        return axios.get("/tournaments/user");
    },

    attendTournament: function(tournamentID) {
        console.log("helpers.attendTournament Activated")
        console.log("helpers.attendTournament, tournament Name: ")
        console.log(tournamentID)
        return axios.post("/tournaments/attend",
        {
          tournamentID: tournamentID
        }).then(function (response) {
          console.log("no error in helpers.attendTournament")
          console.log(response.config.data);
          // var userObj = JSON.parse(response.config.data);
          //   console.log(userObj.username);
          //   setNewUser(userObj.username);
        })
        .catch(function (error) {
          console.log("YES error in helpers.attendTournament")
          console.log(error);
        });
    },

    checkUser: function(){
        console.log("helpers.checkUser Activated");
        return axios.get("/tournaments/user");
    },

    userLogout: function(){
        console.log("helpers.userLogOut Activated");
        return axios.get("/users/logout")
    }, 

    userLogin: function(username, password, setNewUser){
        console.log("helpers.userLogin Activated");
        console.log("username: " + username)
        console.log("password: " + password)
        //return axios.get("/users/login")
        axios.post('/users/login', {
          username: username,
          password: password
        })
        .then(function (response) {
          console.log("no error in helpers.userLogin")
          console.log(response.config.data);
          var userObj = JSON.parse(response.config.data);
            console.log(userObj.username);
            setNewUser(userObj.username);
        })
        .catch(function (error) {
          console.log("YES error in helpers.userLogin")
          console.log(error);
        });
    }, 

    userRegister: function(name, username, email, password, password2){
        console.log("helpers.userRegister Activated");
        console.log("name username email password")
        console.log(name + " / " + username + " / " + email +" / " + password)
        //return axios.get("/users/login")
        axios.post('/users/register', {
          name: name,
          username: username,
          email: email,
          password: password,
          password2: password2
        })
        .then(function (response) {
          console.log("no error in helpers.userRegister")
          console.log(response.config.data);
          // var userObj = JSON.parse(response.config.data);
          //   console.log(userObj.username);
          //   setNewUser(userObj.username);
        })
        .catch(function (error) {
          console.log("YES error in helpers.userLogin")
          console.log(error);
        });
    }, 

    goToLogin: function(){
        console.log("helpers.userLogIn Activated");
        return axios.get("/login")
    },

    goToRegister: function(){
        console.log("helpers.userLogOut Activated");
        return axios.get("/register")
    },

    getTeams: function() {
        console.log("helpers.getTeams Activated")
        return axios.get("/teams/user");
    },


    getUserCreatedTeams: function() {
        console.log("helpers.getCreatedTeams Activated")
        return axios.get("/teams/usercreated");
    },

    joinTeam: function(teamName, teamPassword) {
        console.log("helpers.joinTeam Activated")
        console.log("name username email password")
        console.log(teamName + " / " + teamPassword)
        return axios.post("/teams/join",
        {
          teamName: teamName,
          teamPassword: teamPassword
        }).then(function (response) {
          console.log("no error in helpers.userRegister")
          console.log(response.config.data);
          // var userObj = JSON.parse(response.config.data);
          //   console.log(userObj.username);
          //   setNewUser(userObj.username);
        })
        .catch(function (error) {
          console.log("YES error in helpers.userLogin")
          console.log(error);
        });
    },


};


// We export the API helper
module.exports = helpers;
