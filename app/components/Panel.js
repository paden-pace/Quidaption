



import React, { Component } from "react";

// Importing our dropdown component
import Dropdown from "./Dropdown";

// Defining a list of dropwdown options here
const dropdownOptions = [
  {
    text: "All Tournaments",
    value: "All"
  }, {
    text: "MLQ Tournaments",
    value: "MLQ"
  }, {
    text: "USQ Tournaments",
    value: "USQ"
  }, {
    text: "Other Tournaments",
    value: "Other"
  }
];

class Panel extends Component {
  // Initializing our dropdownOptions on state, setting a default selected option
  // Also setting all of our possible options using the dropdownOptions variable
  constructor() {
    super();
    this.state = {
      dropdownOptions,
      selected: {
        text: "All Tournaments",
        value: "All"
      }
    };
    // Binding handleDropdownSelect to our component since we'll be passing
    // This method to another component
    this.handleDropdownSelect = this.handleDropdownSelect.bind(this);
    this.panelDisplay = this.panelDisplay.bind(this);
  }
  // This function is called by the Dropdown component whenever an option is chosen
  handleDropdownSelect(option) {
    // Setting this.state.selected to the dropdown option the user clicks
    this.setState({ selected: option });
  }

  panelDisplay(option){
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
    // if (this.state.selected == )
    // function UserGreeting(props) {
    //   return <h1>Welcome back!</h1>;
    // }

    // function GuestGreeting(props) {
    //   return <h1>Please sign up.</h1>;
    // }
  }


  render() {
    let selectedOption = this.state.selected.value;
    return (
      <div className="panel panel-default">
        <div
          style={styles.panelHeadingStyle}
          className="panel-heading"
        >
          Choose One!
          <Dropdown
            style={styles.dropdownStyle}
            options={this.state.dropdownOptions}
            selected={this.state.selected}
            handleSelect={this.handleDropdownSelect}  
          />
        </div>
        <div className="panel-body">
        {this.panelDisplay(selectedOption)}
        </div>
      </div>
    );
  }
}

// Some styles we'll pass to our Panel component and dropwdown component
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
export default Panel;
