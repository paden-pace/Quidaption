


import React from "react";
import TeamAllOptions from "./TeamAllOptions";
import TeamAllPanel from "./TeamAllPanel";
//import TeamJoinPanel from "./TeamJoinPanel";
import TeamCreatedPanel from "./TeamCreatedPanel";
import TeamCreatePanel from "./TeamCreatePanel";
import helpers from "./../utilities/helpers"
import SiteNav from "./../siteNav"
// // Our Container component's only purpose will be to hold and center the rest of our content
// // props.children will be substituted for any nested components deployed
// const TournamentContainer = props => (
//   <div style={styles.containerStyle} className="container">
//     <div className="row">
//       <div className="col-md-12 col-md-offset-3">
//         {props.children}
//       </div>
//     </div>
//   </div>
// );

var TeamContainer = React.createClass({
    getInitialState: function(){
        return {
            display: [
                {
                    title: "My Teams",
                    value: "all"
                },
                {
                    title: "Teams I Manage",
                    value: "created"
                },
                {
                    title: "Join Team",
                    value: "join"
                },
                {
                    title: "Create Team",
                    value: "create"
                }
                ],
            currentDisplay: "all",
            inputTeamName: '',
            inputTeamPassword: ''
        }
    },
    selectDisplay: function (title, value){
        this.setState({currentDisplay: value})
        console.log(title + " Title select clicked.");
        console.log(value + " Value select clicked.");
    },

    updateInputTeamName: function(teamname) {
        this.setState({
        inputTeamName: teamname.target.value
        });
    },

    updateInputTeamPassword: function(teampassword) {
        this.setState({
        inputTeamPassword: teampassword.target.value
        });
    },

    submitInputTeamValue: function() {
        if(this.state.inputTeamName != '' && this.state.inputTeamPassword != ''){
            console.log("this.state.inputTeamName from TeamCon.SubmitTeamInput")
            console.log(this.state.inputTeamName)
                        console.log("this.state.inputTeamPassword from TeamCon.SubmitTeamInput")
            console.log(this.state.inputPassword)
            helpers.joinTeam(this.state.inputTeamName, this.state.inputTeamPassword)
        } else {
            console.log("missing a value before submit in TeamContainer");
            alert("Missing Team name or Password")
        }
        this.setState({
            inputTeamPassword: '',
            inputTeamName: ''
        });      
    },


    render: function() {
        if(this.state.currentDisplay == "all"){
            return (
                <div className="container team-container" id="team-subcontainer">
                    <TeamAllOptions data={this.state.display} handleClick={this.selectDisplay}/>
                    <TeamAllPanel />
                </div>
            );
        } else if (this.state.currentDisplay == "created"){
            return (
                <div className="container team-subcontainer" id="team-subcontainer">
                    <TeamAllOptions data={this.state.display} handleClick={this.selectDisplay}/>
                    <TeamCreatedPanel />
                </div>
            );
        } else if (this.state.currentDisplay == "join"){
            return (
                <div className="container team-subcontainer" id="team-subcontainer">
                    <TeamAllOptions data={this.state.display} handleClick={this.selectDisplay}/>
                    <h3>Join Team</h3>
                    <div className="body join-team-body-div" id="join-team-body">  
                        <h3>Team Name: </h3>
                        <input type="text" value={this.state.inputTeamName} onChange={this.updateInputTeamName}/>
                        <h3>Password: </h3>
                        <input type="password"value={this.state.inputTeamPassword} onChange={this.updateInputTeamPassword}/>
                        <br />
                        <button type="submit" 
                            className="btn btn-default"
                            onClick={this.submitInputTeamValue}
                            >Submit
                        </button>
                    </div>
                </div>
            );
        } else if (this.state.currentDisplay == "create"){
            return (
                <div className="container team-subcontainer" id="team-subcontainer">
                    <TeamAllOptions data={this.state.display} handleClick={this.selectDisplay}/>
                    <TeamCreatePanel />
                </div>
            );
        }
  }
})

// // An object we'll use to apply inline styles to this component
// const styles = {
//   containerStyle: {
//     marginTop: 50,
//     textAlign: "center"
//   }
// };

// Exporting this component as the default (only) export
export default TeamContainer;
