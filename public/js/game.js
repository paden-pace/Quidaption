


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