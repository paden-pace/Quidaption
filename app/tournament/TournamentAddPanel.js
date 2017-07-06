



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
            <form method="post" action="/tournaments/add">
			<div className="form-group">
				<label>Name</label>
				<input type="text" className="form-control" placeholder="The Southwest Tournament" name="name" />
			</div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password" name="password" />
            </div>
            <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" className="form-control" placeholder="Password" name="password2" />
            </div>
            <div className="form-group">
                <label>League</label>
                <input type="text" className="form-control" placeholder="IQA" name="league" />
                {/*<select className="form-control" name="league" />
                    <option value="IQA">IQA</option>
                    <option value="MLQ">MLQ</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="Other">Other</option>*/}
            </div>
			<div className="form-group">
				<label>Date</label>
				<input type="text" className="form-control" placeholder="June 20, 2017" name="date" />
			</div>
			<div className="form-group">
				<label>Location</label>
				<input type="text" className="form-control" placeholder="422 E 6th St, Austin, TX 78701" name="location" />
			</div>
			<button type="submit" className="btn btn-default">Submit</button>
            </form>
        </div>
        );
    }
});

// Exporting our Panel component
export default TournamentAddPanel;
