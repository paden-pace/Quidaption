$( document ).ready(function() {

	console.log("team-func.js linked!");


	//Declaring/Assigning the tab click functions in About Us 
	function chatClick () {
        console.log("chatClick")
		$("#team-pane-chat").addClass("active");
		$("#team-pane-chat").addClass("in");
		$("#team-pane-members").removeClass("active");
		$("#team-pane-members").removeClass("in");
		$("#team-pane-tournaments").removeClass("active");
		$("#team-pane-tournaments").removeClass("in");
		$("#list-chat").addClass("active");
		$("#list-members").removeClass("active");
		$("#list-tournaments").removeClass("active");
	};
	function membersClick () {
        console.log("membersClick")
		$("#team-pane-chat").removeClass("active");
		$("#team-pane-chat").removeClass("in");
		$("#team-pane-members").addClass("active");
		$("#team-pane-members").addClass("in");
		$("#team-pane-tournaments").removeClass("active");
		$("#team-pane-tournaments").removeClass("in");
		$("#list-chat").removeClass("active");
		$("#list-members").addClass("active");
		$("#list-tournaments").removeClass("active");
	};
	function tournamentsClick () {
        console.log("tournamentsClick")
		$("#team-pane-chat").removeClass("active");
		$("#team-pane-chat").removeClass("in");
		$("#team-pane-members").removeClass("active");
		$("#team-pane-members").removeClass("in");
		$("#team-pane-tournaments").addClass("active");
		$("#team-pane-tournaments").addClass("in");
		$("#list-chat").removeClass("active");
		$("#list-members").removeClass("active");
		$("#list-tournaments").addClass("active");
	};

	$("#tab-chat").on('click', function(){
		 chatClick ();
	});
	$("#tab-members").on('click', function(){
		membersClick ();
	});
	$("#tab-tournaments").on('click', function(){
		tournamentsClick ();
	});
});