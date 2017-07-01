// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");     

// Helper functions for making API Calls
var helpers = {

  // This function hits our own server to retrieve the record of query results
  getTournaments: function() {
    return axios.get("/tournaments/all");
  },

//   // This function posts new searches to our database.
//   postArticle: function(newArticle) {
//     console.log("Value from helpers.js")
//     console.log(newArticle);
//     return axios.post("/api", { 
//       title: newArticle.title,
//       date: newArticle.date,
//       url: newArticle.url });
//   },

//     // This function posts new searches to our database.
//   deleteArticle: function(id) {
//     console.log("Delete Value from helpers.js")
//     console.log(id);
//   //   var thisId = $(this).attr("data-id");
//   //   console.log("thisId");
//   //   console.log(thisId);
//     return axios.post("/delete", { id: id });
//   //     date: newArticle.date,
//   //     url: newArticle.url });
    
//   }
};



// We export the API helper
module.exports = helpers;
