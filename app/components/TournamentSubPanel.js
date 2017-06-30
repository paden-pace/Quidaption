



import React, { Component } from "react";

// Importing our dropdown component
import TournamentAllOptions from "./TournamentAllOptions";

// Defining a list of dropdown options here
const tournamentAllOptions = [
  {
    text: "All Tournaments",
    value: "All"
  }, {
    text: "Created Tournaments",
    value: "MLQ"
  }, {
    text: "Attending Tournaments",
    value: "USQ"
  }
];

class TournamentAllPanel extends Component {
  // Initializing our dropdownOptions on state, setting a default selected option
  // Also setting all of our possible options using the dropdownOptions variable
  constructor() {
    super();
    this.state = {
        tournamentAllOptions,
        selected: {
            text: "All Tournaments",
            value: "All"
        },
        display: "all",
        showAll (){
            this.setState({display: "all"})
            console.log("Show All clicked")
        },
        showAttending (){
            this.setState({display: "attending"})
            console.log("Show Attending clicked")
        },
        showCreated (){
            this.setState({display: "created"})
            console.log("Show Created clicked")
        }
    };
    // Binding handleDropdownSelect to our component since we'll be passing
    // This method to another component
    this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
    this.allPanelDisplay = this.allPanelDisplay.bind(this);
  }
  // This function is called by the Dropdown component whenever an option is chosen
  handleDropdownSelect(option) {
    // Setting this.state.selected to the dropdown option the user clicks
    this.setState({ selected: option });
  }

  allPanelDisplay(option){
    switch(option){
      case "All":
        return (
          <div>All Tournaments</div>
        );
      case "MLQ":
        return (
          <div>MLQ Tournaments</div>
        );
      case "USQ":
        return (
          <div>USQ Tournaments:</div>
        );
      case "Other":
        return (
          <div>Other Tournaments:</div>
        );
      default: 
        return (
          <div>Choose which tournaments you would like to see.</div>
        );
    };
  }
    
    renderForm (){
        return(
            <div className="display-button-container">
                <button onClick={this.showAll} className="button-all button-active">All Tournaments</button>
                <button onClick={this.showAttending} className="button-all button-inactive">Attending Tournaments</button>
                <button onClick={this.showCreated} className="button-all button-inactive">Created Tournaments</button>
            </div>
        );
    }


  render() {
    let selectedDisplay = this.state.display;
    if (selectedDisplay == "all"){
        return (
            <div>
                <div className="display-button-container">
                    <button onClick={this.showAll} className="button-all button-active">All Tournaments</button>
                    <button onClick={this.showAttending} className="button-all button-inactive">Attending Tournaments</button>
                    <button onClick={this.showCreated} className="button-all button-inactive">Created Tournaments</button>
                </div>
                <h1>All Tournament Container</h1>
            </div>
        );
    }
    if (selectedDisplay == "attending"){
        return (
            <div>
                <div className="display-button-container">
                    <button onClick={this.showAll} className="button-all button-active">All Tournaments</button>
                    <button onClick={this.showAttending} className="button-all button-inactive">Attending Tournaments</button>
                    <button onClick={this.showCreated} className="button-all button-inactive">Created Tournaments</button>
                </div>
                <h1>Attending Tournament Container</h1>
            </div>
        );
    }
    if (selectedDisplay == "created"){
        return (
            <div>
                <div className="display-button-container">
                    <button onClick={this.showAll} className="button-all button-active">All Tournaments</button>
                    <button onClick={this.showAttending} className="button-all button-inactive">Attending Tournaments</button>
                    <button onClick={this.showCreated} className="button-all button-inactive">Created Tournaments</button>
                </div>
                <h1>Created Tournament Container</h1>
            </div>
        );
    }
  }
}

// Some styles we'll pass to our Panel component and dropdown component
const styles = {
  dropdownStyle: {
    float: "right",
    bottom: 10
  },
  panelHeadingStyle: {
    padding: 20
  }
};

// Exporting our Panel component
export default TournamentAllPanel;
