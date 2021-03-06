



import React, { Component } from "react";
import TournamentAllOptions from "./TournamentAllOptions";
import TournamentIndividuals from "./TournamentIndividuals";
import helpers from "./../utilities/helpers"



const TournamentAllPanel = React.createClass({
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
            tournaments: []
        }
    },
    componentDidMount: function() {
        console.log("showAllTournaments at least activated.");
        helpers.getAllTournaments().then(function(response){
            console.log("response");
            console.log(response.data);
            if (response.data !== this.state.tournaments) {
                console.log("Tournaments", response.data);
                this.setState({ tournaments: response.data});
            }
        }.bind(this));
    },
    render: function(){
        return (
        <div className="panel panel-default all-inner-div">
            <h2> All Tournaments </h2>
            <TournamentIndividuals data={this.state.tournaments}/>
        </div>
        );
    }
});

// Exporting our Panel component
export default TournamentAllPanel;
