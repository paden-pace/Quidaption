



import React, { Component } from "react";
import TournamentAllOptions from "./TournamentAllOptions";
import TournamentIndividuals from "./TournamentIndividuals";
import helpers from "./../utilities/helpers"



const TournamentAddPanel = React.createClass({
    getInitialState: function(){
            // helpers.getTournaments().then(function(response){
            //     console.log("response");
            //     console.log(response);
            //     if (response !== this.state.tournaments) {
            //         console.log("Tournaments", response.data);
            //         this.setState({ tournaments: response.data });
            //     }
            // });
        return {}
    },
            
    render: function(){
        return (
        <div className="panel panel-default panel-add">
            <h2>Let's add a tournament</h2>
        </div>
        );
    }
});

// Exporting our Panel component
export default TournamentAddPanel;
