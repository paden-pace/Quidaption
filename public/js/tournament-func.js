


$(document).ready(function() {

    console.log("/tournaments/all activated")
    $(".extend-button").on('click', function(){
		 console.log("extende pressed");
	});


//.extend-div

    // $.getJSON("/tournaments/all", function(req, res) {
    //     if(req.tournaments.length>0){
    //         // console.log("req.tournaments");
    //         // console.log(req.tournaments);
    //         $("#current-tournaments").empty();
    //         var tournamentsArray = req.tournaments;
    //         for (var i = 0; i< tournamentsArray.length; i++){
    //             $("#current-tournaments").append("<div data-id='" + tournamentsArray[i]._id + "'>" 
    //             + "<h4 class='tournament-name'>Name: " + tournamentsArray[i].name + "</h4>" 
    //             + "<h5 class='tournament-date'>Date: " + tournamentsArray[i].date + "</h5>"
    //             + "<h5 class='tournament-age tournament-league" + tournamentsArray[i]._id +" hide'>League: " + tournamentsArray[i].league + "</h5>"
    //             + "<h5 class='tournament-gender tournament-location" + tournamentsArray[i]._id +" hide'>Location: " + tournamentsArray[i].location + "</h5>"
    //             // + "<h5 class='tournament-race tournament-race" + tournamentsArray[i]._id +" hide'>Race: " + tournamentsArray[i].race + "</h5>"
    //             +"<button data-id='" + tournamentsArray[i]._id + "' class='expand-tournament expand-tournament" + tournamentsArray[i]._id +"'>Expand</button> "
    //             +"<button data-id='" + tournamentsArray[i]._id + "' class='close-tournament close-tournament" + tournamentsArray[i]._id +" hide'>Close</button> "
    //             +"<button data-id='" + tournamentsArray[i]._id + "' class='delete-tournament'>Delete</button>"
    //             + "</div>");
    //             console.log(i);
    //             console.log("tournamentsArray[i]");
    //             console.log(tournamentsArray[i]);

    // // name: {
    // //     type: String,
    // // },
    // // email: {
    // //     type: String,
    // // },
    // // password: {
    // //     type: String,
    // // },
    // // league: {
    // //     type: String,
    // // },
    // // date: {
    // //     type: String, 
    // // },
    // // location: {
    // //     type: String,
    // // },
    // // registeredTeams: [
    // //     {
    // //         type: Schema.Types.ObjectId,
    // //         ref: "Team"
    // //     }
    // // ]



    //         }
    //     }
    // });
});