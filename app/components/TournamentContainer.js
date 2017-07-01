


import React from "react";
import TournamentAllOptions from "./TournamentAllOptions";
import TournamentAllPanel from "./TournamentAllPanel";
import helpers from "./../utilities/helpers"

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

var TournamentContainer = React.createClass({
    getInitialState: function(){
        return {
            display: [
                {
                    title: "All Tournaments",
                    value: "all"
                },
                {
                    title: "Attending Tournaments",
                    value: "attending"
                },
                {
                    title: "Created Tournaments",
                    value: "created"
                }
                ],
            currentDisplay: "all"
        }
    },
    selectDisplay: function (title, value){
        this.setState({currentDisplay: value})
        console.log(title + " Title select clicked.");
        console.log(value + " Value select clicked.");
    },
    render: function() {
        if(this.state.currentDisplay == "all"){
            return (
                <div className="container">
                    <h3>All</h3>
                    <TournamentAllOptions data={this.state.display} handleClick={this.selectDisplay}/>
                    <TournamentAllPanel />
                </div>
            );
        } else if (this.state.currentDisplay == "attending"){
            return (
                <div className="container">
                    <h3>Attending</h3>
                    <TournamentAllOptions data={this.state.display} handleClick={this.selectDisplay}/>
                    <TournamentAllPanel />
                </div>
            );
        } else if (this.state.currentDisplay == "created"){
            return (
                <div className="container">
                    <h3>Created</h3>
                    <TournamentAllOptions data={this.state.display} handleClick={this.selectDisplay}/>
                    <TournamentAllPanel />
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
export default TournamentContainer;
