



import React, { Component } from "react";
import TournamentAllOptions from "./TournamentAllOptions";
import TournamentAttendIndividuals from "./TournamentAttendIndividuals";
import helpers from "./../utilities/helpers"



const TournamentAttendPanel = React.createClass({
  getInitialState: function(){
        // helpers.getTournaments().then(function(response){
        //     console.log("response");
        //     console.log(response);
        //     if (response !== this.state.tournaments) {
        //         console.log("Tournaments", response.data);
        //         this.setState({ tournaments: response.data });
        //     }
        // });
      return {
            tournaments: [
                {
                    name: "THfjahiofioaTournament",
                    date: "July 4, 2017",
                    league: "fantasy",
                    location: "Clark Field (1234 Sample St. Austin, Tx 78741)",
                    registeredTeams: [
                        {
                            name: "Texas Quidditch"
                        },
                        {
                            name: "Austin Quidditch"
                        }
                    ],
                    attendees: [
                        {
                            name: "Jim"
                        },
                        {
                            name: "Bobby"
                        }
                    ],
                    comments: [
                        {
                            user: "Jim",
                            body: "I went to this tourny last year and it was cool",
                        },
                        {
                            user: "Bobby",
                            body: "IDK this is sample text",
                        }
                    ],
                    _id: "1234"
                },
                {   
                    name: "Some Other Tournament",
                    date: "July 4, 2017",
                    league: "USQ",
                    location: "An undisclosed location",
                    registeredTeams: [
                        {
                            name: "Sample Quidditch Team"
                        },
                        {
                            name: "Another Quidditch Team"
                        }
                    ],
                    attendees: [
                        {
                            name: "Alan"
                        },
                        {
                            name: "Bobby"
                        }
                    ],
                    comments: [
                        {
                            user: "Alan",
                            body: "Blah, Blah, Blah",
                        },
                        {
                            user: "Bobby",
                            body: "Blee, Blee, Blee",
                        }
                    ],
                    _id: "6789"
                },
                {   
                    name: "Third Sample Tournament",
                    date: "April 13, 2018",
                    league: "MLQ",
                    location: "TBD",
                    registeredTeams: [
                        {
                            name: "Austin Outlaws"
                        },
                        {
                            name: "League City Legends"
                        }
                    ],
                    attendees: [
                        {
                            name: "Gary"
                        },
                        {
                            name: "LaFounda"
                        }
                    ],
                    comments: [],
                    _id: "1357"
                }
            ]
        }
    },
    componentDidMount: function() {
        console.log("showAttendingTournaments at least activated.");
        helpers.getUserAttendTournaments().then(function(response){
            console.log("response");
            console.log(response);
            if (response !== this.state.tournaments) {
                console.log("Tournaments", response.data);
                this.setState({ tournaments: response.data });
            }
        }.bind(this));
    },

    render: function(){
        return (
        <div className="panel panel-default all-inner-div">
            <h3>Attending Tournament Panel</h3>
            <TournamentAttendIndividuals data={this.state.tournaments}/>
        </div>
        );
    }
});

// Exporting our Panel component
export default TournamentAttendPanel;
