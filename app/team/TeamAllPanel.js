



import React, { Component } from "react";
import TeamAllOptions from "./TeamAllOptions";
import TeamIndividuals from "./TeamIndividuals";
import helpers from "./../utilities/helpers"



const TeamAllPanel = React.createClass({
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
            teams: []
        }
    },
    componentDidMount: function() {
        console.log("showAllTeams at least activated.");
        helpers.getTeams().then(function(response){
            console.log("response");
            console.log(response.data.teams);
            if (response.data !== this.state.teams) {
                console.log("Teams", response.data);
                this.setState({ teams: response.data});
            }
        }.bind(this));
    },
    render: function(){
        return (
        <div className="panel panel-default all-inner-div">
            <h2> My Teams </h2>
            <TeamIndividuals data={this.state.teams}/>
        </div>
        );
    }
});

// Exporting our Panel component
export default TeamAllPanel;
