



import React, { Component } from "react";
import TeamAllOptions from "./TeamAllOptions";
import TeamIndividuals from "./TeamIndividuals";
import helpers from "./../utilities/helpers"



const TeamCreatePanel = React.createClass({
    getInitialState: function(){
        return {}
    },
            
    render: function(){
        return (
        <div className="panel panel-default panel-add">
            <h2>Create A New Team</h2>
            <form method="post" action="/teams/register">
			<div className="form-group">
				<label>Name</label>
				<input type="text" className="form-control" placeholder="A New Team" name="name" />
			</div>
            <div className="form-group">
				<label>Contact Email</label>
				<input type="text" className="form-control" placeholder="Bob@example.com" name="email" />
			</div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Password123" name="password" />
            </div>
            <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" className="form-control" placeholder="Password123" name="password2" />
            </div>
			<button type="submit" className="btn btn-default">Add</button>
            </form>
        </div>
        );
    }
});

// Exporting our Panel component
export default TeamCreatePanel;
