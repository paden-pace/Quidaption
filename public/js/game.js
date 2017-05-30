


var homeScore = 0;
var awayScore = 0;
var homeName;
var awayName;
var homeColor;
var awayColor;

var allColors = "Red Orange Yellow Green Blue Purple White Gray Black"

$('#submitTeams').on('click', function () {
    console.log('submit clicked!');
    homeName = $("#home-name-input").val().trim();
    homeColor = $("#home-color-input").val().trim();
    $("#home-team-text").html(homeName)
    $("#home-score-col").addClass(homeColor);
    awayName = $("#away-name-input").val().trim();
    awayColor = $("#away-color-input").val().trim();
    $("#away-score-col").addClass(awayColor);
    $("#away-team-text").html(awayName)
    $('#body-set').addClass('hidden');
    $('#body-game').removeClass('hidden');

    return false;
})

$('#resetTeams').on('click', function () {
    console.log('reset clicked!');
    $("#home-score-col").removeClass(allColors);
    $("#away-score-col").removeClass(allColors);
    $('#body-game').addClass('hidden');
    $('#body-set').removeClass('hidden');
    return false;
})



$("#add-home-btn").on('click', function () {
    homeScore = homeScore + 10;
    console.log(homeScore);
    $("#home-score-text").html(homeScore);
});

$("#min-home-btn").on('click', function () {
    homeScore = homeScore - 10;
    console.log(homeScore);
    $("#home-score-text").html(homeScore);
});

$("#add-away-btn").on('click', function () {
    awayScore = awayScore + 10;
    console.log(awayScore);
    $("#away-score-text").html(awayScore);
});

$("#min-away-btn").on('click', function () {
    awayScore = awayScore - 10;
    console.log(awayScore);
    $("#away-score-text").html(awayScore);
});





$(document).ready(function () {
     console.log("game.js connected.")
});




// ===========================================================
// -------    Timer Functions     ----------------------------
// ===========================================================


// This code will run as soon as the page loads
window.onload = function() {
    $("#main-start").on("click", stopwatch.start);
    $("#main-stop").on("click", stopwatch.stop);
    $("#main-reset").on("click", stopwatch.reset);
};

//  Variable that will hold our setInterval that runs the stopwatch
var intervalId;

// Our stopwatch object
var stopwatch = {

  time: 0,

  reset: function() {
    $("#main-time").html("00:00");
    stopwatch.time = 0;

    // DONE: Change the "display" div to "00:00."
  },
  start: function() {

    // DONE: Use setInterval to start the count here.
    intervalId = setInterval(stopwatch.count, 1000);
  },
  stop: function() {

    // DONE: Use clearInterval to stop the count here.
    clearInterval(intervalId);
  },
  count: function() {

    // DONE: increment time by 1, remember we cant use "this" here.
    stopwatch.time++;

    // DONE: Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);
    console.log(converted);

    // DONE: Use the variable we just created to show the converted time in the "display" div.
    $("#main-time").html(converted);
  },
  timeConverter: function(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  }
};