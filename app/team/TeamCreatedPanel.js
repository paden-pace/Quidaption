



import React, { Component } from "react";
import TeamAllOptions from "./TeamAllOptions";
import TeamCreatedIndividuals from "./TeamCreatedIndividuals";
import helpers from "./../utilities/helpers"



const TeamCreatedPanel = React.createClass({
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
            createdTeams: [
                {
                    name: "Sample Team",
                    members: [
                        {
                            name: "Bobby"
                        },
                        {
                            name: "JoAnn"
                        }
                    ],
                    // tournaments: [
                    //     {
                    //         name: "A Sample Tournament"
                    //     },
                    //     {
                    //         name: "Another Tournament"
                    //     }
                    // ],
                    chats: [
                        {
                            user: "Jim",
                            body: "What's up team you excited to play sports?",
                            date: "July 9, 2017"
                        },
                        {
                            user: "Bobby",
                            body: "IDK this is sample text",
                            date: "July 10, 2017"
                        }
                    ],
                    _id: "1234"
                },
                {
                    name: "Just Another Team",
                    members: [
                        {
                            name: "Gary"
                        },
                        {
                            name: "Dennis"
                        }
                    ],
                    // tournaments: [
                    //     {
                    //         name: "A Sample Tournament"
                    //     },
                    //     {
                    //         name: "Another Tournament"
                    //     }
                    // ],
                    chats: [
                        {
                            user: "Jim",
                            body: "What's up team you excited to play sports?",
                            date: "July 9, 2017"
                        },
                        {
                            user: "Bobby",
                            body: "IDK this is sample text",
                            date: "July 10, 2017"
                        }
                    ],
                    _id: "124"
                },
                {
                    name: "Third Team",
                    members: [
                        {
                            name: "Jimmy"
                        },
                        {
                            name: "Toby"
                        }
                    ],
                    // tournaments: [
                    //     {
                    //         name: "A Sample Tournament"
                    //     },
                    //     {
                    //         name: "Another Tournament"
                    //     }
                    // ],
                    chats: [
                        {
                            user: "Jim",
                            body: "What's up team you excited to play sports?",
                            date: "July 9, 2017"
                        },
                        {
                            user: "Bobby",
                            body: "IDK this is sample text",
                            date: "July 10, 2017"
                        }
                    ],
                    _id: "123"
                }
            ]
        }
    },
    componentDidMount: function() {
        console.log("showCreatedTeams at least activated.");
        helpers.getUserCreatedTeams().then(function(response){
            console.log("response");
            console.log(response.data.createdTeams);
            if (response.data.createdTeams !== this.state.createdTeams) {
                console.log("Created Teams", response.data.createdTeams);
                this.setState({ createdTeams: response.data });
            }
        }.bind(this));
    },

    render: function(){
        return (
        <div className="panel panel-default all-inner-div">
            <h3>Teams I Manage</h3>
            <TeamCreatedIndividuals data={this.state.createdTeams}/>
        </div>
        );
    }
});

// Exporting our Panel component
export default TeamCreatedPanel;
