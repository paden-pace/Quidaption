



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
        helpers.getTournaments().then(function(response){
            console.log("response");
            console.log(response.data.tournaments);
            if (response.data.tournaments !== this.state.tournaments) {
                console.log("Tournaments", response.data.tournaments);
                this.setState({ tournaments: response.data.tournaments });
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
