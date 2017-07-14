


$(document).ready(function() {

    console.log("/team-func.js activated")

    
});

$(document).on("click", ".extend-members-button", function() {
		 console.log("extended pressed");
         var thisId = $(this).attr("data-id");
         console.log("thisId from Button");
         console.log(thisId);
         $("#"+thisId).removeClass("hide");
         //$(".extend-tournament-button").addClass("hide");

    });

     $(document).on("click", ".close-members-button", function() {
         console.log("close clicked")
         var thisId = $(this).attr("data-id");
         $("#"+thisId).addClass("hide");
         //$(".extend-tournament-button").removeClass("hide");
    //     console.log("thisId");
    //     console.log(thisId);
    //     $(".char-age"+thisId).addClass("hide");
    //     $(".char-race"+thisId).addClass("hide");
    //     $(".char-className"+thisId).addClass("hide");
    //     $(".char-background"+thisId).addClass("hide");
    //     $(".char-gender"+thisId).addClass("hide");
    //     $(".close-char"+thisId).addClass("hide");
    //     $(".expand-char"+thisId).removeClass("hide");
    // });
});